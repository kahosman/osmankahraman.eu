function SkillElement(props) {
  return (
    <div className="skill-item-div">
      <img className="skill-icon" src={"/src/assets/icons/" + props.icon} />
      <p className="skill-title-p">{props.title}</p>
    </div>
  );
}
export default SkillElement;
