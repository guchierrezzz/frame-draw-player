import { CoordinateInput } from "../general/CoordinateInput";
import { PlayerButtons } from "./PlayerButtons";
import { VideoProperties } from "./VideoProperties";

export const VideoDashboard = () => {
  return (
    <div className="absolute bottom-0 flex flex-col w-full gap-5">
      <PlayerButtons />
      <CoordinateInput />
      <VideoProperties />
    </div>
  );
};
