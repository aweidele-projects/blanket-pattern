import { useContext } from "react";
import products from "../inc/products.json";
import { YarnColor } from "./YarnColor";
import { BlanketContext } from "./BlanketContext";
import { CurrentColors } from "./CurrenColors";

export const ColorSelector = () => {
  const { selectedColor, setSelectedColor } = useContext(BlanketContext);
  return (
    <>
      {selectedColor ? (
        <>
          <button className="bg-white text-sm uppercase font-light px-3 py-1" onClick={() => setSelectedColor(false)}>
            Close
          </button>
          <div className="h-full overflow-auto p-5">
            <div className="grid grid-cols-5 gap-5">
              {products.map((product) => (
                <YarnColor key={product.name} yarn={product} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="h-full overflow-auto p-5">
          <CurrentColors />
        </div>
      )}
    </>
  );
};
