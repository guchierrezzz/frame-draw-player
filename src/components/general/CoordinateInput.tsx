import { ICoordinateInputProps } from "../../interface";

export const CoordinateInput = ({
  connectVertices,
  generateVerticesCoordinates,
}: ICoordinateInputProps) => {
  return (
    <>
      <form
        onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
          e.preventDefault();
          const vertices = generateVerticesCoordinates(e);
          console.log(vertices);
          connectVertices(vertices);
        }}
        className="flex w-5/6 mx-auto"
      >
        <input
          type="text"
          placeholder="Inserir coordenadas"
          className="w-full input input-bordered"
          name="coordinates"
        />
        <button className="uppercase btn">Desenhar</button>
      </form>
    </>
  );
};
