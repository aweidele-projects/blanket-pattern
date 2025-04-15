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
  console.log(swatch);

  const thisSwatch = swatchShape.map((polys, i) => {
    const x = polys[0] + 86 * (column - 1);
    const y = polys[1] + 52 * (row - 1);
    return [x, y];
  });
  console.log(thisSwatch);

  return <polygon style={{ fill: fill }} className="fill-green-700 transition-all duration-1000" points={thisSwatch.flat().join(" ")} />;
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
