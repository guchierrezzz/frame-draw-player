import { useContext } from "react";
import { MainContext } from "../../provider/MainContext";

export const ColorPickerButton = () => {
  const { setColor, isDrawing, colorInputRef } = useContext(MainContext);
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setColor(color);
  };
  return (
    <input
      type="color"
      disabled={isDrawing}
      ref={colorInputRef}
      onChange={handleColorChange}
    ></input>
  );
};
