import { Blanket } from "./components/Blanket";
import { ColorSelector } from "./components/ColorSelector";
function App() {
  return (
    <>
      <div className="p-10 flex items-stretch gap-10 max-w-7xl m-auto max-h-screen">
        <div className="w-2/5">
          <ColorSelector />
        </div>
        <div className="w-3/5">
          <Blanket />
        </div>

        {/* <div>
          <Blanket />
        </div> */}
      </div>
    </>
  );
}

export default App;
