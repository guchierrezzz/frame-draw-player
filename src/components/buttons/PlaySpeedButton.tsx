import { TiMediaFastForwardOutline } from "react-icons/ti";
import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const PlaySpeedButton = () => {
  const { isDrawing, isFastForward, videoRef, setIsFastForward } =
    useContext(MainContext);

  const handleFastForwardClick = () => {
    if (videoRef.current) {
      if (videoRef.current.playbackRate === 1) {
        videoRef.current.playbackRate = 2;
        setIsFastForward(true);
      } else if (videoRef.current.playbackRate === 2) {
        videoRef.current.playbackRate = 1;
        setIsFastForward(false);
      }
    }
  };
  return (
    <button
      onClick={handleFastForwardClick}
      disabled={isDrawing}
      className={`btn ${isFastForward ? "btn-secondary" : ""} uppercase`}
    >
      <TiMediaFastForwardOutline className="text-2xl" />
    </button>
  );
};
