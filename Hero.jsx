import { useEffect, useRef } from 'react'
import heroPhoto from '../assets/sukrit_9_.jpeg'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.ha')
    els?.forEach((el, i) => { el.style.animationDelay = `${0.4 + i * 0.18}s` })
  }, [])

  const INSTA_URL = 'https://www.instagram.com/sukrit__001?igsh=MTI3M3k0bHlnYWYyeQ=='
  const WA_URL = 'https://wa.me/918847651524'

  // Generate smoke puffs
  const smokePuffs = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 7) % 90}%`,
    delay: `${(i * 0.7) % 6}s`,
    duration: `${7 + (i * 1.3) % 6}s`,
    size: `${120 + (i * 40) % 180}px`,
  }))

  return (
    <section id="home" ref={ref} style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: '#0a0806'
    }}>

      {/* ── CSS Smoke at the bottom ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '55%', zIndex: 1, pointerEvents: 'none', overflow: 'hidden'
      }}>
        {smokePuffs.map(p => (
          <div key={p.id} style={{
            position: 'absolute',
            bottom: '-60px',
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(28,20,10,0.55) 0%, rgba(18,13,6,0.3) 40%, transparent 70%)',
            animation: `smokeRise ${p.duration} ease-in ${p.delay} infinite`,
            filter: 'blur(18px)',
          }} />
        ))}
      </div>

      {/* Dark vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 60% 40%, rgba(20,15,8,0) 0%, rgba(0,0,0,0.78) 100%)',
        zIndex: 2, pointerEvents: 'none'
      }} />

      {/* SUKRIT SINGH watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center', userSelect: 'none',
        pointerEvents: 'none', zIndex: 0, width: '100%'
      }}>
        <div style={{
          fontFamily: "'Cinzel', serif", fontWeight: 900,
          fontSize: 'clamp(40px, 10vw, 140px)',
          letterSpacing: '0.15em', lineHeight: 1.05,
          color: 'rgba(201,168,76,0.03)', whiteSpace: 'nowrap'
        }}>SUKRIT</div>
        <div style={{
          fontFamily: "'Cinzel', serif", fontWeight: 900,
          fontSize: 'clamp(40px, 10vw, 140px)',
          letterSpacing: '0.15em', lineHeight: 1.05,
          color: 'rgba(201,168,76,0.02)', whiteSpace: 'nowrap'
        }}>SINGH</div>
      </div>

      {/* Mafia crest */}
      <div style={{
        position: 'absolute', top: 36, left: '50%', transform: 'translateX(-50%)',
        zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4
      }}>
        <svg width="56" height="32" viewBox="0 0 60 36" fill="none">
          <path d="M10 30 L10 16 L20 22 L30 8 L40 22 L50 16 L50 30 Z" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" fill="rgba(201,168,76,0.03)" />
          <circle cx="10" cy="16" r="2" fill="rgba(201,168,76,0.3)" />
          <circle cx="30" cy="8" r="2.5" fill="rgba(201,168,76,0.38)" />
          <circle cx="50" cy="16" r="2" fill="rgba(201,168,76,0.3)" />
          <line x1="6" y1="30" x2="54" y2="30" stroke="rgba(201,168,76,0.2)" strokeWidth="0.6" />
        </svg>
        <div style={{
          fontFamily: "'Cinzel', serif", fontSize: 7, letterSpacing: 5,
          color: 'rgba(201,168,76,0.25)', textTransform: 'uppercase'
        }}>Est. 2024</div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hero-desktop" style={{
        position: 'relative', zIndex: 3,
        width: '100%', maxWidth: 1300,
        margin: '0 auto',
        padding: '110px 72px 80px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 0, alignItems: 'center', minHeight: '100vh'
      }}>
        <div style={{ paddingRight: 60 }}>
          <LocationLabel />
          <Name />
          <Tagline />
          <Cards INSTA_URL={INSTA_URL} WA_URL={WA_URL} />
          <ScrollHint />
        </div>
        <div style={{ position: 'relative', height: 660, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
            width: 260, height: 180,
            background: 'radial-gradient(ellipse at 50% 100%, rgba(40,25,5,0.35) 0%, transparent 70%)',
            filter: 'blur(30px)', zIndex: 0
          }} />
          <div style={{ position: 'absolute', bottom: 0, width: 360, height: 580, zIndex: 2 }}>
            <PhotoFrame src={heroPhoto} />
          </div>
          <div style={{
            position: 'absolute', right: -10, top: '28%',
            fontFamily: "'Cinzel', serif", fontSize: 7, letterSpacing: 5,
            color: 'rgba(201,168,76,0.15)', textTransform: 'uppercase',
            writingMode: 'vertical-rl', zIndex: 3
          }}>Jalandhar · Punjab · India</div>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="hero-mobile" style={{
        display: 'none',
        position: 'relative', zIndex: 3,
        width: '100%', padding: '90px 20px 60px',
        flexDirection: 'column', alignItems: 'center', textAlign: 'center'
      }}>
        <div style={{ width: '100%', maxWidth: 300, marginBottom: 32, position: 'relative' }}>
          <PhotoFrame src={heroPhoto} />
        </div>
        <div style={{ width: '100%' }}>
          <LocationLabel center />
          <Name center />
          <Tagline center />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
            <SocialCard href={INSTA_URL} label="Instagram" handle="@sukrit__001"
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#c9a84c" strokeWidth="1.5" /><circle cx="12" cy="12" r="4.5" stroke="#c9a84c" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="#c9a84c" /></svg>}
            />
            <SocialCard href={WA_URL} label="WhatsApp" handle="+91 88476 51524"
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" stroke="#c9a84c" strokeWidth="1.4" /><path d="M9 9s.3.8 1.2 1.8S12 12 12 12l.8-.8s.4-.4.8 0l1.2 1.2c.4.4 0 .8 0 .8s-.8 1.2-2.4 0S8 10 8.4 8.6 9 9 9z" fill="#c9a84c" opacity="0.8" /></svg>}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes smokeRise {
          0%   { transform: translateY(0) scale(1);   opacity: 0; }
          15%  { opacity: 1; }
          70%  { opacity: 0.6; }
          100% { transform: translateY(-420px) scale(2.8); opacity: 0; }
        }
        @media (max-width: 860px) {
          .hero-desktop { display: none !important; }
          .hero-mobile  { display: flex !important; }
        }
      `}</style>
    </section>
  )
}

