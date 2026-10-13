import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  )
}
