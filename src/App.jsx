import { Blanket } from "./components/Blanket";
import { BlanketProvider } from "./components/BlanketContext";
import { ColorSelector } from "./components/ColorSelector";
import { AWComLogo, GithubLogo } from "./components/Logos";
function App() {
  return (
    <div className="">
      <div className="h-screen w-full flex flex-col">
        <header className="text-center text-white bg-red-500">
          <h1 className="text-3xl mt-5 mb-2">Chevron Panel Knit Baby Blanket</h1>
          <p className="text-xs">
            Get this free pattern here:{" "}
            <a className="hover:text-canary underline" href="https://www.yarnspirations.com/products/bernat-chevron-panel-knit-baby-blanket" target="_blank">
              https://www.yarnspirations.com/products/bernat-chevron-panel-knit-baby-blanket
            </a>
          </p>
        </header>
        <main className="h-full w-full max-w-7xl m-auto border border-amber-300 p-5 text-white">
          <div className="h-full w-full flex gap-5">
            <div className="flex-1 border border-dotted border-red-400">Left</div>
            <div className="flex-1 border border-dotted border-red-400">RIght</div>
          </div>
        </main>
        <footer className="shrink-0 bg-red-500 py-2">footer</footer>
      </div>
    </div>
    // <div className="grid grid-cols-1 grid-rows-(--main-body) h-screen">
    //   <header className="text-white p-4">
    //     <h1>Header here</h1>
    //   </header>
    //   <main className="bg-red-400 p-5">
    //     {/* <div className="max-w-7xl border border-black m-auto grid grid-cols-2 gap-5 h-full">
    //       <div className="border border-dotted border-red-900">Left</div>
    //       <div className="border border-dotted border-red-900">

    //       </div>
    //     </div> */}
    //   </main>
    //   <footer className="text-white p-4">Footer stuff</footer>
    // </div>
  );
}

export default App;

/*

<div className="flex items-stretch gap-5 h-full w-full">
          <BlanketProvider>
            <div className="flex-1/3">
              <ColorSelector />
            </div>
            <div className="flex-2/3">
              <div className="">
                <Blanket />
              </div>
            </div>
          </BlanketProvider>
        </div>

        */
