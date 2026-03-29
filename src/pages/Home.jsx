import { Link } from 'react-router-dom'
import { QUIZ, EXERCISES, THESIS } from '../data/content'
import { THEORY, THEORY_EXTRA }    from '../data/theory'
import { ALL_LABS }                 from '../data/labs_all'

const THEORY_COUNT = THEORY.length + THEORY_EXTRA.length

export default function Home() {
  const stats = [
    { n: THEORY_COUNT,     l: 'Chương lý thuyết', c: 'var(--c)' },
    { n: ALL_LABS.length,  l: 'Labs thực hành',   c: 'var(--g)' },
    { n: QUIZ.length,      l: 'Câu trắc nghiệm',  c: 'var(--p)' },
    { n: EXERCISES.length, l: 'Bài tập',           c: 'var(--y)' },
    { n: THESIS.length,    l: 'Đề tài NCKH',       c: 'var(--o)' },
  ]

  const paths = [
    { to:'/theory',    c:'var(--c)',  n:'01', t:'Lý thuyết',       d:`${THEORY_COUNT} chương — AIoT, DL, FPGA, Industry 4.0, Khởi nghiệp` },
    { to:'/labs',      c:'var(--g)',  n:'02', t:'Lab thực hành',   d:`${ALL_LABS.length} labs — Hello World → Mesh Network → YOLOv8` },
    { to:'/quiz',      c:'var(--p)',  n:'03', t:'Trắc nghiệm',     d:`${QUIZ.length} câu hỏi 8 chủ đề, 3 cấp độ, giải thích chi tiết` },
    { to:'/exercises', c:'var(--y)',  n:'04', t:'Bài tập',         d:`${EXERCISES.length} bài từ LED đến FPGA systolic array` },
    { to:'/thesis',    c:'var(--o)',  n:'05', t:'Đề tài',          d:`${THESIS.length} đề tài từ Easy đến Startup IPO-ready` },
    { to:'/resources', c:'var(--tl)', n:'06', t:'Tài liệu',        d:'Sách, khóa học, tools, dataset, cộng đồng khởi nghiệp' },
  ]

  const levels = [
    { l:'Nhập môn',       c:'var(--g)',  d:'Arduino UNO, GPIO, ADC, UART, cảm biến cơ bản' },
    { l:'IoT Cơ bản',     c:'var(--c)',  d:'ESP32, WiFi, MQTT, OLED, REST API, LoRa' },
    { l:'TinyML',         c:'var(--p)',  d:'TFLite Micro, Edge Impulse, CNN, anomaly detection' },
    { l:'Hệ thống AIoT',  c:'var(--y)',  d:'Node-RED, Grafana, Docker, OTA, multi-node' },
    { l:'FPGA & Advanced',c:'var(--pk)', d:'Verilog, systolic array, LSTM, Digital Twin' },
    { l:'Startup',        c:'var(--o)',  d:'Business model, MVP, funding, go-to-market' },
  ]

  const hotTopics = [
    { tag:'TinyML', c:'var(--p)' },
    { tag:'ESP32-S3', c:'var(--c)' },
    { tag:'YOLOv8n', c:'var(--g)' },
    { tag:'LoRaWAN', c:'var(--y)' },
    { tag:'Federated Learning', c:'var(--o)' },
    { tag:'Digital Twin', c:'var(--tl)' },
    { tag:'ESP-NOW Mesh', c:'var(--c)' },
    { tag:'FPGA Accelerator', c:'var(--pk)' },
    { tag:'Smart Agriculture', c:'var(--g)' },
    { tag:'Industry 4.0', c:'var(--y)' },
    { tag:'OPC-UA', c:'var(--c)' },
    { tag:'Blockchain IoT', c:'var(--o)' },
  ]

  return (
    <div className="fu">
      {/* Hero */}
      <div style={{textAlign:'center', padding:'2rem 0 2.5rem'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'.45rem',background:'rgba(0,212,255,.06)',border:'1px solid rgba(0,212,255,.18)',padding:'.2rem .9rem',borderRadius:999,marginBottom:'1rem'}}>
          <span style={{width:6,height:6,background:'var(--g)',borderRadius:'50%',animation:'pulse 2s infinite',display:'inline-block'}}/>
          <span style={{fontSize:'.68rem',color:'var(--c)',fontFamily:'var(--fm)'}}>Đại học Đà Lạt — Khoa CNTT — 2025</span>
        </div>

        <h1 style={{marginBottom:'.5rem'}}>
          <span className="gt">AIoT EDU</span>
          <br/>
          <span style={{color:'var(--txt2)',fontSize:'.42em',fontWeight:400,lineHeight:1.5}}>Giáo trình AI &amp; IoT toàn diện từ cơ bản đến khởi nghiệp</span>
        </h1>

        <p style={{color:'var(--txt2)',maxWidth:540,margin:'0 auto 1.3rem',fontSize:'.86rem',lineHeight:1.8}}>
          Arduino, ESP32, FPGA, TinyML, Edge AI, LoRa, MQTT — thực hành trên phần cứng thực tế.
          Phù hợp xu thế công nghiệp 4.0 và cơ hội khởi nghiệp công nghệ.
        </p>

        <div style={{display:'flex',gap:'.55rem',justifyContent:'center',flexWrap:'wrap'}}>
          <Link to="/theory"    className="btn btn-p">Bắt đầu học</Link>
          <Link to="/labs"      className="btn btn-o">Thực hành Lab</Link>
          <Link to="/thesis"    className="btn btn-s">Đề tài NCKH</Link>
        </div>
      </div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(90px,1fr))',gap:'.48rem',marginBottom:'2rem'}}>
        {stats.map((s,i) => (
          <div key={i} className="card" style={{padding:'.82rem .5rem',textAlign:'center'}}>
            <div style={{fontSize:'1.5rem',fontWeight:800,color:s.c,fontFamily:'var(--fm)',lineHeight:1,marginBottom:'.2rem'}}>{s.n}</div>
            <div style={{fontSize:'.65rem',color:'var(--txt3)',lineHeight:1.35}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Learning path */}
      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'.6rem',color:'var(--txt3)',fontFamily:'var(--fm)',marginBottom:'.65rem',textTransform:'uppercase',letterSpacing:'.08em'}}>Lộ trình học</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(200px,100%),1fr))',gap:'.5rem'}}>
          {paths.map(p => (
            <Link key={p.to} to={p.to} className="card card-a fu" style={{padding:'1rem',textDecoration:'none',borderColor:`${p.c}1a`}}>
              <div style={{fontSize:'.6rem',color:p.c,fontFamily:'var(--fm)',fontWeight:700,marginBottom:'.2rem'}}>{p.n}</div>
              <div style={{fontWeight:700,fontSize:'.86rem',color:'var(--txt)',marginBottom:'.2rem'}}>{p.t}</div>
              <div style={{fontSize:'.74rem',color:'var(--txt3)',lineHeight:1.5}}>{p.d}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hot topics */}
      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'.6rem',color:'var(--txt3)',fontFamily:'var(--fm)',marginBottom:'.65rem',textTransform:'uppercase',letterSpacing:'.08em'}}>Chủ đề nổi bật 2026</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'.38rem'}}>
          {hotTopics.map((t,i) => (
            <span key={i} style={{padding:'.22rem .65rem',borderRadius:999,background:`${t.c}0d`,border:`1px solid ${t.c}28`,color:t.c,fontSize:'.74rem',fontFamily:'var(--fm)',fontWeight:600}}>{t.tag}</span>
          ))}
        </div>
      </div>

      {/* Level overview */}
      <div>
        <div style={{fontSize:'.6rem',color:'var(--txt3)',fontFamily:'var(--fm)',marginBottom:'.65rem',textTransform:'uppercase',letterSpacing:'.08em'}}>Cấp độ nội dung</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(195px,100%),1fr))',gap:'.48rem'}}>
          {levels.map((l,i) => (
            <div key={i} className="card" style={{padding:'.85rem 1rem',borderLeft:`3px solid ${l.c}`,borderColor:`${l.c}14`,borderLeftColor:l.c}}>
              <div style={{fontWeight:700,fontSize:'.83rem',color:l.c,marginBottom:'.2rem'}}>{l.l}</div>
              <div style={{fontSize:'.74rem',color:'var(--txt3)',lineHeight:1.5}}>{l.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor */}
      <div style={{marginTop:'2rem',padding:'1rem 1.2rem',background:'rgba(0,212,255,.025)',border:'1px solid rgba(0,212,255,.12)',borderRadius:10,display:'flex',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}>
        <div style={{width:40,height:40,borderRadius:9,background:'linear-gradient(135deg,var(--c),var(--g))',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:'1rem',color:'#000',flexShrink:0,fontFamily:'var(--fm)'}}>PT</div>
        <div style={{flex:1}}>
          <div style={{fontWeight:700,fontSize:'.86rem',color:'var(--txt)'}}>GV. Trần Vĩnh Phúc</div>
          <div style={{fontSize:'.74rem',color:'var(--txt3)'}}>Khoa CNTT — Đại học Đà Lạt</div>
        </div>
        <a href="mailto:phuctv@dlu.edu.vn" className="btn btn-o" style={{fontSize:'.78rem'}}>phuctv@dlu.edu.vn</a>
      </div>
    </div>
  )
}
