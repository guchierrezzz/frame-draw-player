import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const DrawVerticesButton = () => {
  const { setIsDrawing, isDrawing, connectVertices, vertices, setVertices } =
    useContext(MainContext);
  return (
    <button
      className="uppercase btn"
      onClick={() => {
        if (isDrawing && vertices.length > 1) {
          //gambiarra pra impedir que o onchange do canvas re-atualize os valores de coordenadas ao conectar os vertices
          const coordinates = vertices;
          connectVertices(vertices);
          setVertices(coordinates);
        }

        setIsDrawing((prevState) => !prevState);
      }}
    >
      {isDrawing ? "Finalizar seleção" : "Selecionar vértices"}
    </button>
  );
};
