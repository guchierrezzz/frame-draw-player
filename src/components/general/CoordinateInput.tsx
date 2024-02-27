import { useContext, useEffect } from "react";
import { MainContext } from "../../provider/MainContext";
import { FormTextInput } from "./FormTextInput";
import {
  CoordinatesFormSchema,
  TCoordinatesFormSchema,
} from "../../schema/CoordinatesFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICoordinate } from "../../interface";

export const CoordinateInput = () => {
  const {
    setVertices,
    isDrawing,
    connectVertices,
    setTempVertices,
    tempVertices,
  } = useContext(MainContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCoordinatesFormSchema>({
    resolver: zodResolver(CoordinatesFormSchema),
  });

  const submitMethod = (formData: TCoordinatesFormSchema) => {
    const coordinate = {
      x: Number(formData.x),
      y: Number(formData.y),
    };

    let verticesArray: ICoordinate[] = [];

    for (let i = 0; i < tempVertices.length; i++) {
      verticesArray.push(tempVertices[i]);
    }

    verticesArray.push(coordinate);

    setTempVertices(verticesArray);

    reset();
  };

  useEffect(() => {
    let array = [...tempVertices, tempVertices[0]]; //adiciona primeiro vertice novamente ao array para fechar o poligono
    if (tempVertices.length > 1) {
      connectVertices(array); //conecta vertices no canvas
    }
    setVertices(array); //seta vertices para que apareça nas coordenadas
  }, [tempVertices]);
  return (
    <>
      <form
        onSubmit={handleSubmit(submitMethod)}
        className="flex flex-col flex-wrap justify-center w-5/6 mx-auto sm:flex-row sm:flex-nowrap sm:gap-5"
      >
        <FormTextInput
          errors={errors}
          register={register}
          inputName="x"
          inputPlaceholder="Insira coordenada X"
          inputType="number"
          key={1}
        />
        <FormTextInput
          errors={errors}
          register={register}
          inputName="y"
          inputPlaceholder="Insira coordenada Y"
          inputType="number"
          key={2}
        />
        <button disabled={isDrawing} className="w-full uppercase sm:w-fit btn">
          Inserir
        </button>
      </form>
    </>
  );
};
