import { TiMediaPauseOutline, TiMediaPlayOutline } from "react-icons/ti";
import { IPlayPauseButtonProps } from "../../interface";

export const PlayPauseButton = ({ func, playState }: IPlayPauseButtonProps) => {
  return (
    <button
      onClick={func}
      className={`btn ${playState ? "btn-secondary" : ""} uppercase`}
    >
      {playState ? (
        <TiMediaPauseOutline className="text-2xl" />
      ) : (
        <TiMediaPlayOutline className="text-2xl" />
      )}
    </button>
  );
};
