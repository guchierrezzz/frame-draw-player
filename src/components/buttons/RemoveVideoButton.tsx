import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const RemoveVideoButton = () => {
  const { isDrawing, setVideoUrl, setIsFastForward, setIsPlaying, inputRef } =
    useContext(MainContext);
  return (
    <button
      disabled={isDrawing}
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
