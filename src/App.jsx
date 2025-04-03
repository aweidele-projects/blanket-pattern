import { Blanket } from "./components/Blanket";
import { ColorSelector } from "./components/ColorSelector";
function App() {
  return (
    <>
      <div className="p-10 flex items-stretch gap-10 max-w-7xl m-auto max-h-screen">
        <div>
          <ColorSelector />
        </div>
        <div>
          <p>Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Nunc nec neque. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Fusce egestas elit eget lorem. Nullam quis ante.</p>

          <p>Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Maecenas malesuada. Vestibulum volutpat pretium libero. Etiam vitae tortor. Phasellus dolor.</p>

          <p>Cras id dui. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Curabitur blandit mollis lacus. Praesent venenatis metus at tortor pulvinar varius. Cras ultricies mi eu turpis hendrerit fringilla.</p>

          <p>Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Pellentesque auctor neque nec urna. Morbi nec metus. Curabitur vestibulum aliquam leo. Nulla consequat massa quis enim.</p>

          <p>Maecenas malesuada. Phasellus accumsan cursus velit. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vivamus consectetuer hendrerit lacus. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi.</p>
        </div>

        {/* <div>
          <Blanket />
        </div> */}
      </div>
    </>
  );
}

export default App;
