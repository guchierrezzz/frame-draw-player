import { IRemoveVideoButtonProps } from "../../interface";

export const RemoveVideoButton = ({
  inputRef,
  setVideoUrl,
  setIsFastForward,
  setIsPlaying,
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
      className="uppercase btn"
    >
      Remover video
    </button>
  );
};
