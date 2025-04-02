import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export const Swatch = ({ color, swatch, handleColorPickerToggle, colorPicker, handleColorChange }) => {
  // console.log(swatch);

  return (
    <div className="relative" style={{ gridColumn: swatch.column, gridRow: `${swatch.row} / ${swatch.row + swatch.span}` }}>
      <button onClick={() => handleColorPickerToggle(swatch)} className="cursor-pointer flex relative h-full w-full">
        <div className="transition-all duration-500 grow -skew-y-25" style={{ backgroundColor: color }}></div>
        <div className="transition-all duration-500 grow skew-y-25" style={{ backgroundColor: color }}></div>
        {swatch.color !== "N" && <div className="absolute text-sm top-0 left-0 w-full h-full flex items-center justify-center">{swatch.color}</div>}
      </button>
      {colorPicker && (
        <div className="absolute z-10 top-4 left-full">
          <HexColorPicker color={color} onChange={(color) => handleColorChange(swatch, color)} />
        </div>
      )}
    </div>
  );
};
