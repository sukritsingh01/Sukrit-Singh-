import { useEffect, useRef, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Landing Pages',
    desc: 'High-converting, visually stunning landing pages that capture attention and drive action for your business or product.',
    tags: ['React', 'Vite', 'CSS'],
    icon: '◈'
  },
  {
    number: '02',
    title: 'Business Websites',
    desc: 'Professional multi-page websites that establish your brand online with clean design and seamless user experience.',
    tags: ['HTML/CSS', 'JS', 'Responsive'],
    icon: '◉'
  },
  {
    number: '03',
    title: 'Portfolio Sites',
    desc: 'Creative portfolio websites that showcase your work beautifully and make a lasting impression on potential clients.',
    tags: ['React', 'Animation', 'UX'],
    icon: '◍'
  },
  {
    number: '04',
    title: 'UI/UX Design',
    desc: 'Thoughtful interface design with user experience at its core — wireframes, prototypes, and final pixel-perfect designs.',
    tags: ['Design', 'Figma', 'Prototype'],
    icon: '◎'
  },
  {
    number: '05',
    title: 'E-Commerce',
    desc: 'Complete online store setups with product pages, cart functionality, and smooth checkout experiences for your customers.',
    tags: ['Shopify', 'React', 'Payment'],
    icon: '◇'
  },
  {
    number: '06',
    title: 'Web Maintenance',
    desc: 'Ongoing support, updates, performance optimization and bug fixes to keep your website running at its best.',
    tags: ['Support', 'SEO', 'Speed'],
    icon: '◆'
  }
]

export default function Services() {
  const [hovered, setHovered] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.animation = `fadeUp 0.6s ease ${i * 0.1}s forwards`
            })
          }
        })
      }, { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} style={{
      padding: '120px 0', background: '#050505', position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', top: '40px', right: '48px',
        fontFamily: "'Playfair Display', serif",
        fontSize: '180px', fontWeight: 900,
        color: 'rgba(201,168,76,0.03)', userSelect: 'none', lineHeight: 1
      }}>02</div>

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 48px' }}>
        <div className="reveal" style={{ opacity: 0, marginBottom: '80px' }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px', letterSpacing: '5px',
            color: '#c9a84c', textTransform: 'uppercase',
            marginBottom: '16px',
            display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            <span style={{ display: 'block', width: '30px', height: '1px', background: '#c9a84c' }} />
            What I Do
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 900, color: '#f5f0e8',
            lineHeight: 1.1, letterSpacing: '-1px'
          }}>Services That<br /><em style={{ color: '#c9a84c', fontStyle: 'italic' }}>Deliver Results</em></h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
          background: 'rgba(201,168,76,0.08)'
        }}>
          {services.map((service, i) => (
            <div key={service.number} className="reveal" style={{
              opacity: 0, padding: '48px 40px',
              background: hovered === i ? 'rgba(201,168,76,0.04)' : '#050505',
              transition: 'background 0.4s ease, transform 0.3s ease',
              cursor: 'default', position: 'relative', overflow: 'hidden'
            }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
                transform: hovered === i ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.4s ease'
              }} />

              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '40px', color: hovered === i ? '#c9a84c' : 'rgba(201,168,76,0.3)',
                marginBottom: '24px', transition: 'color 0.3s'
              }}>{service.icon}</div>

              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px', letterSpacing: '3px',
                color: 'rgba(201,168,76,0.4)', marginBottom: '12px'
              }}>{service.number}</div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '22px', fontWeight: 700,
                color: '#f5f0e8', marginBottom: '16px', lineHeight: 1.2
              }}>{service.title}</h3>

              <p style={{
                color: 'rgba(245,240,232,0.5)', fontSize: '14px',
                lineHeight: 1.8, fontWeight: 300
              }}>{service.desc}</p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
                {service.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '9px', letterSpacing: '2px',
                    color: '#c9a84c', textTransform: 'uppercase',
                    border: '1px solid rgba(201,168,76,0.2)',
                    padding: '4px 10px'
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1200px) {
          #services > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
