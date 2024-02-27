/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import { ICoordinate, IMainContext, IMainContextProps } from "../interface";
import CanvasDraw from "react-canvas-draw";

export const MainContext = createContext({} as IMainContext);

export const MainContextProvider = ({ children }: IMainContextProps) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
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

  const interpolateVertices = (
    point1: ICoordinate,
    point2: ICoordinate,
    data: Array<ICoordinate>
  ): void => {
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
  ): ICoordinate[] => {
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

  const connectVertices = (vertices: ICoordinate[]): void => {
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
      <MainContext.Provider
        value={{
          canvasRef,
          color,
          colorInputRef,
          height,
          inputRef,
          isDrawing,
          isFastForward,
          setIsFastForward,
          isPlaying,
          setColor,
          setHeight,
          setIsDrawing,
          setIsPlaying,
          setVertices,
          setVideoUrl,
          setWidth,
          vertices,
          videoRef,
          videoUrl,
          width,
          connectVertices,
          generateVerticesCoordinates,
          interpolateVertices,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
};
