import { useState } from 'react'
import p1 from './sukrit_1_.jpeg'
import p2 from './sukrit_2_.jpeg'
import p3 from './sukrit_3_.jpeg'
import p4 from './sukrit_4_.jpeg'
import p5 from './sukrit_5_.jpeg'
import p6 from './sukrit_6_.jpeg'
import p7 from './sukrit_7_.jpeg'
import p8 from './sukrit_8_.jpeg'

const photos = [p4, p3, p6, p8, p5, p7, p1, p2]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" style={{ padding: '70px 0', background: '#0d0a06', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)' }} />

      <div style={{ width: '100%', padding: '0 16px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 9, letterSpacing: 7, color: 'rgba(201,168,76,0.4)', textTransform: 'uppercase', marginBottom: 10 }}>— Captured Moments —</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: 700, fontStyle: 'italic', color: '#f0e6d0' }}>The Gallery</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginTop: 12 }}>
            <div style={{ width: 32, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
            <div style={{ width: 4, height: 4, background: 'rgba(201,168,76,0.5)', transform: 'rotate(45deg)' }} />
            <div style={{ width: 32, height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
          </div>
        </div>

        {/* Row 1 — 4 photos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 6 }} className="gallery-row">
          {photos.slice(0, 4).map((src, i) => <GCard key={i} src={src} onClick={() => setLightbox(i)} />)}
        </div>

        {/* Row 2 — 4 photos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }} className="gallery-row">
          {photos.slice(4, 8).map((src, i) => <GCard key={i + 4} src={src} onClick={() => setLightbox(i + 4)} />)}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(10,8,6,0.97)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 16, cursor: 'none'
        }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{ position: 'absolute', inset: -10, border: '1px solid rgba(201,168,76,0.1)', pointerEvents: 'none' }} />
            <img src={photos[lightbox]} alt="Sukrit" style={{ maxWidth: '92vw', maxHeight: '84vh', objectFit: 'contain', display: 'block', filter: 'sepia(0.1) contrast(1.04)' }} />
            <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: -16, right: -16, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.22)', color: 'rgba(201,168,76,0.8)', width: 32, height: 32, borderRadius: '50%', cursor: 'none', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            <button onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }} style={{ position: 'fixed', left: 10, top: '50%', transform: 'translateY(-50%)', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.18)', color: 'rgba(201,168,76,0.7)', width: 42, height: 42, cursor: 'none', fontSize: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
            <button onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }} style={{ position: 'fixed', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.18)', color: 'rgba(201,168,76,0.7)', width: 42, height: 42, cursor: 'none', fontSize: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .gallery-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}

function GCard({ src, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <div onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'none',
        border: `1px solid ${hov ? 'rgba(201,168,76,0.28)' : 'rgba(201,168,76,0.05)'}`,
        transition: 'border-color 0.3s', background: '#0a0806'
      }}>
      <img src={src} alt="Sukrit" style={{
        width: '100%', height: 'auto', display: 'block',
        filter: `sepia(0.15) contrast(1.05) brightness(${hov ? '0.98' : '0.82'})`,
        transition: 'filter 0.4s, transform 0.5s',
        transform: hov ? 'scale(1.03)' : 'scale(1)'
      }} />
      <div style={{ position: 'absolute', inset: 0, background: hov ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.22)', transition: 'background 0.4s' }} />
      {hov && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent)' }} />}
    </div>
  )
}
