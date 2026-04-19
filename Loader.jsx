import { useEffect, useState } from 'react'

export default function Loader() {
  const [pct, setPct] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 200)
    const iv = setInterval(() => {
      setPct(p => { if (p >= 100) { clearInterval(iv); return 100 } return Math.min(p + Math.random() * 14, 100) })
    }, 120)
    return () => clearInterval(iv)
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#0a0806',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 99985, gap: 40
    }}>
      {/* Top & bottom cinematic bars */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:6, background:'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}/>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:6, background:'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}/>

      {/* Ornate circle */}
      <div style={{ position:'relative', width:130, height:130 }}>
        <div style={{
          position:'absolute', inset:0, borderRadius:'50%',
          border:'1px solid rgba(201,168,76,0.12)'
        }}/>
        <div style={{
          position:'absolute', inset:0, borderRadius:'50%',
          border:'1px solid transparent',
          borderTopColor:'#c9a84c', borderRightColor:'rgba(201,168,76,0.3)',
          animation:'spin 2s linear infinite'
        }}/>
        <div style={{
          position:'absolute', inset:14, borderRadius:'50%',
          border:'1px solid rgba(201,168,76,0.08)'
        }}/>
        <div style={{
          position:'absolute', inset:0,
          display:'flex', alignItems:'center', justifyContent:'center',
          flexDirection:'column', gap:2
        }}>
          <div style={{
            fontFamily:"'Cinzel', serif",
            fontSize:28, fontWeight:700, color:'#c9a84c',
            animation:'flicker 4s ease infinite',
            letterSpacing:2
          }}>SS</div>
        </div>
      </div>

      {/* Name reveal */}
      <div style={{
        textAlign:'center',
        opacity: show ? 1 : 0,
        transition: 'opacity 1s ease'
      }}>
        <div style={{
          fontFamily:"'Cinzel', serif",
          fontSize:13, letterSpacing:8,
          color:'rgba(201,168,76,0.5)',
          textTransform:'uppercase', marginBottom:6
        }}>Est. 2024</div>
        <div style={{
          fontFamily:"'Playfair Display', serif",
          fontSize:26, fontWeight:900,
          color:'#f0e6d0', letterSpacing:4,
          fontStyle:'italic'
        }}>Sukrit Singh</div>
      </div>

      {/* Progress bar */}
      <div style={{ width:220 }}>
        <div style={{
          height:1, background:'rgba(201,168,76,0.1)',
          position:'relative', overflow:'hidden'
        }}>
          <div style={{
            position:'absolute', left:0, top:0, height:'100%',
            width:`${Math.min(pct,100)}%`,
            background:'linear-gradient(90deg, var(--gold3,#8a6a20), #c9a84c)',
            transition:'width 0.12s ease'
          }}/>
        </div>
        <div style={{
          fontFamily:"'Cinzel', serif",
          fontSize:9, letterSpacing:3,
          color:'rgba(201,168,76,0.3)',
          textAlign:'center', marginTop:10, textTransform:'uppercase'
        }}>{Math.round(Math.min(pct,100))}%</div>
      </div>
    </div>
  )
}
