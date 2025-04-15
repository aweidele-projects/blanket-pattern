import { useContext } from "react";

import { BlanketContext } from "./BlanketContext";
import { CurrentColors } from "./CurrentColors";
import { ColorSelection } from "./ColorSelection";

export const ColorSelector = () => {
  const { selectedColor, setSelectedColor } = useContext(BlanketContext);
  return (
    <div className="h-full flex flex-col">
      {selectedColor ? <ColorSelection /> : <CurrentColors />}
      {/* {selectedColor ? (
        <>
          <button className="bg-white text-sm uppercase font-light px-3 py-1" onClick={() => setSelectedColor(false)}>
            Close
          </button>
          <div className="overflow-auto p-5">
            <div className="grid grid-cols-5 gap-5">
              {products.map((product) => (
                <YarnColor key={product.name} yarn={product} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-white">Current Colors</h2>
          <div className="p-5 grow">
            <CurrentColors />
          </div>
          <p>Saved colors</p>
        </>
      )} */}
    </div>
  );
};
