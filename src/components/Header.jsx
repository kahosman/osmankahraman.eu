function Header() {
  return (
    <header>
      <div className="title-bar-div">
        <h2>Home Page - Osman Kahraman</h2>
      </div>
      <nav>
        <div className="nav-top-row-div">
          <button className="nav-button">Home</button>
          <button className="nav-button">Bio</button>
          <button className="nav-button">Work</button>
          <button className="nav-button">Projects</button>
        </div>
        <div className="nav-bottom-row-div">
          <span className="current-tab-span">Home</span>
          <input className="nav-search-bar-input" type="text" placeholder="Search"></input>
        </div>
        <div className="tab-accent-line-span"></div>
      </nav>
    </header>
  );
}
export default Header;
