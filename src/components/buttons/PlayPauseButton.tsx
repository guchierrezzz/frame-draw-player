import { TiMediaPlayOutline } from "react-icons/ti";
import { IPlayPauseButtonProps } from "../../interface";

export const PlayPauseButton = ({ func, playState }: IPlayPauseButtonProps) => {
  return (
    <button
      onClick={func}
      className={`btn ${playState ? "btn-secondary" : ""} uppercase`}
    >
      <TiMediaPlayOutline className="text-2xl" />
    </button>
  );
};
