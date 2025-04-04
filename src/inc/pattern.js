export const pattern = [
  [2, 10, "C"],
  [1, 10, "E"],
  [3, 10, "B"],
  [2, 10, "D"],
  [2, 9, "B"],
  [1, 9, "F"],
  [3, 10, "E"],
];

export const colors =
  localStorage.getItem("colors") !== null
    ? JSON.parse(localStorage.getItem("colors"))
    : {
        A: "flamingo",
        B: "pirouette",
        C: "creme-brulee",
        D: "pennyroyal",
        E: "eggplant",
        F: "clarity",
        N: "swan",
      };
console.log(colors);

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

export const getTextColor = (backgroundColor) => {
  // Extract RGB values
  const rgb = backgroundColor.match(/\w\w/g).map((hex) => parseInt(hex, 16));

  // Calculate luminance using W3C formula
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

  // Return black for light backgrounds, white for dark backgrounds
  return luminance > 0.5 ? "text-black" : "text-white";
};
