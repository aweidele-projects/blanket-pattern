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
    <div className="w-full h-full absolute top-0 left-0 border-red-600 border border-dotted">
      <svg className="border-blue-600 border border-dotted max-h-full max-w-full object-contain aspect-blanket" viewBox="0 0 602 744">
        {swatches.map((swatch, i) => (
          <Swatch key={i} swatch={swatch} fill={swatchColors[swatch.color]} />
        ))}
      </svg>
    </div>
  );
};

/* <div className="aspect-blanket h-full w-full shadow-xl shadow-black relative ">
        <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows) relative z-0">
          {swatches.map((swatch, i) => (
            <Swatch key={i} swatch={swatch} color={swatchColors[swatch.color]} />
          ))}
        </div>
      </div> */
