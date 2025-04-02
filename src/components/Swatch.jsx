import { useState } from "react";

export const Swatch = ({ color, swatch, handleColorPickerToggle }) => {
  console.log(swatch);

  return (
    <button onClick={() => handleColorPickerToggle(swatch)} className="cursor-pointer flex relative" style={{ gridColumn: swatch.column, gridRow: `${swatch.row} / ${swatch.row + swatch.span}` }}>
      <div className="transition-all duration-500 grow -skew-y-25" style={{ backgroundColor: color }}></div>
      <div className="transition-all duration-500 grow skew-y-25" style={{ backgroundColor: color }}></div>
      {swatch.color !== "N" && <div className="absolute text-sm top-0 left-0 w-full h-full flex items-center justify-center">{swatch.color}</div>}
    </button>
  );
};
