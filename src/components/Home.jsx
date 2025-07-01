import "./Home.css";
import profilePicture from "/src/assets/images/23.jpg";
function Home() {
  return (
    <main>
      <div className="home-head-div">
        <div className="name-div">
          <h1>Osman Kahraman</h1>
          <h3>Junior Softwaredeveloper</h3>
        </div>
        <img className="profile-img" src={profilePicture} />
      </div>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          luctus, elit nec lobortis tincidunt, enim purus porta ligula, in
          pellentesque ipsum tortor id erat. Curabitur egestas fermentum
          facilisis. Aliquam commodo finibus lectus.
        </p>
      </section>
    </main>
  );
}
export default Home;
