const INSTA_URL = 'https://www.instagram.com/sukrit__001?igsh=MTI3M3k0bHlnYWYyeQ=='
const WA_URL    = 'https://wa.me/918847651524'

// Old Punjab map outline as SVG path (simplified vintage style)
function PunjabMap() {
  return (
    <div style={{ position:'relative', marginTop:40, marginBottom:8 }}>
      {/* Label above */}
      <div style={{
        fontFamily:"'Cinzel', serif", fontSize:8, letterSpacing:5,
        color:'rgba(201,168,76,0.3)', textTransform:'uppercase',
        textAlign:'center', marginBottom:16
      }}>Punjab, India</div>

      <svg viewBox="0 0 320 260" width="100%" style={{ maxWidth:320, display:'block', margin:'0 auto', opacity:0.55 }}>
        {/* Decorative outer frame */}
        <rect x="4" y="4" width="312" height="252" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5"/>
        <rect x="8" y="8" width="304" height="244" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5"/>

        {/* Punjab state simplified vintage outline */}
        <path
          d="M 60,30 L 80,20 L 110,18 L 140,22 L 170,18 L 200,25 L 230,30 L 255,50 L 260,75 L 255,100 L 260,125 L 250,150 L 240,170 L 220,185 L 200,200 L 175,215 L 155,225 L 130,228 L 108,220 L 85,205 L 68,190 L 55,170 L 45,148 L 40,125 L 42,100 L 45,75 L 50,55 Z"
          fill="none"
          stroke="rgba(201,168,76,0.5)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Inner fill — very subtle */}
        <path
          d="M 60,30 L 80,20 L 110,18 L 140,22 L 170,18 L 200,25 L 230,30 L 255,50 L 260,75 L 255,100 L 260,125 L 250,150 L 240,170 L 220,185 L 200,200 L 175,215 L 155,225 L 130,228 L 108,220 L 85,205 L 68,190 L 55,170 L 45,148 L 40,125 L 42,100 L 45,75 L 50,55 Z"
          fill="rgba(201,168,76,0.04)"
        />

        {/* Rivers — Sutlej, Beas style lines */}
        <path d="M 70,60 Q 120,90 150,130 Q 180,165 210,195" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8" strokeDasharray="4,3"/>
        <path d="M 110,30 Q 140,70 155,110 Q 168,150 175,200" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.6" strokeDasharray="3,3"/>

        {/* Jalandhar dot */}
        <circle cx="148" cy="108" r="4" fill="rgba(201,168,76,0.8)"/>
        <circle cx="148" cy="108" r="8" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.8"/>
        <circle cx="148" cy="108" r="14" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5"/>

        {/* Jalandhar label */}
        <text x="162" y="112" fontFamily="Cinzel, serif" fontSize="8" fill="rgba(201,168,76,0.7)" letterSpacing="1">Jalandhar</text>

        {/* Other cities — subtle dots */}
        <circle cx="120" cy="68" r="2.5" fill="rgba(201,168,76,0.3)"/>
        <text x="126" y="72" fontFamily="Cinzel, serif" fontSize="6" fill="rgba(201,168,76,0.3)" letterSpacing="0.5">Amritsar</text>

        <circle cx="185" cy="148" r="2.5" fill="rgba(201,168,76,0.3)"/>
        <text x="191" y="152" fontFamily="Cinzel, serif" fontSize="6" fill="rgba(201,168,76,0.3)" letterSpacing="0.5">Ludhiana</text>

        <circle cx="160" cy="195" r="2" fill="rgba(201,168,76,0.2)"/>
        <text x="166" y="199" fontFamily="Cinzel, serif" fontSize="6" fill="rgba(201,168,76,0.2)" letterSpacing="0.5">Patiala</text>

        {/* Compass rose — vintage */}
        <g transform="translate(272, 38)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
          <line x1="0" y1="-10" x2="0" y2="10" stroke="rgba(201,168,76,0.3)" strokeWidth="0.6"/>
          <line x1="-10" y1="0" x2="10" y2="0" stroke="rgba(201,168,76,0.3)" strokeWidth="0.6"/>
          <polygon points="0,-10 -3,-4 3,-4" fill="rgba(201,168,76,0.6)"/>
          <text x="-2" y="-13" fontFamily="Cinzel, serif" fontSize="7" fill="rgba(201,168,76,0.5)">N</text>
        </g>

        {/* Decorative corner ornaments on map */}
        <line x1="4" y1="20" x2="20" y2="4" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
        <line x1="316" y1="20" x2="300" y2="4" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
        <line x1="4" y1="240" x2="20" y2="256" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
        <line x1="316" y1="240" x2="300" y2="256" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5"/>
      </svg>

      {/* Location text below map */}
      <div style={{ textAlign:'center', marginTop:14 }}>
        <div style={{
          fontFamily:"'EB Garamond', serif",
          fontSize:15, color:'rgba(240,230,208,0.5)', letterSpacing:2
        }}>Jalandhar, Punjab, India</div>
        <div style={{
          fontFamily:"'EB Garamond', serif",
          fontSize:16, color:'rgba(201,168,76,0.45)',
          marginTop:4, letterSpacing:1
        }}>ਜਲੰਧਰ, ਪੰਜਾਬ</div>
      </div>
    </div>
  )
}

