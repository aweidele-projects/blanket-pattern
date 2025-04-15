import { Blanket } from "./components/Blanket";
import { BlanketProvider } from "./components/BlanketContext";
import { ColorSelector } from "./components/ColorSelector";
import { AWComLogo, GithubLogo } from "./components/Logos";
function App() {
  return (
    <div className="h-screen w-full flex flex-col">
      <header className="text-center text-white px-2">
        <h1 className="text-2xl sm:text-3xl mt-5 mb-2">Chevron Panel Knit Baby Blanket</h1>
        <p className="text-xs">
          Get this free pattern here:
          <a className="hover:text-canary underline overflow-hidden block w-full text-nowrap" href="https://www.yarnspirations.com/products/bernat-chevron-panel-knit-baby-blanket" target="_blank">
            https://www.yarnspirations.com/products/bernat-chevron-panel-knit-baby-blanket
          </a>
        </p>
      </header>
      <main className="h-full w-full max-w-7xl m-auto p-5 text-white flex max-sm:flex-col-reverse gap-5 sm:gap-20">
        <BlanketProvider>
          <div className="flex-2/5 sm:flex-2/5">
            <ColorSelector />
          </div>
          <div className="flex-3/5 sm:flex-3/5 relative">
            <Blanket />
          </div>
        </BlanketProvider>
      </main>
      <footer className="shrink-0 bg-zinc-800 p-2 flex justify-center gap-5 text-white">
        <a className="flex gap-4 items-center hover:text-canary text-xs" href="https://github.com/aweidele-projects/blanket-pattern" target="_blank">
          <GithubLogo className="fill-current h-auto block w-6" />
          <span>View this project in Github</span>
        </a>
        <span>|</span>
        <a className="flex gap-4 items-center hover:text-canary text-xs" href="https://www.aaronweidele.com/" target="_blank">
          <AWComLogo className="fill-current h-auto block w-6" />
          <span>aaronweidele.com</span>
        </a>
      </footer>
    </div>
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
