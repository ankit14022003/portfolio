import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

// ===== HERO =====
const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Ankit Chaudhary</h1>
      <h2>Data Analyst & Full Stack Developer</h2>

      <p className="hero-subtext">
        Turning data into actionable insights and building scalable web applications.
      </p>

      <div className="buttons">
        <a
          href="https://drive.google.com/file/d/1ss-7E_f1CdSG7SWJd51AgHigz8a0MJD3/view"
          className="btn primary"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>

        <a href="https://github.com/ankit14022003" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/ankit-chaudhary-bbbb06247" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

// ===== ABOUT =====
const About = () => (
  <section className="section">
    <h2>About</h2>

    <p className="about-text">
      Computer Engineering graduate with expertise in Data Analytics and Business Intelligence,
      along with a strong foundation in Full Stack Development. Skilled in SQL, Power BI, Tableau,
      and Python for building data-driven dashboards and extracting meaningful insights, and
      experienced in developing scalable web applications using Java, React, and JavaScript.
    </p>
  </section>
);

// ===== SKILLS =====
const Skills = () => (
  <section className="section">
    <h2>Skills</h2>

    <div className="skills-grid">
      {[
        "Java",
        "JavaScript",
        "React",
        "SQL / PL-SQL",
        "MongoDB",
        "Python",
        "Power BI",
        "Tableau",
        "Excel",
        "AWS",
        "Azure",
        "HTML / CSS",
      ].map((skill, i) => (
        <div key={i} className="skill">
          {skill}
        </div>
      ))}
    </div>
  </section>
);

// ===== PROJECTS =====
const Projects = () => (
  <section className="section">
    <h2>Projects</h2>

    <div className="grid">
      <Card
        title="IPL Analytics Dashboard"
        desc="Interactive Power BI dashboard with KPIs, team insights, and performance analysis."
        tech="Power BI, Excel, DAX"
        live="https://ankit14022003.github.io/IPL-Analysis-Dashboard/"
        github="https://github.com/ankit14022003/IPL-Analysis-Dashboard"
      />

      <Card
        title="Forggith Pharma Dashboard"
        desc="Business dashboard analyzing sales, marketing trends, and product performance across multiple dimensions."
        tech="Power BI, Excel"
        live="https://ankit14022003.github.io/Forggith-Pharmaceuticals-Dashboard/"
        github="https://github.com/ankit14022003/Forggith-Pharmaceuticals-Dashboard"
      />

      <Card
        title="Quiz App"
        desc="React-based quiz app with score tracking, dynamic questions, and local storage."
        tech="React, JavaScript"
        live="https://globalfluent-vidya-tech-quizap-mm.netlify.app/"
      />

      <Card
        title="API Projects"
        desc="Weather and Dictionary apps integrating real-time APIs with dynamic UI updates."
        tech="JavaScript, API, JSON"
        live="https://api-weather-app-mm.netlify.app/"
      />
    </div>
  </section>
);

const Card = ({ title, desc, tech, live, github }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{desc}</p>

    <p className="tech">{tech}</p>

    <div className="card-links">
      {live && (
        <a href={live} target="_blank" rel="noreferrer">
          Live
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      )}
    </div>
  </div>
);

// ===== EXPERIENCE =====
const Experience = () => (
  <section className="section">
    <h2>Experience</h2>

    <div className="timeline">
      <div>
        <h3>Web Developer Intern</h3>
        <p className="company">Model Media Solutions</p>
        <p className="duration">Dec 2023 – Feb 2024</p>
        <p>
          Built responsive web interfaces and integrated APIs to improve performance
          and user experience.
        </p>
      </div>

      <div>
        <h3>Frontend Developer Intern</h3>
        <p className="company">CodSoft</p>
        <p className="duration">Jan 2024 – Feb 2024</p>
        <p>
          Developed reusable UI components using React and enhanced application usability.
        </p>
      </div>
    </div>
  </section>
);

// ===== CONTACT =====
const Contact = () => (
  <section className="section contact">
    <h2>Contact</h2>

    <div className="contact-container">
      <div className="contact-info">
        <p><strong>Email:</strong> ankitchaudhary14022003@gmail.com</p>
        <p><strong>Phone:</strong> +91 9860214278</p>
      </div>

      <div className="contact-links">
        <a href="https://github.com/ankit14022003" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ankit-chaudhary-bbbb06247" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>

    <form action="https://formspree.io/f/xaqlwkzr" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

// ===== FOOTER =====
const Footer = () => (
  <div className="footer">
    © 2026 Ankit Chaudhary. All rights reserved.
  </div>
);

export default App;