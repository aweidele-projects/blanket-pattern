import { useState } from "react";
import { pattern, colors, patternColumns } from "../inc/pattern";
import { Swatch } from "./Swatch";
const swatches = patternColumns(pattern);

export const Blanket = () => {
  const [swatchColors, setSwatchColors] = useState(colors);
  const [colorPickerOpen, setColorPickerOpen] = useState(null);

  const handleColorPickerToggle = (swatch) => {
    console.log(swatch);
  };

  return (
    <div className="aspect-blanket w-full max-w-150">
      <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows)">
        {swatches.map((swatch, i) => (
          <Swatch key={i} swatch={swatch} color={swatchColors[swatch.color]} handleColorPickerToggle={handleColorPickerToggle} />
        ))}
      </div>
    </div>
  );
};
