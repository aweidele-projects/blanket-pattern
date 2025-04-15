import { useContext, useState } from "react";
import { BlanketContext } from "./BlanketContext";
import { getTextColor } from "../inc/pattern";

export const Swatch = ({ color, swatch }) => {
  const { selectedColor, handleToggleColor } = useContext(BlanketContext);

  const sBorder = selectedColor === swatch.color ? " border-t-2 border-b-2 border-red-700" : "";
  const lBorder = selectedColor === swatch.color ? " border-l-2" : "";
  const rBorder = selectedColor === swatch.color ? " border-r-2" : "";

  return (
    <div className="relative" style={{ gridColumn: swatch.column, gridRow: `${swatch.row} / ${swatch.row + swatch.span}` }}>
      <button className="cursor-pointer flex relative h-full w-full" onClick={() => handleToggleColor(swatch.color)}>
        <div className={`grow -skew-y-25 transition-all duration-300 ${sBorder}${lBorder}`} style={{ backgroundColor: color }}></div>
        <div className={`grow skew-y-25 transition-all duration-300 ${sBorder}${rBorder}`} style={{ backgroundColor: color }}></div>
        {swatch.color !== "N" && <div className={`absolute text-sm top-0 left-0 w-full h-full flex items-center justify-center ${getTextColor(color)}`}>{swatch.color}</div>}
      </button>
    </div>
  );
};
