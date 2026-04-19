import { useState, useEffect } from 'react'
import Cursor from './Cursor.jsx'
import Loader from './Loader.jsx'
import Hero from './Hero.jsx'
import Gallery from './Gallery.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

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
