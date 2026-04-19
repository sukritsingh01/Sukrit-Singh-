import { useState, useEffect } from 'react'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 3000) }, [])

  return (
    <>
      <Cursor />
      {!loaded && <Loader />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1.2s ease' }}>
        <Hero />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
