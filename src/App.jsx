import { Blanket } from "./components/Blanket";
import { ColorSelector } from "./components/ColorSelector";
function App() {
  return (
    <>
      <div className="p-10 flex justify-center items-center h-screen gap-10 max-w-7xl m-auto">
        <div className="1/3">
          <ColorSelector />
        </div>
        <div className="w-2/3 grow">
          <Blanket />
        </div>
      </div>
    </>
  );
}

export default App;
