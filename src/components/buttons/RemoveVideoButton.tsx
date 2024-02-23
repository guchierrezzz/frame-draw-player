import { IRemoveVideoButtonProps } from "../../interface";

export const RemoveVideoButton = ({
  inputRef,
  setIsFastForward,
  setIsPlaying,
  setVideoUrl,
}: IRemoveVideoButtonProps) => {
  return (
    <button
      onClick={() => {
        setVideoUrl(null);
        setIsFastForward(false);
        setIsPlaying(false);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }}
      className="btn uppercase"
    >
      Remover video
    </button>
  );
};
