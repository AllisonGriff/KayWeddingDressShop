import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AboutPage } from './pages/AboutPage'
import { Home } from './pages/Home'
import { Looks } from './pages/Looks'
import { Playground } from './pages/Playground'
import { Products } from './pages/Products'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/looks" element={<Looks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
