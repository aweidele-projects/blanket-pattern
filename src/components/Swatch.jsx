import { getTextColor } from "../inc/pattern";

const swatchShape = [
  [0, 16],
  [43, 0],
  [86, 16],
  [86, 68],
  [43, 52],
  [0, 68],
  [0, 16],
];

export const Swatch = ({ fill, swatch }) => {
  const { color, column, row, span } = swatch;
  console.log(swatch, fill);
  console.log(fill, getTextColor(fill));

  const thisSwatch = swatchShape.map((polys, i) => {
    const rowMult = i === 3 || i === 4 || i === 5 ? (span - 1) * 52 : 0;
    const x = polys[0] + 86 * (column - 1);
    const y = polys[1] + 52 * (row - 1) + rowMult;
    return [x, y];
  });
  const textX = 39.3281 + 86 * (column - 1);
  const textY = 35.478 + 52 * (row - 1);
  console.log(thisSwatch);

  return (
    <>
      <polygon style={{ fill: fill }} className="transition-all duration-1000" points={thisSwatch.flat().join(" ")} />
      {color !== "N" && (
        <text style={{ fill: getTextColor(fill, "hex") }} className="text-sm transition-all duration-1000" transform={`translate(${textX} ${textY})`}>
          <tspan x="0" y="0">
            {color}
          </tspan>
        </text>
      )}
    </>
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
