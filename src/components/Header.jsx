function Header() {
  return (
    <header>
      <div className="title-bar-div">
        <h2>Home Page - Osman Kahraman</h2>
      </div>
      <nav>
        <div>
          <button>Home</button>
          <button>Bio</button>
          <button>Work</button>
          <button>Projects</button>
        </div>
        <div>
          <span>Home</span>
          <input type="text" placeholder="Search"></input>
        </div>
      </nav>
    </header>
  );
}
export default Header;
