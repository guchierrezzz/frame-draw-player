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
  setIsFastForward: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface IColorPickerButtonProps {
  ref: React.RefObject<HTMLInputElement>;
  func: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IClearDrawingButtonProps {
  clear: () => void;
}
