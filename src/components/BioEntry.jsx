function BioEntry({text,startDate,endDate}) {
  return (
    <div className="bio-list-item-div">
      <p className="bio-list-date-p">{startDate} - {endDate}</p>
      <p>{text}</p>
    </div>
  );
}
export default BioEntry;
