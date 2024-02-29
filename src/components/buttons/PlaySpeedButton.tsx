import { ChangeEvent, useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const PlaySpeedButton = () => {
  const { isDrawing, videoRef } = useContext(MainContext);

  const handleSpeedChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (videoRef.current) {
      const playSpeed = e.target.value;
      videoRef.current.playbackRate = Number(playSpeed);
    }
  };

  return (
    <select
      disabled={isDrawing}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSpeedChange(e)}
      className="max-w-xs select select-bordered"
      defaultValue={0}
    >
      <option value="0" disabled>
        Velocidade de reprodução
      </option>
      <option value="2">200%</option>
      <option value="1.5">150%</option>
      <option value="1">100%</option>
      <option value="0.5">50%</option>
      <option value="0.1">10%</option>
    </select>
  );
};
