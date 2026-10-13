import { site } from '../data.js'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading">
        <h2>About</h2>
        <p className="eyebrow">A bit about me</p>
      </div>
      <div className="about-body">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="skills">
          {site.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
