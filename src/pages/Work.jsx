import { Fragment } from "react/jsx-runtime";
import SkillElement from "/src/components/SkillElement";
import skillEntries from "/src/data/skillEntries.json";

// 5-proficent, 4-competent , 3-experienced, 2-beginner, 1-novice

function getSortedEntries() {
  let sortedEntries = {};

  for (const entry of skillEntries) {
    const type = entry.type;
    if (type in sortedEntries === false) {
      sortedEntries[type] = [];
    }
    sortedEntries[type].push(entry);
  }
  return sortedEntries;
}

function getSkillList(entries, skillType) {
  return (
    <Fragment key={"fragment-" + skillType}>
      <h3 key={"skill-h3-" + skillType} className="skill-list-h3">
        {skillType}
      </h3>
      <div key={"skill-list-" + skillType} className="skill-list-div">
        {entries.map((entry) => (
          <SkillElement
            key={entry.id}
            title={entry.title}
            icon={entry.icon}
            skillLevel={entry.level}
          />
        ))}
      </div>
    </Fragment>
  );
}

function Work() {
  const sortedEntries = getSortedEntries();
  return (
    <main>
      <title>Work</title>
      <h1>Software Development</h1>
      <section className="main-list-section">
        {Object.keys(sortedEntries).map((type) =>
          getSkillList(sortedEntries[type], type)
        )}
      </section>
    </main>
  );
}
export default Work;
