import { useEffect, useRef } from 'react'
import photo2 from '../assets/sukrit_2_.jpeg'
import photo8 from '../assets/sukrit_8_.jpeg'

const facts = [
  { emoji:'🏔️', label:'Mountain Lover', desc:'From Himachal valleys to snowy peaks — the mountains call and I must go.' },
  { emoji:'🏍️', label:'Royal Enfield Rider', desc:'Nothing beats the open road on a Bullet. Punjab highways hit different.' },
  { emoji:'🌆', label:'City Explorer', desc:'India Gate, old lanes, new vibes — every city has a story to tell.' },
  { emoji:'😎', label:'Style Icon', desc:'Whether it\'s a blazer or a polo, always dressed to impress.' },
]

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.rev').forEach((el, i) => {
            el.style.animation = `fadeUp 0.7s ease ${i*0.12}s forwards`
          })
        }
      })
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} style={{
      padding:'120px 0', background:'#0b0914',
      position:'relative', overflow:'hidden'
    }}>
      <div style={{
        position:'absolute', top:0, right:0,
        width:400, height:400,
        background:'radial-gradient(circle, rgba(241,91,181,0.07) 0%, transparent 70%)',
        filter:'blur(60px)'
      }}/>

      <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 48px' }}>
        {/* Header */}
        <div className="rev" style={{ opacity:0, marginBottom:80, textAlign:'center' }}>
          <div style={{
            fontFamily:"'Space Mono', monospace",
            fontSize:10, letterSpacing:6,
            color:'#9b5de5', textTransform:'uppercase', marginBottom:16
          }}>— Who Am I —</div>
          <h2 style={{
            fontFamily:"'Cormorant Garamond', serif",
            fontSize:'clamp(40px, 6vw, 72px)',
            fontWeight:700, lineHeight:1,
            background:'linear-gradient(135deg, #fff 30%, #9b5de5 70%)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'
          }}>A Little About Me</h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          {/* Left photos */}
          <div className="rev" style={{ opacity:0, position:'relative', height:560 }}>
            {/* Photo 1 */}
            <div style={{
              position:'absolute', right:0, top:0,
              width:280, height:380, overflow:'hidden',
              border:'1px solid rgba(155,93,229,0.3)',
              animation:'borderGlow 3s ease infinite'
            }}>
              <img src={photo2} alt="Sukrit" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}/>
              <div style={{
                position:'absolute', bottom:0, left:0, right:0, height:'40%',
                background:'linear-gradient(to top, rgba(11,9,20,0.8) 0%, transparent 100%)'
              }}/>
            </div>

            {/* Photo 2 */}
            <div style={{
              position:'absolute', left:0, bottom:0,
              width:240, height:320, overflow:'hidden',
              border:'1px solid rgba(0,245,212,0.25)',
              boxShadow:'0 0 40px rgba(0,245,212,0.1)'
            }}>
              <img src={photo8} alt="Sukrit" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}/>
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(to top, rgba(11,9,20,0.6) 0%, transparent 60%)'
              }}/>
            </div>

            {/* connecting line decoration */}
            <div style={{
              position:'absolute', top:'30%', left:'42%',
              width:60, height:1,
              background:'linear-gradient(90deg, rgba(0,245,212,0.5), rgba(155,93,229,0.5))'
            }}/>

            {/* Location badge */}
            <div style={{
              position:'absolute', top:20, left:20, zIndex:5,
              background:'rgba(11,9,20,0.9)', backdropFilter:'blur(20px)',
              border:'1px solid rgba(155,93,229,0.3)',
              padding:'10px 16px', borderRadius:3
            }}>
              <div style={{
                fontFamily:"'Space Mono', monospace",
                fontSize:9, color:'#9b5de5', letterSpacing:2
              }}>📍 PATIALA, PUNJAB</div>
            </div>
          </div>

          {/* Right text */}
          <div>
            <div className="rev" style={{ opacity:0, marginBottom:32 }}>
              <p style={{
                fontFamily:"'Cormorant Garamond', serif",
                fontSize:22, fontWeight:300, lineHeight:1.9,
                color:'rgba(255,255,255,0.65)',
                fontStyle:'italic'
              }}>
                I'm <strong style={{ color:'#fff', fontStyle:'normal', fontWeight:600 }}>Sukrit Singh</strong> — a young guy from Patiala with big dreams,
                bigger adventures, and an eye for the good things in life.
                Fresh out of +2 and already living life to the fullest.
              </p>
            </div>

            <div className="rev" style={{ opacity:0, marginBottom:48 }}>
              <p style={{
                fontFamily:"'Montserrat', sans-serif",
                fontSize:15, fontWeight:300, lineHeight:1.9,
                color:'rgba(255,255,255,0.45)'
              }}>
                Whether I'm riding through Punjab's highways, exploring the mountains of Himachal,
                or posing at India Gate — I'm always making moments worth remembering. 
                Style, vibes, and good energy is what I'm all about. 🤙
              </p>
            </div>

            {/* Fun facts grid */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              {facts.map((f, i) => (
                <div key={f.label} className="rev" style={{
                  opacity:0, padding:'20px',
                  background:'rgba(255,255,255,0.03)',
                  border:'1px solid rgba(155,93,229,0.15)',
                  borderRadius:4, transition:'all 0.3s ease'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(155,93,229,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(155,93,229,0.4)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.borderColor = 'rgba(155,93,229,0.15)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ fontSize:24, marginBottom:8 }}>{f.emoji}</div>
                  <div style={{
                    fontFamily:"'Montserrat', sans-serif",
                    fontSize:12, fontWeight:500, color:'#fff', marginBottom:6
                  }}>{f.label}</div>
                  <div style={{
                    fontFamily:"'Montserrat', sans-serif",
                    fontSize:11, fontWeight:300, color:'rgba(255,255,255,0.4)',
                    lineHeight:1.6
                  }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:900px) {
          #about > div > div:last-child { grid-template-columns:1fr !important; }
          #about > div > div:last-child > div:first-child { display:none; }
        }
      `}</style>
    </section>
  )
}
