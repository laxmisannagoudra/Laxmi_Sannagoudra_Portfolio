function Hero({ profile, stats }) {
  return (
    <header className="hero" id="top">
      <div className="hero-text">
        <p className="hello">👋 Hello, I’m</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="lead">{profile.summary}</p>
        <div className="actions">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn ghost" href={profile.resume} target="_blank" rel="noreferrer">View Resume</a>
          <a className="btn ghost" href="#contact">Contact Me</a>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>
      </div>
      <div className="hero-photo">
        <div className="ring"><img src={profile.photo} alt={profile.name} /></div>
        <span className="chip c1">☕ Java</span>
        <span className="chip c2">⚛️ React</span>
        <span className="chip c3">🍃 Spring Boot</span>
      </div>
    </header>
  );
}

export default Hero;
