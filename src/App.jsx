import { useState } from "react";
import IntroOverlay from "./components/IntroOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import VideoIntro from "./components/VideoIntro";
import SkillGroup from "./components/SkillGroup";
import TimelineItem from "./components/TimelineItem";
import ProjectCard from "./components/ProjectCard";
import EducationCard from "./components/EducationCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { profile, navLinks, stats, skills, experience, projects, education, achievements } from "./data";

function App() {
  // showIntro is true when the page opens, so the intro video plays first.
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div>
      {showIntro && <IntroOverlay onClose={() => setShowIntro(false)} />}
      <Navbar name={profile.name} links={navLinks} resume={profile.resume} />
      <Hero profile={profile} stats={stats} />

      <Section id="about" title="About Me" subtitle="Watch my short introduction">
        <VideoIntro summary={profile.summary} />
      </Section>

      <Section id="skills" title="Skills" subtitle="Technologies I work with">
        <div className="grid">
          {skills.map((g) => (
            <SkillGroup key={g.title} title={g.title} icon={g.icon} items={g.items} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="Where I have worked">
        {experience.map((e) => (
          <TimelineItem key={e.company} role={e.role} company={e.company} period={e.period} points={e.points} />
        ))}
      </Section>

      <Section id="projects" title="Projects" subtitle="Things I have built">
        <div className="grid two">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} tech={p.tech} points={p.points} link={p.link} demo={p.demo} />
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" subtitle="My academic journey">
        <div className="grid">
          {education.map((e) => (
            <EducationCard key={e.degree} degree={e.degree} place={e.place} period={e.period} score={e.score} />
          ))}
        </div>
        <h3 className="sub">Achievements & Certifications</h3>
        <div className="grid two">
          {achievements.map((a) => (
            <div className="glass ach" key={a.text}>
              <span>{a.icon}</span>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get In Touch" subtitle="I am open to entry-level opportunities">
        <Contact profile={profile} />
      </Section>

      <Footer name={profile.name} />
    </div>
  );
}

export default App;
