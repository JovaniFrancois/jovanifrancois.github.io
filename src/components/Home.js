import React, { useState } from 'react';
import './component.css';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleContactSubmit(e) {
    e.preventDefault();
    const to = 'jovanifrancois26@gmail.com';
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name || ''} <${email || ''}>`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  return (
    <div>
      <section id="home" className="panel home-panel">
        <div className="home-grid">
          <div className="info-card">
            <div className="info-lines">
              <div className="info-line">Gainesville, FL</div>
              <div className="info-line">University of Florida</div>
              <div className="info-line">Expected: May 2029</div>
            </div>
          </div>

          <div className="home-intro">
            <h2 className="transparent-heading">Hello</h2>
            <p className="about-text small-text">
              I’m a Computer Science student at the University of Florida with a strong foundation in C++ and Python. I enjoy building practical projects that strengthen my coding skills and problem-solving abilities, and I’m always exploring new technologies to expand my toolkit. My focus is on developing clean, efficient solutions while growing as a programmer and collaborator.
            </p>

            <div className="skills">
              <span className="skill">Python</span>
              <span className="skill">C++</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="panel">
        <h3 className="transparent-heading">About</h3>
        <p className="small-text muted">I am Jovani Francois and I attend UF.</p>
      </section>

      <section id="education" className="panel">
        <h3 className="transparent-heading">Education</h3>
        <div className="edu small-text">
          <strong>University of Florida</strong> — Bachelor of Science in Computer Science
          <div className="muted">GPA: 3.71 • Expected: May 2029</div>
          <div className="muted">Wharton High School: AICE Diploma, AP Scholar, FAS</div>
        </div>
      </section>

      <section id="projects" className="panel">
        <h3 className="transparent-heading">Projects & Activities</h3>
        <div className="projects-stack">
          <article className="project-card">
            <div className="project-header">Sudoku Generator</div>
            <ul className="project-bullets">
              <li>Designed solver using recursive backtracking to validate and complete boards.</li>
              <li>Built a simple UI for interactive play and input validation.</li>
              <li>Focused on efficient algorithms and clear code structure.</li>
            </ul>
          </article>

          <article className="project-card">
            <div className="project-header">Roblox Game Development</div>
            <ul className="project-bullets">
              <li>Collaborated on game design and Lua scripting for multiple titles.</li>
              <li>Improved stability and user experience; one title reached 15k+ plays.</li>
              <li>Worked with Blender assets and iterative playtesting.</li>
            </ul>
          </article>

          <article className="project-card">
            <div className="project-header">Independent Creative Projects</div>
            <ul className="project-bullets">
              <li>Produced thumbnails, videos, and art, totaling 2M+ views.</li>
              <li>Freelanced editing projects for 10+ clients; managed delivery and revisions.</li>
              <li>Developed creative and client-communication skills alongside technical work.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" className="panel contact-panel">
        <h3 className="transparent-heading">Contact</h3>
        <div className="contact-info small-text muted">
          Tampa, FL &nbsp;|&nbsp; P: 813-900-4185 &nbsp;|&nbsp; jovanifrancois26@gmail.com &nbsp;|&nbsp; www.linkedin.com/in/jovani-francois
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
          <input placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
