import { useContext } from "react";
import { CoordinateInput } from "../general/CoordinateInput";
import { MainContext } from "../../provider/MainContext";
import { PlayerButtons } from "./PlayerButtons";
import { VideoProperties } from "./VideoProperties";

export const VideoDashboard = () => {
  const { connectVertices, generateVerticesCoordinates, isDrawing } =
    useContext(MainContext);
  return (
    <div className="absolute bottom-0 flex flex-col w-full gap-5 overflow-hidden">
      <PlayerButtons />
      <CoordinateInput
        connectVertices={connectVertices}
        generateVerticesCoordinates={generateVerticesCoordinates}
        isDrawing={isDrawing}
      />
      <VideoProperties />
    </div>
  );
};