function LocationLabel({ center }) {
  return (
    <div className="ha" style={{
      opacity: 0, animation: 'fadeUp 0.7s ease forwards',
      fontFamily: "'Cinzel', serif", fontSize: 9, letterSpacing: 7,
      color: 'rgba(201,168,76,0.45)', textTransform: 'uppercase',
      marginBottom: 22,
      display: 'flex', alignItems: 'center', gap: 12,
      justifyContent: center ? 'center' : 'flex-start'
    }}>
      <span style={{ display: 'block', width: 28, height: 1, background: 'rgba(201,168,76,0.3)' }} />
      Jalandhar, Punjab
      <span style={{ display: 'block', width: 28, height: 1, background: 'rgba(201,168,76,0.3)' }} />
    </div>
  )
}

function Name({ center }) {
  return (
    <div className="ha" style={{ opacity: 0, animation: 'fadeUp 0.8s ease forwards', marginBottom: 18 }}>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900, fontStyle: 'italic',
        fontSize: 'clamp(44px, 7vw, 100px)',
        lineHeight: 0.95, letterSpacing: '-1px',
        whiteSpace: 'nowrap', color: '#f0e6d0',
        textShadow: '0 2px 30px rgba(0,0,0,0.9)',
        animation: 'flicker 8s ease infinite',
        textAlign: center ? 'center' : 'left'
      }}>Sukrit Singh</h1>
    </div>
  )
}

