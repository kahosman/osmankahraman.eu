function SkillElement(props) {
  return (
    <div className="skill-item-div">
        <img className="skill-icon" src={props.image}/>
        <p className="skill-title-p">{props.title}</p>
    </div>
  );
}
export default SkillElement;
