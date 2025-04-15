import { useContext } from "react";
import { BlanketContext } from "./BlanketContext";
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
  const { selectedColor, handleToggleColor } = useContext(BlanketContext);
  const { color, column, row, span } = swatch;

  const stroke = selectedColor === color ? "" : "";

  const thisSwatch = swatchShape.map((polys, i) => {
    const rowMult = i === 3 || i === 4 || i === 5 ? (span - 1) * 52 : 0;
    const x = polys[0] + 86 * (column - 1);
    const y = polys[1] + 52 * (row - 1) + rowMult;
    return [x, y];
  });
  const textX = 39.3281 + 86 * (column - 1);
  const textY = 35.478 + 52 * (row - 1);

  return (
    <g onClick={() => handleToggleColor(swatch.color)} className="cursor-pointer">
      <polygon style={{ fill: fill }} className={`transition-all duration-1000${stroke}`} points={thisSwatch.flat().join(" ")} />
      {color !== "N" && (
        <text style={{ fill: getTextColor(fill, "hex") }} className="text-sm transition-all duration-1000" transform={`translate(${textX} ${textY})`}>
          <tspan x="0" y="0">
            {color}
          </tspan>
        </text>
      )}
    </g>
  );
};
