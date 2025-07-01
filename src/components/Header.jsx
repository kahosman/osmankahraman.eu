import { NavLink } from "react-router";
import "./Header.css"
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
        <h2 className="title-bar-h2">{currentPage} - Osman Kahraman</h2>
      </div>
      <nav>
        <div className="nav-top-row-div">
          <NavLink to="/" end><button className="nav-button">Home</button></NavLink>
          <NavLink to="/bio" end><button className="nav-button">Bio</button></NavLink>
          <NavLink to="/work" end><button className="nav-button">Work</button></NavLink>
          <NavLink to="/projects" end><button className="nav-button">Projects</button></NavLink>
        </div>
        <div className="nav-bottom-row-div">
          <span className="current-tab-span">{currentPage}</span>
          <input className="nav-search-bar-input" type="text" placeholder="Search"></input>
        </div>
        <div className="tab-accent-line-span"></div>
      </nav>
    </header>
  );
}
export default Header;
