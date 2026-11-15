function Navbar({ name, links, resume }) {
  return (
    <nav className="navbar">
      <a className="brand" href="#top">{name.split(" ")[0]}<span>.</span></a>
      <ul>
        {links.map((l) => (
          <li key={l.id}><a href={"#" + l.id}>{l.label}</a></li>
        ))}
      </ul>
      <a className="btn small" href={resume} target="_blank" rel="noreferrer">Resume</a>
    </nav>
  );
}

export default Navbar;
