import { useContext } from "react";
import { BlanketContext } from "./BlanketContext";
import products from "../inc/products.json";

export const SavedColors = () => {
  const { patternColors, savedColors, setSavedColors } = useContext(BlanketContext);
  console.log("savedColors", savedColors);

  const handleSaveColor = () => {
    setSavedColors((prev) => {
      const newColors = [patternColors, ...prev];
      console.log(prev, newColors);
      return newColors;
    });
  };

  return (
    <div className="flex gap-5">
      {savedColors && savedColors.length > 0 && (
        <div className="relative">
          <button>Saved colors?</button>
          <div className="absolute bottom-full left-0 w-[300px] bg-white text-zinc-900 shadow-2xl shadow-zinc-800">
            <button className="w-full hover:bg-red-300">Close</button>
            <ul>
              {savedColors.map((colors, i) => (
                <li key={`colorgroup-${i}`} className="border-t border-t-gray-300 last:border-b-gray-300 last:border-b">
                  <button className="w-full flex justify-between gap-2 px-4 py-1 hover:bg-amber-200">
                    {Object.entries(colors).map(([key, clr]) => {
                      console.log(key, clr);
                      const yarn = products.find((el) => el.id === clr);
                      console.log(yarn);
                      return (
                        <div>
                          <img src={`images/${yarn.image}`} alt={yarn.name} className="rounded-full shadow shadow-zinc-800" />
                        </div>
                      );
                    })}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div>
        <button onClick={handleSaveColor}>Save current color</button>
      </div>
    </div>
  );
};
