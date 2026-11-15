function EducationCard({ degree, place, period, score }) {
  return (
    <div className="glass edu">
      <span className="tag">{period}</span>
      <h3>{degree}</h3>
      <p>{place}</p>
      <b>{score}</b>
    </div>
  );
}

export default EducationCard;
