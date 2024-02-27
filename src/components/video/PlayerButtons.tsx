import { StopButton } from "../buttons/StopButton";
import { PlayPauseButton } from "../buttons/PlayPauseButton";
import { PlaySpeedButton } from "../buttons/PlaySpeedButton";
import { RemoveVideoButton } from "../buttons/RemoveVideoButton";
import { DrawVerticesButton } from "../buttons/DrawVerticesButton";
import { ColorPickerButton } from "../buttons/ColorPickerButton";

export const PlayerButtons = () => {
  return (
    <div className="flex items-center justify-center w-5/6 gap-5 mx-auto">
      <StopButton />
      <PlayPauseButton />
      <PlaySpeedButton />
      <RemoveVideoButton />
      <DrawVerticesButton />
      <ColorPickerButton />
    </div>
  );
};
