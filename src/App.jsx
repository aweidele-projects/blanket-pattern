import { Blanket } from "./components/Blanket";
import { BlanketProvider } from "./components/BlanketContext";
import { ColorSelector } from "./components/ColorSelector";
import { GithubLogo } from "./components/GithubLogo";
function App() {
  return (
    <>
      <div className="p-10 flex items-stretch gap-10 max-w-7xl m-auto max-h-screen">
        <BlanketProvider>
          <div className="w-2/5">
            <ColorSelector />
          </div>
          <div className="w-3/5">
            <Blanket />
          </div>
        </BlanketProvider>
      </div>
      <div className="fixed left-5 bottom-5">
        <a className="flex gap-4 items-center text-white hover:text-canary text-xs" href="https://github.com/aweidele-projects/blanket-pattern" target="_blank">
          <GithubLogo className="fill-current h-auto block w-6" />
          <span>View this project in Github</span>
        </a>
      </div>
    </>
  );
}

export default App;
