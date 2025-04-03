import { useState } from "react";
import { pattern, colors, patternColumns } from "../inc/pattern";
import products from "../inc/products.json";
import { Swatch } from "./Swatch";
const swatches = patternColumns(pattern);

export const Blanket = () => {
  const [patternColors, setPatternColors] = useState(colors);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const swatchColors = Object.fromEntries(Object.entries(patternColors).map(([key, productId]) => [key, products.find((product) => product.id === productId)?.color || null]));
  console.log(swatches);

  return (
    <>
      <div className="aspect-blanket max-h-full shadow-xl shadow-black">
        <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows)">
          {swatches.map((swatch, i) => (
            <Swatch key={i} swatch={swatch} color={swatchColors[swatch.color]} />
          ))}
        </div>
      </div>
    </>
  );
};
