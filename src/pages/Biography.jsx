import BioEntry from "/src/components/BioEntry";
import bioEntries from "/src/data/bioEntries.json";
function Biography() {
  const educationEntries = bioEntries.education
  const professionalEntries = bioEntries.professional
  return (
    <main>
      <h1>Biography</h1>
      <section className="main-list-section">
        <h3>Education</h3>
        {educationEntries.map((entry) => (
          <BioEntry
            key={entry.id}
            text={entry.shortTitle}
            startDate={entry.startDate}
            endDate={entry.endDate}
          />
        ))}
      </section>
      <section className="main-list-section">
        <h3>Work experience</h3>
        {professionalEntries.map((entry) => (
          <BioEntry
            key={entry.id}
            text={entry.shortTitle}
            startDate={entry.startDate}
            endDate={entry.endDate}
          />
        ))}
      </section>
    </main>
  );
}
export default Biography;
