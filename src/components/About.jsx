import { site } from '../data.js'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading">
        <h2 className="eyebrow">A bit about me</h2>
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
