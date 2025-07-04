import { Link } from "react-router";
function SkillElement(props) {
  const linkPath = "/work/"+props.name
  return (
    <Link to={linkPath}>
      <div className="skill-item-div">
        <img className="skill-icon" src={"/src/assets/icons/" + props.icon} />
        <p className="skill-title-p">{props.title}</p>
      </div>
    </Link>
  );
}
export default SkillElement;
