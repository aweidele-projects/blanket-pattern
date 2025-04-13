import { Blanket } from "./components/Blanket";
import { BlanketProvider } from "./components/BlanketContext";
import { ColorSelector } from "./components/ColorSelector";
import { AWComLogo, GithubLogo } from "./components/Logos";
function App() {
  return (
    <div className="h-screen">
      <div className="h-full w-full flex flex-col">
        <header className="shrink-0">
          <h1>Header</h1>
        </header>
        <main className="grow-1 h-full w-full max-w-7xl m-auto border border-amber-300 flex gap-5 items-stretch p-5">
          <BlanketProvider>
            <div className="flex-1">
              <div className="h-full w-full border-white border-dotted border overflow-auto text-white text-3xl">
                <p>Fusce convallis metus id felis luctus adipiscing. Sed aliquam ultrices mauris. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque posuere.</p>

                <p>Pellentesque posuere. Cras non dolor. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Aliquam lobortis.</p>

                <p>Nulla porta dolor. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Nam pretium turpis et arcu. In hac habitasse platea dictumst. Pellentesque dapibus hendrerit tortor.</p>

                <p>Fusce commodo aliquam arcu. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Donec vitae orci sed dolor rutrum auctor. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>

                <p>Praesent vestibulum dapibus nibh. Morbi nec metus. Fusce vulputate eleifend sapien. Maecenas nec odio et ante tincidunt tempus. Duis leo.</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="max-h-full max-w-full w-auto h-auto aspect-blanket border border-dotted border-white">
                <Blanket />
              </div>
            </div>
          </BlanketProvider>
        </main>
        <footer className="shrink-0">footer</footer>
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
