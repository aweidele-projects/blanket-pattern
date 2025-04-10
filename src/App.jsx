import { Blanket } from "./components/Blanket";
import { BlanketProvider } from "./components/BlanketContext";
import { ColorSelector } from "./components/ColorSelector";
import { AWComLogo, GithubLogo } from "./components/Logos";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="text-center text-white">
        <h1 className="text-3xl mt-5 mb-2">Chevron Panel Knit Baby Blanket</h1>
        <p className="text-xs">
          Get this free pattern here:{" "}
          <a className="hover:text-canary underline" href="https://www.yarnspirations.com/products/bernat-chevron-panel-knit-baby-blanket" target="_blank">
            https://www.yarnspirations.com/products/bernat-chevron-panel-knit-baby-blanket
          </a>
        </p>
      </header>
      <div className="grow bg-red-400 p-5">
        <div className="flex items-stretch gap-5 h-full w-full">
          <BlanketProvider>
            <div className="grow">
              <ColorSelector />
            </div>
            <div className="shrink-0 grow relative">
              <div className="absolute top-0 h-full max-w-full max-h-full aspect-blanket">
                <Blanket />
              </div>
            </div>
            {/* <div>
            <ColorSelector />
          </div> */}
          </BlanketProvider>
        </div>
        {/* <div className="p-10 flex items-stretch gap-10 h-full">
          <BlanketProvider>
            <div className="grow">
              <ColorSelector />
            </div>
            <div className="aspect-blanket h-full shrink-0">
              <Blanket />
            </div>
          </BlanketProvider>
        </div> */}
      </div>
      <footer className="p-5 flex items-center gap-4 text-white">
        <a className="flex gap-4 items-center text-white hover:text-canary text-xs" href="https://github.com/aweidele-projects/blanket-pattern" target="_blank">
          <GithubLogo className="fill-current h-auto block w-6" />
          <span>View this project in Github</span>
        </a>
        <span>|</span>
        <a className="flex gap-4 items-center text-white hover:text-canary text-xs" href="https://www.aaronweidele.com/" target="_blank">
          <AWComLogo className="fill-current h-auto block w-6" />
          <span>aaronweidele.com</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
