import { Link } from 'react-router-dom'
import { QUIZ } from '../data/quiz'
import { EXERCISES } from '../data/exercises'
import { THESIS } from '../data/thesis'
import { THEORY } from '../data/theory'
import { LABS } from '../data/labs'

const LABS_COUNT = LABS?.length ?? 10

export default function Home() {
  const stats = [
    { n: THEORY.length,    l: 'Chương lý thuyết', c: 'var(--c)' },
    { n: LABS_COUNT,       l: 'Labs thực hành',   c: 'var(--g)' },
    { n: QUIZ.length,      l: 'Câu trắc nghiệm',  c: 'var(--p)' },
    { n: EXERCISES.length, l: 'Bài tập',           c: 'var(--y)' },
    { n: THESIS.length,    l: 'Đề tài NCKH',       c: 'var(--o)' },
  ]

  const paths = [
    { to:'/theory',    c:'var(--c)',  n:'01', t:'Lý thuyết',     d:'7 chương từ nền tảng AIoT đến FPGA và khởi nghiệp' },
    { to:'/labs',      c:'var(--g)',  n:'02', t:'Lab thực hành', d:`${LABS_COUNT} labs step-by-step với code copy-paste` },
    { to:'/quiz',      c:'var(--p)',  n:'03', t:'Trắc nghiệm',   d:`${QUIZ.length} câu hỏi 6 chủ đề, có giải thích chi tiết` },
    { to:'/exercises', c:'var(--y)',  n:'04', t:'Bài tập',       d:`${EXERCISES.length} bài từ cơ bản đến khởi nghiệp` },
    { to:'/thesis',    c:'var(--o)',  n:'05', t:'Đề tài',        d:`${THESIS.length} đề tài từ easy đến startup` },
    { to:'/resources', c:'var(--tl)', n:'06', t:'Tài liệu',      d:'Sách, khóa học, tools, dataset, cộng đồng' },
  ]

  const levels = [
    { l:'Cơ bản',     c:'var(--g)', d:'Arduino, ESP32 Hello World, cảm biến đơn giản' },
    { l:'Trung cấp',  c:'var(--c)', d:'WiFi, MQTT, LoRa, OLED, REST API' },
    { l:'TinyML',     c:'var(--p)', d:'Edge Impulse, TFLite Micro, speech AI' },
    { l:'Hệ thống',   c:'var(--y)', d:'Node-RED, Grafana, Smart Home, Industrial' },
    { l:'FPGA',       c:'var(--pk)',d:'Verilog, systolic array, CNN accelerator' },
    { l:'Khởi nghiệp',c:'var(--o)', d:'Business plan, MVP, startup pitch' },
  ]

  return (
    <div className="fu">
      {/* Hero */}
      <div style={{textAlign:'center', padding:'2.2rem 0 2.5rem'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'.45rem',background:'rgba(0,212,255,.07)',border:'1px solid rgba(0,212,255,.18)',padding:'.22rem .9rem',borderRadius:999,marginBottom:'1rem'}}>
          <span style={{width:6,height:6,background:'var(--g)',borderRadius:'50%',animation:'pulse 2s infinite',display:'inline-block'}}/>
          <span style={{fontSize:'.68rem',color:'var(--c)',fontFamily:'var(--fm)'}}>Đại học Đà Lạt — Khoa CNTT — 2025</span>
        </div>
        <h1 style={{marginBottom:'.55rem'}}>
          <span className="gt">AIoT EDU</span>
          <br/>
          <span style={{color:'var(--txt2)',fontSize:'.42em',fontWeight:400}}>Trí tuệ Nhân tạo &amp; Internet vạn vật</span>
        </h1>
        <p style={{color:'var(--txt2)',maxWidth:520,margin:'0 auto 1.3rem',fontSize:'.87rem',lineHeight:1.75}}>
          Giáo trình toàn diện từ Arduino cơ bản đến Edge AI, FPGA và khởi nghiệp công nghệ —
          thực hành trên phần cứng thực tế, phù hợp xu thế công nghiệp 4.0.
        </p>
        <div style={{display:'flex',gap:'.6rem',justifyContent:'center',flexWrap:'wrap'}}>
          <Link to="/theory"    className="btn btn-p">Bắt đầu học</Link>
          <Link to="/labs"      className="btn btn-o">Thực hành Lab</Link>
          <Link to="/thesis"    className="btn btn-s">Đề tài NCKH</Link>
        </div>
      </div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(90px,1fr))',gap:'.5rem',marginBottom:'2rem'}}>
        {stats.map((s,i) => (
          <div key={i} className="card" style={{padding:'.8rem .5rem',textAlign:'center'}}>
            <div style={{fontSize:'1.45rem',fontWeight:800,color:s.c,fontFamily:'var(--fm)',lineHeight:1,marginBottom:'.18rem'}}>{s.n}</div>
            <div style={{fontSize:'.67rem',color:'var(--txt3)'}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Learning path */}
      <div style={{marginBottom:'2rem'}}>
        <div style={{fontSize:'.62rem',color:'var(--txt3)',fontFamily:'var(--fm)',marginBottom:'.7rem',textTransform:'uppercase',letterSpacing:'.08em'}}>Lộ trình học</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(210px,100%),1fr))',gap:'.55rem'}}>
          {paths.map(p => (
            <Link key={p.to} to={p.to} className="card card-a fu" style={{padding:'1rem',textDecoration:'none',borderColor:`${p.c}22`}}>
              <div style={{fontSize:'.62rem',color:p.c,fontFamily:'var(--fm)',fontWeight:700,marginBottom:'.22rem'}}>{p.n}</div>
              <div style={{fontWeight:700,fontSize:'.87rem',color:'var(--txt)',marginBottom:'.22rem'}}>{p.t}</div>
              <div style={{fontSize:'.76rem',color:'var(--txt3)',lineHeight:1.5}}>{p.d}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Level overview */}
      <div>
        <div style={{fontSize:'.62rem',color:'var(--txt3)',fontFamily:'var(--fm)',marginBottom:'.7rem',textTransform:'uppercase',letterSpacing:'.08em'}}>Cấp độ nội dung</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(200px,100%),1fr))',gap:'.5rem'}}>
          {levels.map((l,i) => (
            <div key={i} className="card" style={{padding:'.88rem 1rem',borderLeft:`3px solid ${l.c}`,borderLeftColor:l.c,borderColor:`${l.c}18`}}>
              <div style={{fontWeight:700,fontSize:'.84rem',color:l.c,marginBottom:'.22rem'}}>{l.l}</div>
              <div style={{fontSize:'.76rem',color:'var(--txt3)',lineHeight:1.5}}>{l.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
