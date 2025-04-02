export const pattern = [
  [2, 10, "C"],
  [1, 10, "E"],
  [3, 10, "B"],
  [2, 10, "D"],
  [2, 9, "B"],
  [1, 9, "F"],
  [3, 10, "E"],
];

export const colors = {
  A: "#fde4e0",
  B: "#ffa9a8",
  C: "#ffdb95",
  D: "#e6f9fd",
  E: "#867cb9",
  F: "#e5e7f4",
  N: "#fffef5",
};

const colorKeys = ["F", "E", "D", "C", "B", "A"];

export const patternColumns = (pattern) => {
  const column = pattern
    .map((col, colNum) => {
      const [topSpan, swatches, firstSwatch] = col;
      const bottomSpan = 14 - topSpan - swatches;
      const colorIndex = colorKeys.indexOf(firstSwatch);

      return [
        { column: colNum + 1, row: 1, span: topSpan, color: "N" },
        ...[...Array(swatches)].map((e, i) => {
          return { column: colNum + 1, row: 1 + topSpan + i, span: 1, color: colorKeys[(colorIndex + i) % colorKeys.length] };
        }),
        { column: colNum + 1, row: 1 + topSpan + swatches, span: bottomSpan, color: "N" },
      ];
    })
    .flat();

  return column;
};
