import { useContext } from "react";
import products from "../inc/products.json";
import { YarnColor } from "./YarnColor";
import { BlanketContext } from "./BlanketContext";

export const ColorSelector = () => {
  const { selectedColor } = useContext(BlanketContext);
  return (
    <div className="h-full overflow-auto p-5">
      {selectedColor ? (
        <div className="grid grid-cols-5 gap-5">
          {products.map((product) => (
            <YarnColor key={product.name} yarn={product} />
          ))}
        </div>
      ) : (
        <p>Select a color</p>
      )}
    </div>
  );
};
