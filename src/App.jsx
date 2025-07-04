import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    let classIconString;
    const tabLoadingIconEl = document.getElementById("tabLoadingIcon");

    switch (location.pathname) {
      case "/":
        classIconString = "bxs-home-heart";
        break;
      case "/bio":
        classIconString = "bxs-user-square";
        break;
      case "/work":
        classIconString = "bxs-briefcase-alt-2";
        break;
      case "/projects":
        classIconString = "bxs-folder-code";
        break;
    }
    document.body.style.overflow = "hidden"
    tabLoadingIconEl.setAttribute("class", "");
    tabLoadingIconEl.classList.add("bx", "bx-loader-dots");

    const timer = setTimeout(() => {
      document.body.style.overflow = "visible"
      tabLoadingIconEl.setAttribute("class", "");
      tabLoadingIconEl.classList.add("bx", classIconString);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);
  return (
   <>      
   <Header currentPage={location.pathname} isLoading={loading} />
      {loading && (
        <div className="loading-click-block">
          <div className="loading-overlay">
            <div className="loading-background"></div>
            <div className="loading-spinner"></div>
          </div>
        </div>
      )}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bio" element={<Biography />} />
        <Route path="work" element={<Work/>} />
        <Route path="work/*" element={<Skill />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
