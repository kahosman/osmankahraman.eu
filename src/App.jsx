import { useState } from "react";

import Header  from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h1>Osman Kahraman</h1>
        <h3>Junior Softwaredeveloper</h3>
        <section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          luctus, elit nec lobortis tincidunt, enim purus porta ligula, in
          pellentesque ipsum tortor id erat. Curabitur egestas fermentum
          facilisis. Aliquam commodo finibus lectus.
        </section>
      </main>
    </>
  );
}

export default App;
