export const Swatch = ({ color, swatch }) => {
  console.log(swatch);
  return (
    <div className="flex relative" style={{ gridColumn: swatch.column, gridRow: `${swatch.row} / ${swatch.row + swatch.span}` }}>
      <div className="grow -skew-y-25" style={{ backgroundColor: color }}></div>
      <div className="grow skew-y-25" style={{ backgroundColor: color }}></div>
      {swatch.color !== "N" && <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">{swatch.color}</div>}
    </div>
  );
};
