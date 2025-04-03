import { useContext } from "react";
import { BlanketContext } from "./BlanketContext";
import products from "../inc/products.json";

export const CurrentColors = () => {
  const { patternColors } = useContext(BlanketContext);

  const currentColors = Object.fromEntries(Object.entries(patternColors).map(([key, productId]) => [key, products.find((product) => product.id === productId) || null]));

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Current Colors</h2>
      <ul className="grid grid-cols-2 gap-3">
        {Object.entries(currentColors).map(([key, yarn]) => (
          <li key={key} className="flex gap-3 items-center mb-4 border border-zinc-500 p-4">
            <h3 className="text-xl font-bold text-center">{key}</h3>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={`/images/${yarn.image}`} />
              </div>
              <div className="text-sm uppercase font-light">{yarn.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
