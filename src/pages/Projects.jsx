import ProjectElement from "/src/components/ProjectElement";
//import "./Projects.css"
function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <ProjectElement 
        name="Project1"
        tags={["linux","Python"]}
        scope="simple"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus, elit nec lobortis tincidunt, enim purus porta ligula, in pellentesque ipsum tortor id erat. Curabitur egestas fermentum facilisis. Aliquam commodo finibus lectus."
        image="https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </main>
  );
}
export default Projects;
