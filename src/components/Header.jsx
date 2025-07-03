import { NavLink } from "react-router";
import "./Header.css"
import globeIcon from "/src/assets/images/ie4s.webp"
function Header(props) {
  let currentPage = ""
  if (props.currentPage == "/") {
    currentPage = "Home"
  }else{
    currentPage = props.currentPage.charAt(1).toUpperCase() + props.currentPage.slice(2)
  }

  return (
    <header>
      <div className="title-bar-div">
        <img className="title-bar-globe-img" src={globeIcon}/><h2 className="title-bar-h2">{currentPage} - Osman Kahraman</h2>
      </div>
      <nav>
        <div className="nav-top-row-div">
          <NavLink to="/" end viewTransition><button className="nav-button">Home</button></NavLink>
          <NavLink to="/bio" end viewTransition><button className="nav-button">Bio</button></NavLink>
          <NavLink to="/work" end viewTransition><button className="nav-button">Work</button></NavLink>
          <NavLink to="/projects" end viewTransition><button className="nav-button">Projects</button></NavLink>
        </div>
        <div className="nav-bottom-row-div">
          <div className="current-tab-div"><i id="tabLoadingIcon" className="bx"/><p>{currentPage}</p></div>
          <input className="nav-search-bar-input" type="text" placeholder="Search"></input>
        </div>
        <div className="tab-accent-line-span"></div>
      </nav>
    </header>
  );
}
export default Header;
