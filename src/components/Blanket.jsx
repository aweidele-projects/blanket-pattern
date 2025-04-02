import { useState } from "react";
import { pattern, colors, patternColumns } from "../inc/pattern";
import { Swatch } from "./Swatch";
const swatches = patternColumns(pattern);

export const Blanket = () => {
  const [swatchColors, setSwatchColors] = useState(colors);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  console.log(colorPickerOpen);

  const handleColorPickerToggle = (swatch) => {
    setColorPickerOpen((prev) => (prev === swatch ? false : swatch));
  };

  return (
    <>
      <div className="aspect-blanket w-full max-w-150">
        <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows)">
          {swatches.map((swatch, i) => (
            <Swatch key={i} swatch={swatch} color={swatchColors[swatch.color]} colorPicker={colorPickerOpen === swatch} handleColorPickerToggle={handleColorPickerToggle} />
          ))}
        </div>
      </div>
    </>
  );
};
