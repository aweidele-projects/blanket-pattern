import { useContext } from "react";

import { BlanketContext } from "./BlanketContext";
import { CurrentColors } from "./CurrentColors";
import { ColorSelection } from "./ColorSelection";

export const ColorSelector = () => {
  const { selectedColor, setSelectedColor } = useContext(BlanketContext);
  return <div className="h-full flex flex-col">{selectedColor ? <ColorSelection /> : <CurrentColors />}</div>;
};
