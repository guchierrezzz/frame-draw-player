import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const ClearDrawingButton = () => {
  const { canvasRef, setVertices, setTempVertices } = useContext(MainContext);
  return (
    <button
      className="uppercase btn"
      onClick={() => {
        canvasRef.current?.clear();
        setVertices([]);
        setTempVertices([]);
      }}
    >
      Limpar
    </button>
  );
};
