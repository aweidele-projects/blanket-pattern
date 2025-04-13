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
        <div class="h-full flex items-stretch max-w-7xl mx-auto">
          <div class="w-1/2 bg-gray-200">Left</div>
          <div class="flex-1 flex items-center justify-center bg-gray-100">
            <div class="max-w-full max-h-full aspect-[2/3] w-auto h-auto bg-blue-300">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Cras varius. Nullam vel sem. Etiam ut purus mattis mauris sodales aliquam. Praesent ac sem eget est egestas volutpat. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vestibulum
              suscipit nulla quis orci. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Donec mollis hendrerit risus. Maecenas nec odio et ante tincidunt tempus. Vivamus elementum semper nisi. Pellentesque ut neque. Fusce fermentum. Fusce a quam. Ut leo. Praesent nec nisl a purus blandit viverra. Phasellus blandit leo ut odio. Morbi mattis
              ullamcorper velit. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Nulla consequat massa quis enim. Etiam imperdiet imperdiet orci. In auctor lobortis lacus. Suspendisse non nisl sit amet velit
              hendrerit rutrum.
            </div>
          </div>
        </div>
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
