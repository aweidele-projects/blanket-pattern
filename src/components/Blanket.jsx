import { useState } from "react";
import { pattern, colors, patternColumns } from "../inc/pattern";

export const Blanket = () => {
  const [swatchColors, setSwatchColors] = useState(colors);
  console.log(swatchColors);
  console.log(patternColumns(pattern));

  return (
    <div className="aspect-blanket border border-amber-100 w-full max-w-150">
      <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows)">
        {[...Array(98)].map((e, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
};
