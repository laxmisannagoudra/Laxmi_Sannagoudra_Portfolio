function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      {children}
    </section>
  );
}

export default Section;
