import { ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
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
  tempVertices: [] | ICoordinate[];
  setTempVertices: React.Dispatch<React.SetStateAction<ICoordinate[] | []>>;
  interpolateVertices: (
    point1: ICoordinate,
    point2: ICoordinate,
    data: Array<ICoordinate>
  ) => void;
  connectVertices: (vertices: ICoordinate[]) => void;
}

export interface IMainContextProps {
  children: ReactNode;
}

type InputName = "x" | "y";

export interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputName: InputName;
  inputType: string;
  inputPlaceholder: string;
}
