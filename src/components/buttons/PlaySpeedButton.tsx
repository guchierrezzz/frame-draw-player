import {
  TiMediaFastForwardOutline,
  TiMediaRewindOutline,
} from "react-icons/ti";
import { IPlaySpeedButtonProps } from "../../interface";

export const PlaySpeedButton = ({
  func,
  playSpeedState,
}: IPlaySpeedButtonProps) => {
  return (
    <button
      onClick={func}
      className={`btn ${playSpeedState ? "btn-secondary" : ""} uppercase`}
    >
      {playSpeedState ? (
        <TiMediaRewindOutline className="text-2xl" />
      ) : (
        <TiMediaFastForwardOutline className="text-2xl" />
      )}
    </button>
  );
};
