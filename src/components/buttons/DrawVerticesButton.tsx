import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const DrawVerticesButton = () => {
  const { setIsDrawing } = useContext(MainContext);
  return (
    <button
      className="uppercase btn"
      onClick={() => {
        setIsDrawing((prevState) => !prevState);
      }}
    >
      Desenhar vértices
    </button>
  );
};
