import { useContext, useState } from "react";
import { HexColorPicker } from "react-colorful";
// import { HslColorPicker } from "react-colorful";
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
        <div className={`grow -skew-y-25 ${sBorder}${lBorder}`} style={{ backgroundColor: color }}></div>
        <div className={`grow skew-y-25 ${sBorder}${rBorder}`} style={{ backgroundColor: color }}></div>
        {swatch.color !== "N" && <div className={`absolute text-sm top-0 left-0 w-full h-full flex items-center justify-center ${getTextColor(color)}`}>{swatch.color}</div>}
      </button>
    </div>
  );
};

/*
      {colorPicker && (
        <div className="absolute z-10 top-4 left-full">
          <button className="bg-zinc-200 text-xs px-2 py-1 rounded-md mb-1 shadow-lg shadow-zinc-500" onClick={() => handleColorPickerToggle(false)}>
            close
          </button>
          <HexColorPicker color={color} onChange={(color) => handleColorChange(swatch, color)} className="shadow-lg shadow-zinc-500" />
        </div>
      )}
        */
