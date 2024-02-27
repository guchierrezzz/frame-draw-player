import { ReactNode } from "react";
import CanvasDraw from "react-canvas-draw";

export interface ICoordinate {
  x: number;
  y: number;
}

export interface ICoordinateInputProps {
  generateVerticesCoordinates: (e: React.ChangeEvent<HTMLFormElement>) => {
    x: number;
    y: number;
  }[];
  connectVertices: (vertices: ICoordinate[]) => void;
  isDrawing: boolean;
}

export interface IMainContext {
  inputRef: React.RefObject<HTMLInputElement>;
  colorInputRef: React.RefObject<HTMLInputElement>;
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<CanvasDraw>;
  videoUrl: string | null;
  setVideoUrl: React.Dispatch<React.SetStateAction<string | null>>;
  isDrawing: boolean;
  setIsDrawing: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isFastForward: boolean;
  setIsFastForward: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  height: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  vertices: [] | ICoordinate[];
  setVertices: React.Dispatch<React.SetStateAction<[] | ICoordinate[]>>;
  interpolateVertices: (
    point1: ICoordinate,
    point2: ICoordinate,
    data: Array<ICoordinate>
  ) => void;
  generateVerticesCoordinates: (
    e: React.ChangeEvent<HTMLFormElement>
  ) => ICoordinate[];
  connectVertices: (vertices: ICoordinate[]) => void;
}

export interface IMainContextProps {
  children: ReactNode;
}
