function SkillGroup({ title, icon, items }) {
  return (
    <div className="glass skill">
      <div className="ic">{icon}</div>
      <h3>{title}</h3>
      <div className="tags">
        {items.map((i) => (<span key={i} className="tag">{i}</span>))}
      </div>
    </div>
  );
}

export default SkillGroup;
