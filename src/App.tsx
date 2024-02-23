import { useEffect, useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { StopButton } from "./components/buttons/StopButton";
import { PlayPauseButton } from "./components/buttons/PlayPauseButton";
import { PlaySpeedButton } from "./components/buttons/PlaySpeedButton";
import { RemoveVideoButton } from "./components/buttons/RemoveVideoButton";

function App() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFastForward, setIsFastForward] = useState(false);
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(1000);
  const [color, setColor] = useState<string>("yellow");

  const inputRef = useRef<HTMLInputElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<CanvasDraw>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoUrl(videoUrl);
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setColor(color);
  };

  const handleVideoLoadedMetadata = (
    event: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    const video = event.currentTarget;
    setWidth(video.videoWidth);
    setHeight(video.videoHeight);
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
      <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 flex flex-col gap-5 items-center">
        {!videoUrl && (
          <>
            <h1 className="text-5xl text-center uppercase tracking-widest">
              FrameDraw Player
            </h1>
            <p>Para iniciar, selecione o arquivo abaixo:</p>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
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
            className="absolute z-10 right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <CanvasDraw
            className="absolute right-1/2 translate-x-1/2 z-20 bottom-1/2 translate-y-1/2"
            hideGrid={true}
            canvasWidth={width}
            canvasHeight={height}
            brushColor={color}
            catenaryColor={color}
            backgroundColor="none"
            ref={canvasRef}
          />

          <div className="flex gap-5 items-center bottom-10 right-1/2 translate-x-1/2 absolute">
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
              className="btn uppercase"
              onClick={() => {
                // canvasRef.current?.clear();
                console.log(canvasRef.current?.getSaveData());
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
        </>
      )}
    </>
  );
}

export default App;
