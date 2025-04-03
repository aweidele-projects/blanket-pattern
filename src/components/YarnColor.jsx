function getTextColor(backgroundColor) {
  // Extract RGB values
  const rgb = backgroundColor.match(/\w\w/g).map((hex) => parseInt(hex, 16));

  // Calculate luminance using W3C formula
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

  // Return black for light backgrounds, white for dark backgrounds
  return luminance > 0.5 ? "text-black" : "text-white";
}

export const YarnColor = ({ yarn }) => {
  console.log(yarn);
  return (
    <button className="text-[10px] text-white uppercase flex flex-col justify-start gap-2 cursor-pointer">
      <div className="rounded-full overflow-hidden">
        <img src={`/images/${yarn.image}`} />
      </div>
      <div className="grow p-1 flex justify-center items-center" style={{ backgroundColor: yarn.color }}>
        <span className={getTextColor(yarn.color)}>{yarn.name}</span>
      </div>
    </button>
  );
};
