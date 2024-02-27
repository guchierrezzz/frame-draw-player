import { z } from "zod";

export const CoordinatesFormSchema = z.object({
  x: z.string().nonempty("Por favor, insira a coordenada X"),
  y: z.string().nonempty("Por favor, insira a coordenada Y"),
});

export type TCoordinatesFormSchema = z.infer<typeof CoordinatesFormSchema>;
