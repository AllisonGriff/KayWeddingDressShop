import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PhotoCarousel } from './components/PhotoCarousel'

function App() {
  return (
    <div className="site">
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <PhotoCarousel />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
