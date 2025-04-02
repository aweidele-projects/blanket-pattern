import products from "../inc/products.json";
import { YarnColor } from "./YarnColor";

export const ColorSelector = () => {
  return (
    <div className="grid grid-cols-[repeat(6,3.5rem)] gap-1">
      {products.map((product) => (
        <YarnColor key={product.name} yarn={product} />
      ))}
    </div>
  );
};
