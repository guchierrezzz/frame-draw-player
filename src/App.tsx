import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { StopButton } from "./components/buttons/StopButton";
import { PlayPauseButton } from "./components/buttons/PlayPauseButton";
import { PlaySpeedButton } from "./components/buttons/PlaySpeedButton";
import { RemoveVideoButton } from "./components/buttons/RemoveVideoButton";
import { ICoordinate } from "./interface";
import { CoordinateInput } from "./components/general/CoordinateInput";

function App() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFastForward, setIsFastForward] = useState(false);
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(1000);
  const [color, setColor] = useState<string>("#000000");
  const [vertices, setVertices] = useState<ICoordinate[] | []>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<CanvasDraw>(null);

  //input fie logic
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoUrl(videoUrl);
    }
  };

  const handleVideoLoadedMetadata = (
    event: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = event.currentTarget;
    setWidth(video.clientWidth);
    setHeight(video.clientHeight);
  };

  //button logic
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setColor(color);
  };

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestartClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true); // Start playing after restart
    }
  };

  const handleFastForwardClick = () => {
    if (videoRef.current) {
      if (videoRef.current.playbackRate === 1) {
        videoRef.current.playbackRate = 2;
        setIsFastForward(true);
      } else if (videoRef.current.playbackRate === 2) {
        videoRef.current.playbackRate = 1;
        setIsFastForward(false);
      }
    }
  };

  //canvas draw logic
  const interpolateVertices = (
    point1: ICoordinate,
    point2: ICoordinate,
    data: Array<ICoordinate>
  ) => {
    data.push({ x: point1.x, y: point1.y });

    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const distance = Math.max(Math.abs(dx), Math.abs(dy));

    const stepX = dx / distance;
    const stepY = dy / distance;

    for (let t = 1; t < distance; t++) {
      const x = point1.x + t * stepX;
      const y = point1.y + t * stepY;
      data.push({ x: Math.round(x), y: Math.round(y) });
    }

    data.push({ x: point2.x, y: point2.y });
  };

  const generateVerticesCoordinates = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    const inputValue = (e.target.elements[0] as HTMLInputElement).value;
    const values = inputValue.split(",");
    if (values.length <= 6 && values.length % 2 != 0) {
      alert("Número de coordenadas inválido");
    }

    let vertices = [];

    for (let i = 0; i < values.length; i += 2) {
      vertices.push({
        x: Number(values[i]),
        y: Number(values[i + 1]),
      });
    }

    vertices.push({ x: Number(values[0]), y: Number(values[1]) });

    setVertices(vertices);

    return vertices;
  };

  const connectVertices = (vertices: ICoordinate[]) => {
    const data = {
      height: videoRef.current?.videoHeight,
      lines: [
        {
          brushColor: colorInputRef.current?.value,
          brushRadius: 10,
          points: [],
        },
      ],
      width: videoRef.current?.videoWidth,
    };

    for (let i = 0; i < vertices.length - 1; i++) {
      interpolateVertices(vertices[i], vertices[i + 1], data.lines[0].points);
    }

    if (canvasRef.current) {
      canvasRef.current.loadSaveData(JSON.stringify(data));
    }
  };

  //player/canvas width resizing logic
  const handleResize = () => {
    if (videoRef.current) {
      setWidth(videoRef.current.clientWidth);
      setHeight(videoRef.current.clientHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex flex-col gap-5 items-center max-h-[70%]">
        {!videoUrl && (
          <>
            <h1 className="text-5xl tracking-widest text-center uppercase">
              FrameDraw Player
            </h1>
            <p>Para iniciar, selecione o arquivo abaixo:</p>
            <input
              type="file"
              className="w-full max-w-xs file-input file-input-bordered"
              accept="video/*"
              onChange={handleFileChange}
              ref={inputRef}
            />
          </>
        )}
      </div>

      {videoUrl && (
        <>
          <video
            ref={videoRef}
            onLoadedMetadata={handleVideoLoadedMetadata}
            className="absolute z-10 right-1/2 translate-x-1/2 top-5 max-h-[70%]"
            onClick={(e: React.MouseEvent<HTMLVideoElement>) => {
              console.log(e.clientX);
              console.log(e.clientY);
            }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <CanvasDraw
            className="absolute z-20 translate-x-1/2 pointer-events-none right-1/2 top-5"
            hideGrid
            hideInterface
            canvasWidth={width}
            canvasHeight={height}
            brushColor={color}
            brushRadius={5}
            backgroundColor="none"
            loadTimeOffset={0}
            immediateLoading
            ref={canvasRef}
          />

          <div className="absolute bottom-0 flex flex-col w-full gap-5 overflow-hidden">
            <div className="flex items-center justify-center w-5/6 gap-5 mx-auto">
              <StopButton func={handleRestartClick} />
              <PlayPauseButton
                func={handlePlayPauseClick}
                playState={isPlaying}
              />
              <PlaySpeedButton
                func={handleFastForwardClick}
                playSpeedState={isFastForward}
              />
              <RemoveVideoButton
                inputRef={inputRef}
                setIsFastForward={setIsFastForward}
                setIsPlaying={setIsPlaying}
                setVideoUrl={setVideoUrl}
              />
              <button
                className="uppercase btn"
                onClick={() => {
                  canvasRef.current?.clear();
                  setVertices([]);
                }}
              >
                Limpar
              </button>
              <input
                type="color"
                ref={colorInputRef}
                onChange={handleColorChange}
              ></input>
            </div>
            <CoordinateInput
              connectVertices={connectVertices}
              generateVerticesCoordinates={generateVerticesCoordinates}
            />
            <div className="flex gap-5">
              <p>
                Resolução do vídeo: {videoRef.current?.videoWidth}x
                {videoRef.current?.videoHeight}
              </p>
              {vertices.length > 1 && (
                <p>
                  Coordenadas:{" "}
                  {vertices.map(({ x, y }) => `(${x},${y})`).join(", ")}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
