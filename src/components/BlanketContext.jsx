import { useState, createContext } from "react";
export const BlanketContext = createContext();
import { colors } from "../inc/pattern";

export const BlanketProvider = ({ children }) => {
  const [swatchColors, setSwatchColors] = useState(colors);
  return <BlanketContext.Provider value={{ swatchColors }} />;
};
