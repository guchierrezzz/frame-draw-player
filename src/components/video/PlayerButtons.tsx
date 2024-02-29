import { StopButton } from "../buttons/StopButton";
import { PlayPauseButton } from "../buttons/PlayPauseButton";
import { PlaySpeedButton } from "../buttons/PlaySpeedButton";
import { RemoveVideoButton } from "../buttons/RemoveVideoButton";
import { DrawVerticesButton } from "../buttons/DrawVerticesButton";
import { ColorPickerButton } from "../buttons/ColorPickerButton";
import { ClearDrawingButton } from "../buttons/ClearDrawingButton";

export const PlayerButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <StopButton />
      <PlayPauseButton />
      <PlaySpeedButton />
      <RemoveVideoButton />
      <ClearDrawingButton />
      <DrawVerticesButton />
      <ColorPickerButton />
    </div>
  );
};
