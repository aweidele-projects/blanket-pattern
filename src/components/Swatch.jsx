import { useState } from "react";

export const Swatch = ({ color, swatch, handleColorPickerToggle, colorPicker }) => {
  // console.log(swatch);

  return (
    <div className="relative" style={{ gridColumn: swatch.column, gridRow: `${swatch.row} / ${swatch.row + swatch.span}` }}>
      <button onClick={() => handleColorPickerToggle(swatch)} className="cursor-pointer flex relative h-full w-full">
        <div className="transition-all duration-500 grow -skew-y-25" style={{ backgroundColor: color }}></div>
        <div className="transition-all duration-500 grow skew-y-25" style={{ backgroundColor: color }}></div>
        {swatch.color !== "N" && (
          <div className="absolute text-sm top-0 left-0 w-full h-full flex items-center justify-center">
            {swatch.color}
            <br />
            {colorPicker ? "open" : "closed"}
          </div>
        )}
      </button>
    </div>
  );
};
