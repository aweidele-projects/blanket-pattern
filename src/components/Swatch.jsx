export const Swatch = ({ color, swatch }) => {
  console.log(swatch);
  return (
    <div className="flex" style={{ gridColumn: swatch.column, gridRow: `${swatch.row} / ${swatch.row + swatch.span}` }}>
      <div className="grow -skew-y-25" style={{ backgroundColor: color }}></div>
      <div className="grow skew-y-25" style={{ backgroundColor: color }}></div>
    </div>
  );
};