function Tagline({ center }) {
  return (
    <div className="ha" style={{
      opacity: 0, animation: 'fadeUp 0.7s ease forwards',
      fontFamily: "'Cormorant', serif",
      fontSize: 18, fontStyle: 'italic', fontWeight: 300,
      color: 'rgba(240,230,208,0.4)',
      letterSpacing: 2, marginBottom: 38,
      textAlign: center ? 'center' : 'left'
    }}>
      Always Around Good Spirits.
    </div>
  )
}

function Cards({ INSTA_URL, WA_URL }) {
  return (
    <div className="ha" style={{
      opacity: 0, animation: 'fadeUp 0.8s ease forwards',
      display: 'flex', flexDirection: 'column', gap: 11, maxWidth: 360
    }}>
      <SocialCard href={INSTA_URL} label="Instagram" handle="@sukrit__001"
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#c9a84c" strokeWidth="1.5" /><circle cx="12" cy="12" r="4.5" stroke="#c9a84c" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="#c9a84c" /></svg>}
      />
      <SocialCard href={WA_URL} label="WhatsApp" handle="+91 88476 51524"
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" stroke="#c9a84c" strokeWidth="1.4" /><path d="M9 9s.3.8 1.2 1.8S12 12 12 12l.8-.8s.4-.4.8 0l1.2 1.2c.4.4 0 .8 0 .8s-.8 1.2-2.4 0S8 10 8.4 8.6 9 9 9z" fill="#c9a84c" opacity="0.8" /></svg>}
      />
    </div>
  )
}

function ScrollHint() {
  return (
    <div className="ha" style={{
      opacity: 0, animation: 'fadeIn 1s ease forwards',
      marginTop: 44, display: 'flex', alignItems: 'center', gap: 12
    }}>
      <div style={{ width: 1, height: 30, background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)' }} />
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 7, letterSpacing: 4, color: 'rgba(201,168,76,0.2)', textTransform: 'uppercase' }}>Scroll</div>
    </div>
  )
}

function PhotoFrame({ src }) {
  return (
    <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
      {[
        { top: -8, left: -8, borderTop: '1px solid rgba(201,168,76,0.45)', borderLeft: '1px solid rgba(201,168,76,0.45)' },
        { top: -8, right: -8, borderTop: '1px solid rgba(201,168,76,0.45)', borderRight: '1px solid rgba(201,168,76,0.45)' },
        { bottom: -8, left: -8, borderBottom: '1px solid rgba(201,168,76,0.45)', borderLeft: '1px solid rgba(201,168,76,0.45)' },
        { bottom: -8, right: -8, borderBottom: '1px solid rgba(201,168,76,0.45)', borderRight: '1px solid rgba(201,168,76,0.45)' },
      ].map((s, i) => <div key={i} style={{ position: 'absolute', width: 20, height: 20, ...s }} />)}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <img src={src} alt="Sukrit Singh" style={{
          width: '100%', height: 'auto', display: 'block',
          filter: 'sepia(0.2) contrast(1.06) brightness(0.9) saturate(0.82)'
        }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '32%', background: 'linear-gradient(to bottom, #0a0806 0%, rgba(10,8,6,0.5) 45%, transparent 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,8,6,0.45) 0%, transparent 14%, transparent 86%, rgba(10,8,6,0.45) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '16%', background: 'linear-gradient(to top, rgba(10,8,6,0.45) 0%, transparent 100%)' }} />
      </div>
    </div>
  )
}

function SocialCard({ href, label, handle, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 18,
        padding: '13px 20px',
        background: 'rgba(201,168,76,0.03)',
        border: '1px solid rgba(201,168,76,0.16)',
        cursor: 'none', transition: 'all 0.3s ease',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.transform = 'translateX(5px)' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.03)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.16)'; e.currentTarget.style.transform = 'translateX(0)' }}
      >
        {icon}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 8, letterSpacing: 3, color: 'rgba(201,168,76,0.4)', textTransform: 'uppercase', marginBottom: 3 }}>{label}</div>
          <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 16, color: '#f0e6d0', letterSpacing: 1 }}>{handle}</div>
        </div>
        <div style={{ color: 'rgba(201,168,76,0.28)', fontSize: 15 }}>→</div>
      </div>
    </a>
  )
}
