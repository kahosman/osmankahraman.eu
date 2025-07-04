import ProjectElement from "/src/components/ProjectElement";
import projectEntries from "/src/data/projectEntries.json";
function Projects() {
  return (
    <main>
      <title>Projects</title>
      <h1>Projects</h1>
      {projectEntries.map((entry) => (
        <ProjectElement
          key={entry.id}
          title={entry.shortTitle}
          tags={entry.tags}
          scope={entry.scope}
          summary={entry.summary}
          image={entry.imageUrl}
        />
      ))}
    </main>
  );
}
export default Projects;
