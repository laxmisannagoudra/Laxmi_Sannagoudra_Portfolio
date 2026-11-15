function ProjectCard({ title, tech, points, link, demo }) {
  return (
    <div className="glass project">
      <h3>{title}</h3>
      <div className="tags">
        {tech.map((t) => (<span key={t} className="tag">{t}</span>))}
      </div>
      <ul>
        {points.map((p) => (<li key={p}>{p}</li>))}
      </ul>
      <div className="btns">
        {demo && <a className="btn small" href={demo} target="_blank" rel="noreferrer">Live Demo ↗</a>}
        <a className={demo ? "btn small ghost" : "btn small"} href={link} target="_blank" rel="noreferrer">View on GitHub →</a>
      </div>
    </div>
  );
}

export default ProjectCard;
