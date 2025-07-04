import { NavLink } from "react-router";
import "./Header.css"
import globeIcon from "/src/assets/images/ie4s.webp"
import skillEntries from "/src/data/skillEntries.json"
function Header(props) {
  let pageTitle =""
  let pathNameList = props.currentPage.split("/").filter(item => item);
  if (props.currentPage == "/") {
    pageTitle = "Home"
  } 
  else if (pathNameList[0] == "work" && pathNameList.length == 2){
    pageTitle = (skillEntries.filter((entry) => {
      return entry.name == pathNameList[1]?  true : false
    }))[0].title
  }
  else{
    const pathName = pathNameList.slice(-1)[0]? pathNameList.slice(-1)[0] : pathNameList.slice(-2)[0]
    pageTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1)
  }
  
  return (
    <header>
      <div className="title-bar-div">
        <img className="title-bar-globe-img" src={globeIcon}/><h2 className="title-bar-h2">{pageTitle} - Osman Kahraman</h2>
      </div>
      <nav>
        <div className="nav-top-row-div">
          <NavLink to="/" end viewTransition><button className="nav-button">Home</button></NavLink>
          <NavLink to="/bio" end viewTransition><button className="nav-button">Bio</button></NavLink>
          <NavLink to="/work" end viewTransition><button className="nav-button">Work</button></NavLink>
          <NavLink to="/projects" end viewTransition><button className="nav-button">Projects</button></NavLink>
        </div>
        <div className="nav-bottom-row-div">
          <div className="current-tab-div"><i id="tabLoadingIcon" className="bx"/><p>{pageTitle}</p></div>
          <input className="nav-search-bar-input" type="text" placeholder="Search"></input>
        </div>
        <div className="tab-accent-line-span"></div>
      </nav>
    </header>
  );
}
export default Header;
