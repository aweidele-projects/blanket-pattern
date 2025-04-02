import { useState } from "react";
import { pattern, colors, patternColumns } from "../inc/pattern";
import { Swatch } from "./Swatch";
import yarnImage from "../assets/images/23991.jpg";
const swatches = patternColumns(pattern);

export const Blanket = () => {
  const [swatchColors, setSwatchColors] = useState(colors);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  console.log(swatchColors);

  const handleColorPickerToggle = (swatch) => {
    setColorPickerOpen((prev) => (prev === swatch ? false : swatch));
  };

  const handleColorChange = (swatch, newColor) => {
    console.log(swatchColors[swatch.color], newColor);

    setSwatchColors((prevSwatchColors) => ({ ...prevSwatchColors, [swatch.color]: newColor }));
  };

  return (
    <>
      <div className="aspect-blanket w-full shadow-xl shadow-black">
        <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows)">
          {swatches.map((swatch, i) => (
            <Swatch key={i} swatch={swatch} color={swatchColors[swatch.color]} colorPicker={colorPickerOpen === swatch} handleColorPickerToggle={handleColorPickerToggle} handleColorChange={handleColorChange} />
          ))}
        </div>
      </div>
    </>
  );
};
