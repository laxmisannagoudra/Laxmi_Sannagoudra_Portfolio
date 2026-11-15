function TimelineItem({ role, company, period, points }) {
  return (
    <div className="timeline">
      <div className="dot" />
      <div className="glass">
        <div className="row">
          <div><h3>{role}</h3><p className="company">{company}</p></div>
          <span className="tag">{period}</span>
        </div>
        <ul>
          {points.map((p) => (<li key={p}>{p}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default TimelineItem;
