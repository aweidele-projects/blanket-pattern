import { useContext, useState } from "react";
import { BlanketContext } from "./BlanketContext";
import products from "../inc/products.json";

export const SavedColors = () => {
  console.log(window.location.href);
  const { patternColors, setPatternColors, savedColors, setSavedColors } = useContext(BlanketContext);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  console.log("savedColors", savedColors);

  const handleSaveColor = () => {
    setSavedColors((prev) => {
      const newColors = [patternColors, ...prev];
      localStorage.setItem("savedColors", JSON.stringify(newColors));
      return newColors;
    });
  };

  const handleSetColors = (colors) => {
    setPatternColors(colors);
    setSelectorOpen(false);
  };

  const handleOpen = () => {
    setSelectorOpen((isOpen) => !isOpen);
  };

  const handleClose = () => {
    setSelectorOpen(false);
  };

  const handleShareOpen = () => {
    setShareOpen((isOpen) => !isOpen);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShareOpen(false);
      }, 2000);
    } catch (err) {
      console.error("failed to copy text: ", err);
    }
  };

  return (
    <div className="flex gap-5 pt-3 relative border-t border-zinc-900">
      {savedColors && savedColors.length > 0 && (
        <div className="relative">
          <button onClick={handleOpen} className="text-xs flex items-center gap-2 p-1 border border-amber-50 rounded-md h-8 hover:shadow-amber-50 hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5" viewBox="0 0 576 512">
              <path d="M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
            </svg>
            <span>Saved colors</span>
            <span className="bg-red-800 font-light w-4 h-4 rounded-full text-[10px] leading-3 border border-white">{savedColors.length}</span>
          </button>
          {selectorOpen && (
            <div className="absolute bottom-full left-0 w-[300px] bg-white text-zinc-900 shadow-2xl shadow-zinc-800">
              <button className="w-full hover:bg-red-300 text-xs text-right p-2" onClick={handleClose}>
                Close
              </button>
              <ul className="max-h-[50vh] overflow-auto">
                {savedColors.map((colors, i) => (
                  <li key={`colorgroup-${i}`} className="border-t border-t-gray-300 last:border-b-gray-300 last:border-b">
                    <button className="w-full flex justify-between gap-2 px-4 py-1 hover:bg-amber-200" onClick={() => handleSetColors(colors)}>
                      {Object.entries(colors).map(([key, clr]) => {
                        const yarn = products.find((el) => el.id === clr);

                        return (
                          <div key={clr}>
                            <img src={`images/${yarn.image}`} alt={yarn.name} className="rounded-full shadow shadow-zinc-800" />
                          </div>
                        );
                      })}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <div>
        <button onClick={handleSaveColor} className="text-xs flex items-center gap-2 p-1 border border-amber-50 rounded-md h-8 hover:shadow-amber-50 hover:shadow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current w-5 h-5">
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <span>Save current colors</span>
        </button>
      </div>
      <div className="grow flex justify-end">
        <button onClick={handleShareOpen} className="text-xs flex items-center gap-2 p-1 border border-amber-50 rounded-md h-8 hover:shadow-amber-50 hover:shadow">
          <span>Share colors</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-3 h-3" viewBox="0 0 512 512">
            <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
          </svg>
        </button>
        {shareOpen && (
          <div className="bg-white absolute w-full bottom-full left-0 text-zinc-900 shadow-2xl shadow-zinc-800 p-3">
            <h3 className="font-bold">Share this pattern</h3>
            <p className="break-all rounded-md border border-zinc-300 p-2 pr-8 text-xs font-mono relative cursor-pointer" onClick={() => copyToClipboard(window.location.href)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-zinc-400 w-4 h-4 absolute top-2 right-2">
                <path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" />
              </svg>
              <span>{window.location.href}</span>
            </p>
            {copied && <p className="text-xs">Copied to clipboard!</p>}
            <button onClick={() => setShareOpen(false)} className="absolute top-3 right-3 text-xs">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
