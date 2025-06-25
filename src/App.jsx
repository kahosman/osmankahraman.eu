import { useState } from "react";

import Header  from "./components/Header";
import "./App.css";

import profilePicture from "./assets/images/23.jpg"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div className="home-head-div">
          <div className="name-div">
            <h1>Osman Kahraman</h1>
            <h3>Junior Softwaredeveloper</h3>
          </div>
          <img className="profile-img" src={profilePicture}/>
        </div>
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
