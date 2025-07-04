import { Link } from "react-router";
function getImageUrl(name) {
  return new URL(`/src/assets/icons/${name}`, import.meta.url).href
}
function SkillElement(props) {
  const linkPath = "/work/"+props.name
  return (
    <Link to={linkPath}>
      <div className="skill-item-div">
        <img className="skill-icon" src={getImageUrl(props.icon)} />
        <p className="skill-title-p">{props.title}</p>
      </div>
    </Link>
  );
}
export default SkillElement;
