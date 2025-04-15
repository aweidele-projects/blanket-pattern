import products from "./products.json";
const colorKeys = ["F", "E", "D", "C", "B", "A"];

export const pattern = [
  [2, 10, "C"],
  [1, 10, "E"],
  [3, 10, "B"],
  [2, 10, "D"],
  [2, 9, "B"],
  [1, 9, "F"],
  [3, 10, "E"],
];

export const colors = (() => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("c");

  if (code) {
    const keys = ["A", "B", "C", "D", "E", "F", "N"];
    const colorsFromUrl = JSON.parse(atob(code))
      .map((clr) => products.find((el) => el.short === clr).id)
      .reduce((acc, val, i) => {
        acc[keys[i]] = val;
        return acc;
      }, {});
    return colorsFromUrl;
  }

  if (localStorage.getItem("colors") !== null) return JSON.parse(localStorage.getItem("colors"));

  return {
    A: "flamingo",
    B: "pirouette",
    C: "creme-brulee",
    D: "pennyroyal",
    E: "eggplant",
    F: "clarity",
    N: "swan",
  };
})();

console.log("colors", colors);

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

export const getTextColor = (backgroundColor, format = "class") => {
  // Extract RGB values
  const rgb = backgroundColor.match(/\w\w/g).map((hex) => parseInt(hex, 16));

  // Calculate luminance using W3C formula
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

  // Return black for light backgrounds, white for dark backgrounds
  if (format === "class") return luminance > 0.5 ? "text-black" : "text-white";
  return luminance > 0.5 ? "#3f3f47" : "#FFFFFF";
};
