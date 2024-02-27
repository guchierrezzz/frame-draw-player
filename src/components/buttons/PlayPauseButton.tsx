import { useContext } from "react";
import { TiMediaPlayOutline } from "react-icons/ti";
import { MainContext } from "../../provider/MainContext";

export const PlayPauseButton = () => {
  const { isDrawing, videoRef, isPlaying, setIsPlaying } =
    useContext(MainContext);

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
  return (
    <button
      onClick={handlePlayPauseClick}
      disabled={isDrawing}
      className={`btn ${isPlaying ? "btn-secondary" : ""} uppercase`}
    >
      <TiMediaPlayOutline className="text-2xl" />
    </button>
  );
};
