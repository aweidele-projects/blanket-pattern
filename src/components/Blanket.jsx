import { useContext } from "react";
import { BlanketContext } from "./BlanketContext";
import { pattern, patternColumns } from "../inc/pattern";
import products from "../inc/products.json";
import { Swatch } from "./Swatch";
const swatches = patternColumns(pattern);
import texture from "/texture.svg";

export const Blanket = () => {
  const { patternColors } = useContext(BlanketContext);
  const swatchColors = Object.fromEntries(Object.entries(patternColors).map(([key, productId]) => [key, products.find((product) => product.id === productId)?.color || null]));

  return (
    <>
      <div className="aspect-blanket h-full w-full shadow-xl shadow-black relative ">
        <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows) relative z-0">
          {swatches.map((swatch, i) => (
            <Swatch key={i} swatch={swatch} color={swatchColors[swatch.color]} />
          ))}
        </div>
      </div>
    </>
  );
};
