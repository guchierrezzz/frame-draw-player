import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const RemoveVideoButton = () => {
  const {
    isDrawing,
    setVideoUrl,
    setIsFastForward,
    setIsPlaying,
    inputRef,
    setVertices,
  } = useContext(MainContext);
  return (
    <button
      disabled={isDrawing}
      onClick={() => {
        setVideoUrl(null);
        setIsFastForward(false);
        setIsPlaying(false);
        setVertices([]);

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
