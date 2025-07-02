import SkillElement from "/src/components/SkillElement";
function Work() {
  return (
    <main>
      <h1>Software Development</h1>
      <section className="main-list-section">
        <h3>Languages</h3>
        <div className="skill-list-div">
        <SkillElement 
          title="Python"
        />
        <SkillElement 
          title="PHP"
        />
        <SkillElement 
          title="Intersystem ObjectScript"
        />
        </div>
      </section>
      <section className="main-list-section">
        <h3>Frameworks & Libraries</h3>
        <div className="skill-list-div">
        <SkillElement 
          title="FastAPI"
        />
        <SkillElement 
          title="Apache Airflow"
        />
        </div>
      </section>
    </main>
  );
}
export default Work;
