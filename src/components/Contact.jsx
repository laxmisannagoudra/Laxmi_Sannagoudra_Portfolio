function Contact({ profile }) {
  return (
    <div className="contact">
      <a className="glass cbox" href={"mailto:" + profile.email}><span>✉️</span><b>Email</b><p>{profile.email}</p></a>
      <a className="glass cbox" href={"tel:+91" + profile.phone}><span>📞</span><b>Phone</b><p>{profile.phone}</p></a>
      <a className="glass cbox" href={profile.linkedin} target="_blank" rel="noreferrer"><span>💼</span><b>LinkedIn</b><p>Connect with me</p></a>
      <a className="glass cbox" href={profile.github} target="_blank" rel="noreferrer"><span>🐙</span><b>GitHub</b><p>See my code</p></a>
    </div>
  );
}

export default Contact;
