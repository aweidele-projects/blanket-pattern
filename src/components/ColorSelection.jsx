import { useContext } from "react";
import { BlanketContext } from "./BlanketContext";
import products from "../inc/products.json";
import { YarnColor } from "./YarnColor";

export const ColorSelection = () => {
  const { selectedColor, setSelectedColor } = useContext(BlanketContext);
  return (
    <div className="h-full w-full flex flex-col">
      <div class="flex justify-between items-center pb-4">
        <h2 className="text-2xl font-bold">Select a Color</h2>
        <button className="bg-white text-black text-sm uppercase font-light px-3 py-1" onClick={() => setSelectedColor(false)}>
          Close
        </button>
      </div>
      <div className="flex-1 relative">
        <div className="h-full w-full overflow-auto absolute top-0 left-0">
          <div className="grid grid-cols-5 gap-5">
            {products.map((product) => (
              <YarnColor key={product.name} yarn={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-2 text-xs">
        Colors by
        <a className="hover:text-canary underline" href="https://www.knitpicks.com/" target="_blank">
          KnitPicks
        </a>
      </div>
    </div>
  );
};
