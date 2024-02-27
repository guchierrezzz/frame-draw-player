import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const VideoProperties = () => {
  const { videoRef, vertices } = useContext(MainContext);
  return (
    <div className="flex gap-5">
      <p>
        Resolução do vídeo: {videoRef.current?.videoWidth}x
        {videoRef.current?.videoHeight}
      </p>
      {vertices.length > 1 && (
        <p>
          Coordenadas: {vertices.map(({ x, y }) => `(${x},${y})`).join(", ")}
        </p>
      )}
    </div>
  );
};
