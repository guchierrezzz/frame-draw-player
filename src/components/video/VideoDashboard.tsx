import { CoordinateInput } from "../general/CoordinateInput";
import { PlayerButtons } from "./PlayerButtons";
import { VideoProperties } from "./VideoProperties";

export const VideoDashboard = () => {
  return (
    <div className="flex flex-col w-full gap-5 ">
      <VideoProperties />
      <PlayerButtons />
      <CoordinateInput />
    </div>
  );
};
