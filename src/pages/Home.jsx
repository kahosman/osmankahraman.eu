import "./Home.css";
import profilePicture from "/src/assets/images/23.jpg";
function Home() {
  return (
    <main>
      <title>Osman Kahraman</title>
      <div className="home-head-div">
        <div className="home-name-div">
          <h1>Osman Kahraman</h1>
          <h3>Junior Softwaredeveloper</h3>
        </div>
        <div className="home-image-div">
          <img className="profile-img" src={profilePicture} />
        </div>
      </div>
      <section>
        <p>I am 23 years old and currently an apprentice software developer.</p>
        <p>
          My current goal is to acquire a solid professional foundation for the
          beginning of my career. This includes learning more programming
          languages, doing software projects and expanding my theoretical
          knowledge.
        </p>
        <p>
          I spend a lot of time reading up on natural sciences, current research, technology, history and philosophy.
        </p>
      </section>
    </main>
  );
}
export default Home;
