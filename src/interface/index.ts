export interface IStopButtonProps {
  func: () => void;
}

export interface IPlayPauseButtonProps {
  func: () => void;
  playState: boolean;
}

export interface IPlaySpeedButtonProps {
  func: () => void;
  playSpeedState: boolean;
}

export interface IRemoveVideoButtonProps {
  setVideoUrl: React.Dispatch<React.SetStateAction<string | null>>;
  inputRef: React.RefObject<HTMLInputElement>;
  setIsFastForward: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IColorPickerButtonProps {
  ref: React.RefObject<HTMLInputElement>;
  func: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IClearDrawingButtonProps {
  clear: () => void;
}

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
}
