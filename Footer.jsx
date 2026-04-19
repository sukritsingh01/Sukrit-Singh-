export default function Footer() {
  return (
    <footer style={{
      background:'#0a0806',
      borderTop:'1px solid rgba(201,168,76,0.08)',
      padding:'36px 48px',
      textAlign:'center'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, justifyContent:'center', marginBottom:18 }}>
        <div style={{ flex:1, height:1, background:'linear-gradient(90deg, transparent, rgba(201,168,76,0.15))' }}/>
        <div style={{ width:5, height:5, background:'rgba(201,168,76,0.4)', transform:'rotate(45deg)' }}/>
        <div style={{ flex:1, height:1, background:'linear-gradient(90deg, rgba(201,168,76,0.15), transparent)' }}/>
      </div>

      <div style={{
        fontFamily:"'Playfair Display', serif",
        fontSize:20, fontStyle:'italic', fontWeight:700,
        color:'rgba(201,168,76,0.5)', letterSpacing:2, marginBottom:8
      }}>Sukrit Singh</div>

      <div style={{
        fontFamily:"'Cinzel', serif",
        fontSize:8, letterSpacing:4,
        color:'rgba(201,168,76,0.2)', textTransform:'uppercase'
      }}>Jalandhar · Punjab · {new Date().getFullYear()}</div>
    </footer>
  )
}
