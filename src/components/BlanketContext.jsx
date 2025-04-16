import { useState, createContext, useEffect } from "react";
export const BlanketContext = createContext();
import { colors } from "../inc/pattern";
import products from "../inc/products.json";

const savedColorsFromLocal = localStorage.getItem("savedColors");
console.log("savedColorsFromLocal", savedColorsFromLocal);

export const BlanketProvider = ({ children }) => {
  const [patternColors, setPatternColors] = useState(colors);
  const [selectedColor, setSelectedColor] = useState(false);

  useEffect(() => {
    const urlObj = Object.values(patternColors).map((id) => products.find((el) => el.id === id).short);
    const urlCode = btoa(JSON.stringify(urlObj));

    const url = new URL(window.location.href);
    url.searchParams.set("c", urlCode);
    window.history.pushState({}, "", url);
  }, [patternColors]);

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

  // saved colors
  const [savedColors, setSavedColors] = useState(savedColorsFromLocal ? JSON.parse(savedColorsFromLocal) : []);

  return <BlanketContext.Provider value={{ patternColors, setPatternColors, selectedColor, setSelectedColor, handleToggleColor, handleSetPatternColor, savedColors, setSavedColors }}>{children}</BlanketContext.Provider>;
};
