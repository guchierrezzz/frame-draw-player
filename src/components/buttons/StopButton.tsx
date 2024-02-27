import { TiMediaStopOutline } from "react-icons/ti";
import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const StopButton = () => {
  const { videoRef, setIsPlaying, isDrawing } = useContext(MainContext);

  const handleRestartClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true); // Start playing after restart
    }
  };
  return (
    <button
      onClick={handleRestartClick}
      disabled={isDrawing}
      className="uppercase btn"
    >
      <TiMediaStopOutline className="text-2xl" />
    </button>
  );
};
