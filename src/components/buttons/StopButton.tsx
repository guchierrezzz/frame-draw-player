import { TiMediaStopOutline } from "react-icons/ti";
import { IStopButtonProps } from "../../interface";

export const StopButton = ({ func }: IStopButtonProps) => {
  return (
    <button onClick={func} className="btn uppercase">
      <TiMediaStopOutline className="text-2xl" />
    </button>
  );
};
