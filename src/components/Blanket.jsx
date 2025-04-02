import { useState } from "react";
import { pattern, colors, patternColumns } from "../inc/pattern";
import { Swatch } from "./Swatch";

export const Blanket = () => {
  const [swatchColors, setSwatchColors] = useState(colors);

  return (
    <div className="aspect-blanket w-full max-w-150">
      <div className="h-full grid grid-cols-(--blanket-cols) grid-rows-(--blanket-rows)">
        {patternColumns(pattern).map((swatch, i) => (
          <Swatch key={i} swatch={swatch} color={swatchColors[swatch.color]} />
        ))}
      </div>
    </div>
  );
};
