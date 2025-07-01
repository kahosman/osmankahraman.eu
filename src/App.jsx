import { useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Biography from "./components/Biography";
import Work from "./components/Work";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Header currentPage={location.pathname} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bio" element={<Biography />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
