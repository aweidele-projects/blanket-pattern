import { Blanket } from "./components/Blanket";
import { BlanketProvider } from "./components/BlanketContext";
import { ColorSelector } from "./components/ColorSelector";
import { AWComLogo, GithubLogo } from "./components/Logos";
function App() {
  return (
    <>
      <div className="text-center text-white">
        <h1 className="text-3xl mt-5 mb-2">Chevron Panel Knit Baby Blanket</h1>
        <p className="text-xs">
          <a className="hover:text-canary" href="https://www.yarnspirations.com/products/bernat-chevron-panel-knit-baby-blanket" target="_blank">
            https://www.yarnspirations.com/products/bernat-chevron-panel-knit-baby-blanket
          </a>
        </p>
      </div>
      <div className="p-10 flex items-stretch gap-10 max-w-7xl m-auto max-h-[88vh]">
        <BlanketProvider>
          <div className="w-2/5">
            <ColorSelector />
          </div>
          <div className="w-3/5">
            <Blanket />
          </div>
        </BlanketProvider>
      </div>
      <footer className="fixed left-5 bottom-5 flex items-center gap-4 text-white">
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
    </>
  );
}

export default App;
