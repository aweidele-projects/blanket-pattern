import { useContext } from "react";
import { BlanketContext } from "./BlanketContext";
import { pattern, patternColumns } from "../inc/pattern";
import products from "../inc/products.json";
import { Swatch } from "./Swatch";
const swatches = patternColumns(pattern);

export const Blanket = () => {
  const { patternColors } = useContext(BlanketContext);
  const swatchColors = Object.fromEntries(Object.entries(patternColors).map(([key, productId]) => [key, products.find((product) => product.id === productId)?.color || null]));

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
