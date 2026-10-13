import { useEffect, useRef, useState } from 'react'
import { projects } from '../data.js'

function ProjectCard({ project, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`card ${project.image ? '' : `art-${project.art}`} ${selected ? 'is-selected' : ''}`}
      onClick={onSelect}
      aria-expanded={selected}
      aria-controls="project-detail"
    >
      {project.image && <img className="card-image" src={project.image} alt="" loading="lazy" />}
      <span className="card-shade" aria-hidden="true" />
      <span className="card-text">
        <span className="card-category">{project.category}</span>
        <span className="card-title">{project.title}</span>
      </span>
      <span className="card-hint" aria-hidden="true">{selected ? '−' : '+'}</span>
    </button>
  )
}

function ProjectDetail({ project, open, onClose, panelRef }) {
  return (
    <div id="project-detail" className={`detail ${open ? 'is-open' : ''}`} ref={panelRef}>
      <div className="detail-clip" inert={!open}>
        {project && (
          // keyed so the content fades in again when switching between projects
          <article className="detail-inner" key={project.title}>
            <button type="button" className="detail-close" onClick={onClose} aria-label="Close project details">
              ×
            </button>

            <div className="detail-main">
              <p className="eyebrow">{project.category}</p>
              <h2>
                {project.title}
                {project.comingSoon && <span className="badge">In development</span>}
              </h2>
              <p className="detail-summary">{project.summary}</p>
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="detail-side">
              <p className="detail-label">Stack</p>
              <ul className="skills">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.demo ? (
                <a className="cta" href={project.demo} target="_blank" rel="noreferrer">
                  Let's see it in action <span aria-hidden="true">→</span>
                </a>
              ) : (
                <button type="button" className="cta" disabled>
                  {project.comingSoon ? 'Coming soon' : "Let's see it in action"}
                </button>
              )}
            </div>
          </article>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const panelRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)
  // the last opened project stays rendered so the panel still has content while it animates shut
  const [shownIndex, setShownIndex] = useState(null)

  // once the panel has finished opening, bring it into view
  useEffect(() => {
    if (openIndex === null) return
    const timer = setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 420)
    return () => clearTimeout(timer)
  }, [openIndex])

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
      setShownIndex(index)
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <h1>Featured Projects</h1>
        <p className="eyebrow">Explore my work</p>
      </div>

      <div className="carousel">
        <div className="carousel-track">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              selected={openIndex === index}
              onSelect={() => toggle(index)}
            />
          ))}
        </div>
      </div>

      <ProjectDetail
        project={shownIndex === null ? null : projects[shownIndex]}
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        panelRef={panelRef}
      />
    </section>
  )
}
