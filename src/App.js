import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

// ================= HERO =================
const Hero = () => (
  <section className="hero">
    <h1>Ankit Chaudhary</h1>
    <h2>I simplify complex problems into scalable solutions</h2>
    <p>Full Stack Developer | Java | React | SQL | Power BI | Python | JavaScript | C | C++</p>

    <div className="buttons">
      <a href="https://drive.google.com/file/d/1ss-7E_f1CdSG7SWJd51AgHigz8a0MJD3/view?usp=drive_link" className="btn">Download Resume</a>
      <a href="https://github.com/ankit14022003" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/ankit-chaudhary-bbbb06247?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  </section>
);

// ================= PROJECTS =================
const Projects = () => (
  <section className="section">
    <h2>Projects</h2>

    <div className="grid">
      <Card
        title="IPL Power BI Dashboard"
        desc="Built an interactive IPL analytics dashboard using Power BI, improving data insights by 40% and enabling better decision-making."
        tech="Power BI, SQL"
        github="https://ankit14022003.github.io/IPL-Analysis-Dashboard/"
      />

      <Card
      title="Forggith Pharma Dashboard"
      desc="Created a comprehensive business intelligence dashboard for Forggith Pharma to analyze sales, customer trends, and performance insights."
      tech="Power BI, SQL, Data Analytics"
      github="https://ankit14022003.github.io/Forggith-Pharmaceuticals-Dashboard/"
      />
    </div>
  </section>
);

const Card = ({ title, desc, tech, github }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{desc}</p>
    <p className="tech">{tech}</p>

    <div>
      <a href={github} target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </div>
);

// ================= EXPERIENCE =================
const Experience = () => (
  <section className="section">
    <h2>Experience</h2>

    <div className="timeline">
      <div>
        <h3>Data Analyst Intern</h3>
        <p>Worked on dashboards and data visualization using Power BI.</p>
      </div>

      <div>
        <h3>Frontend Developer Intern</h3>
        <p>Built responsive UI using React and improved user experience.</p>
      </div>
    </div>
  </section>
);

// ================= SKILLS =================
const Skills = () => (
  <section className="section">
    <h2>Skills</h2>

    <div className="grid">
      <Skill name="Java" level="90%" />
      <Skill name="React" level="85%" />
      <Skill name="SQL" level="90%" />
      <Skill name="Power BI" level="85%" />
      <Skill name="C / C++" level="75%" />
      <Skill name="JavaScript" level="90%" />
      <Skill name="Python" level="75%" />
      <Skill name="DotNet" level="80%" />
      <Skill name="MongoDB" level="80%" />
    </div>
  </section>
);

const Skill = ({ name, level }) => (
  <div>
    <p>{name}</p>
    <div className="bar">
      <div className="fill" style={{ width: level }}></div>
    </div>
  </div>
);

// ================= CONTACT =================
const Contact = () => {
  return (
    <section className="section">
      <h2>Contact Me</h2>

      <form action="https://formspree.io/f/xaqlwkzr" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default App;