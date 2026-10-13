import Logo from './Logo.jsx'

export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-logo" aria-label="Home">
        <Logo />
      </a>
      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
