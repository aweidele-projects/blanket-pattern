import products from "../inc/products.json";
import { YarnColor } from "./YarnColor";

export const ColorSelector = () => {
  return (
    <div className="h-full overflow-auto p-5">
      <div className="grid grid-cols-5 gap-5">
        {products.map((product) => (
          <YarnColor key={product.name} yarn={product} />
        ))}
      </div>
    </div>
  );
};