function ContactCard({ href, label, sublabel, value, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none', display:'block' }}>
      <div style={{
        display:'flex', alignItems:'center', gap:22,
        padding:'22px 28px',
        background:'rgba(201,168,76,0.025)',
        border:'1px solid rgba(201,168,76,0.14)',
        transition:'all 0.35s ease',
        cursor:'none', textAlign:'left'
      }}
        onMouseEnter={e => { e.currentTarget.style.background='rgba(201,168,76,0.07)'; e.currentTarget.style.borderColor='rgba(201,168,76,0.38)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(0,0,0,0.5)' }}
        onMouseLeave={e => { e.currentTarget.style.background='rgba(201,168,76,0.025)'; e.currentTarget.style.borderColor='rgba(201,168,76,0.14)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
      >
        <div style={{ width:44, height:44, borderRadius:'50%', border:'1px solid rgba(201,168,76,0.22)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          {icon}
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:"'Cinzel', serif", fontSize:8, letterSpacing:4, color:'rgba(201,168,76,0.4)', textTransform:'uppercase', marginBottom:4 }}>{label}</div>
          <div style={{ fontFamily:"'EB Garamond', serif", fontSize:19, color:'#f0e6d0', letterSpacing:1 }}>{value}</div>
          {sublabel && <div style={{ fontFamily:"'Cormorant', serif", fontSize:12, fontStyle:'italic', color:'rgba(240,230,208,0.3)', marginTop:2 }}>{sublabel}</div>}
        </div>
        <div style={{ color:'rgba(201,168,76,0.28)', fontSize:20, flexShrink:0 }}>→</div>
      </div>
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding:'90px 0', background:'#0a0806', position:'relative' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)' }}/>

      {/* Subtle dark vignette corner */}
      <div style={{ position:'absolute', bottom:0, right:0, width:400, height:400, background:'radial-gradient(ellipse at 100% 100%, rgba(201,168,76,0.03) 0%, transparent 70%)', pointerEvents:'none' }}/>

      <div style={{ maxWidth:660, margin:'0 auto', padding:'0 48px', textAlign:'center' }}>

        <div style={{ fontFamily:"'Cinzel', serif", fontSize:9, letterSpacing:7, color:'rgba(201,168,76,0.4)', textTransform:'uppercase', marginBottom:12 }}>
          — Get In Touch —
        </div>
        <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'clamp(26px, 4vw, 42px)', fontWeight:700, fontStyle:'italic', color:'#f0e6d0', marginBottom:14 }}>
          Connect With Me
        </h2>
        {/* Ornament */}
        <div style={{ display:'flex', alignItems:'center', gap:12, justifyContent:'center', marginBottom:44 }}>
          <div style={{ width:40, height:1, background:'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }}/>
          <div style={{ width:5, height:5, background:'rgba(201,168,76,0.5)', transform:'rotate(45deg)' }}/>
          <div style={{ width:40, height:1, background:'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }}/>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          <ContactCard
            href={WA_URL} label="WhatsApp" sublabel="Tap to open chat"
            value="+91 88476 51524"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.09-1.34A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" stroke="#c9a84c" strokeWidth="1.4"/>
              <path d="M9 9s.3.8 1.2 1.8S12 12 12 12l.8-.8s.4-.4.8 0l1.2 1.2c.4.4 0 .8 0 .8s-.8 1.2-2.4 0S8 10 8.4 8.6 9 9 9z" fill="#c9a84c" opacity="0.8"/>
            </svg>}
          />
          <ContactCard
            href={INSTA_URL} label="Instagram" sublabel="Tap to visit profile"
            value="@sukrit__001"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#c9a84c" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4.5" stroke="#c9a84c" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="#c9a84c"/>
            </svg>}
          />
        </div>

        {/* Punjab Map + Location */}
        <PunjabMap />

      </div>
    </section>
  )
}
