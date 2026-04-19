import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:1000,
      padding: scrolled ? '12px 48px' : '22px 48px',
      background: scrolled ? 'rgba(8,6,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(155,93,229,0.15)' : 'none',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      transition:'all 0.4s ease'
    }}>
      <div style={{
        fontFamily:"'Cormorant Garamond', serif",
        fontSize:26, fontWeight:700,
        background:'linear-gradient(135deg,#9b5de5,#00f5d4)',
        WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
        cursor:'pointer'
      }} onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>SS</div>

      <div style={{ display:'flex', gap:40, alignItems:'center' }}>
        {['About','Gallery','Contact'].map(l => (
          <button key={l} onClick={() => go(l.toLowerCase())} style={{
            background:'none', border:'none', cursor:'none',
            fontFamily:"'Montserrat', sans-serif",
            fontSize:11, letterSpacing:3, textTransform:'uppercase',
            color:'rgba(255,255,255,0.5)', transition:'color 0.3s'
          }}
            onMouseEnter={e => e.target.style.color='#00f5d4'}
            onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.5)'}
          >{l}</button>
        ))}
      </div>
    </nav>
  )
}
