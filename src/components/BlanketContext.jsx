import { useState, createContext } from "react";
export const BlanketContext = createContext();
import { colors } from "../inc/pattern";

export const BlanketProvider = ({ children }) => {
  const [patternColors, setPatternColors] = useState(colors);
  const [selectedColor, setSelectedColor] = useState(false);

  const handleToggleColor = (swatchColor) => {
    setSelectedColor((prev) => (prev === swatchColor ? false : swatchColor));
  };

  const handleSetPatternColor = (swatchColor, yarnId) => {
    setPatternColors((prev) => {
      const newColor = {
        ...prev,
        [swatchColor]: yarnId,
      };
      localStorage.setItem("colors", JSON.stringify(newColor));
      return newColor;
    });
    setSelectedColor(false);
  };

  return <BlanketContext.Provider value={{ patternColors, selectedColor, setSelectedColor, handleToggleColor, handleSetPatternColor }}>{children}</BlanketContext.Provider>;
};
