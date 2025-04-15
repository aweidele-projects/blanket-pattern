import { useContext } from "react";
import { BlanketContext } from "./BlanketContext";
import products from "../inc/products.json";

export const CurrentColors = () => {
  const { patternColors, handleToggleColor } = useContext(BlanketContext);

  const currentColors = Object.fromEntries(Object.entries(patternColors).map(([key, productId]) => [key, products.find((product) => product.id === productId) || null]));

  return (
    <div className="h-full w-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Current Colors</h2>
      <div className="flex-1 relative">
        <div className="h-full w-full overflow-auto absolute top-0 left-0">
          <ul className="grid grid-cols-2 gap-3 w-full">
            {Object.entries(currentColors).map(([key, yarn]) => (
              <li key={key}>
                <button onClick={() => handleToggleColor(key)} className="w-full flex gap-3 items-center mb-4 border border-zinc-500 p-4">
                  <h3 className="text-xl font-bold text-center">{key}</h3>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="w-[55%] h-auto rounded-full overflow-hidden">
                      <img src={`images/${yarn.image}`} />
                    </div>
                    <div className="text-sm uppercase font-light">{yarn.name}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p>Saved colors</p>
      </div>
    </div>
    // <div className="text-white h-full">
    //   <ul className="grid grid-cols-2 gap-3 w-full">
    //     {Object.entries(currentColors).map(([key, yarn]) => (
    //       <li key={key}>
    //         <button onClick={() => handleToggleColor(key)} className="w-full flex gap-3 items-center mb-4 border border-zinc-500 p-4">
    //           <h3 className="text-xl font-bold text-center">{key}</h3>
    //           <div className="flex flex-col items-center gap-2 w-full">
    //             <div className="w-[55%] h-auto rounded-full overflow-hidden">
    //               <img src={`images/${yarn.image}`} />
    //             </div>
    //             <div className="text-sm uppercase font-light">{yarn.name}</div>
    //           </div>
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};
