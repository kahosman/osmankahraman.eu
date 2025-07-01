function ProjectElement(props) {
  return (
    <section className="project-section">
      <div className="projects-tags-div">
        <img width={20} height={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1280px-Tux.svg.png"/>
        <img />
        <img />
        <h3>{props.scope}</h3>
      </div>
      <p>{props.summary}</p>
      <img className="project-img" width={200} src={props.image} />
    </section>
  );
}
export default ProjectElement;
