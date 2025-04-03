import { useContext } from "react";
import { BlanketContext } from "./BlanketContext";
import { getTextColor } from "../inc/pattern";

export const YarnColor = ({ yarn }) => {
  const { patternColors, selectedColor, handleSetPatternColor } = useContext(BlanketContext);

  const selectedColorId = patternColors[selectedColor];
  console.log(patternColors, selectedColor, selectedColorId);
  return (
    <>
      <button onClick={() => handleSetPatternColor(selectedColor, yarn.id)} className="text-[10px] text-white uppercase flex flex-col justify-start gap-2 cursor-pointer">
        <div className={`rounded-full overflow-hidden`}>
          <img src={`/images/${yarn.image}`} />
        </div>
        <div className="grow p-1 flex justify-center items-center" style={{ backgroundColor: yarn.color }}>
          <span className={getTextColor(yarn.color)}>{yarn.name}</span>
        </div>
      </button>
    </>
  );
};
