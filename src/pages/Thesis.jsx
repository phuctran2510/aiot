import { useState } from 'react'
import { THESIS } from '../data/content'

const LEVELS = { easy:'Cơ Bản', medium:'Trung Bình', hard:'Khó', advanced:'Nâng Cao', startup:'Khởi Nghiệp' }
const LC = { easy:'var(--g)', medium:'var(--c)', hard:'var(--y)', advanced:'var(--p)', startup:'var(--o)' }

export default function Thesis() {
  const [lv, setLv]   = useState('all')
  const [sel, setSel] = useState(null)
  const [tab, setTab] = useState('overview')

  const list = lv === 'all' ? THESIS : THESIS.filter(t => t.level === lv)

  if (sel) {
    const t = THESIS.find(x => x.id === sel)
    return (
      <div className="fu">
        <button className="btn btn-s" style={{marginBottom:'1.1rem'}} onClick={() => { setSel(null); setTab('overview') }}>Danh sach de tai</button>

        <div className="card" style={{padding:'1.2rem',borderColor:`${t.color}28`,background:`${t.color}04`,marginBottom:'1.1rem'}}>
          <div style={{display:'flex',gap:'.45rem',flexWrap:'wrap',marginBottom:'.55rem',alignItems:'center'}}>
            <span className="badge" style={{background:`${LC[t.level]||t.color}12`,color:LC[t.level]||t.color,border:`1px solid ${LC[t.level]||t.color}28`}}>{LEVELS[t.level]||t.level}</span>
            <span style={{fontSize:'.74rem',color:'var(--txt3)'}}>Thoi gian: {t.dur}</span>
            <span style={{fontSize:'.74rem',color:'var(--txt3)'}}>Nhom: {t.team}</span>
          </div>
          <h2 style={{fontWeight:800,fontSize:'1.08rem',marginBottom:'.22rem'}}>{t.title}</h2>
          <p style={{fontSize:'.79rem',color:t.color,fontFamily:'var(--fm)',marginBottom:'.55rem'}}>{t.sub}</p>
          <p style={{fontSize:'.86rem',color:'var(--txt2)',lineHeight:1.65}}>{t.overview}</p>
        </div>

        <div className="tabs">
          {[['overview','Tong quan'],['scope','Pham vi'],['deploy','Ke hoach'],['result','Ket qua'],['tech','Cong nghe']].map(([k,l]) => (
            <button key={k} className={`tab${tab===k?' on':''}`} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>

        <div className="card" style={{padding:'1.1rem'}}>
          {tab==='overview' && <p style={{color:'var(--txt2)',fontSize:'.87rem',lineHeight:1.7}}>{t.overview}</p>}
          {tab==='scope'    && <ul className="ul">{t.scope.map((s,i)=><li key={i}>{s}</li>)}</ul>}
          {tab==='deploy'   && <ul className="ul">{t.deploy.map((d,i)=><li key={i}>{d}</li>)}</ul>}
          {tab==='result'   && <ul className="ul">{t.result.map((r,i)=><li key={i}>{r}</li>)}</ul>}
          {tab==='tech'     && <div style={{display:'flex',flexWrap:'wrap',gap:'.32rem'}}>{t.tech.map(tg=><span key={tg} className="tag">{tg}</span>)}</div>}
        </div>
      </div>
    )
  }

  return (
    <div className="fu">
      <div className="page-hdr">
        <h1><span className="gt">Đề tài NCKH</span></h1>
        <p>{THESIS.length} ĐỀ tài từ cơ bản đến nâng cao và khởi nghiệp dành cho SV</p>
      </div>

      <div className="tabs" style={{marginBottom:'1rem'}}>
        <button className={`tab${lv==='all'?' on':''}`} onClick={()=>setLv('all')}>Tất Cả({THESIS.length})</button>
        {Object.entries(LEVELS).map(([k,l]) => (
          <button key={k} className={`tab${lv===k?' on':''}`} onClick={()=>setLv(k)}
            style={lv===k?{color:LC[k]||'var(--c)',borderBottomColor:LC[k]||'var(--c)'}:{}}>
            {l} ({THESIS.filter(t=>t.level===k).length})
          </button>
        ))}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(270px,100%),1fr))',gap:'.7rem'}}>
        {list.map(t => (
          <div key={t.id} className="card card-a" onClick={()=>{setSel(t.id);setTab('overview')}}
            style={{padding:'1.05rem',borderColor:`${t.color}18`}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'.45rem',gap:'.35rem',flexWrap:'wrap'}}>
              <span className="badge" style={{fontSize:'.6rem',background:`${LC[t.level]||t.color}0e`,color:LC[t.level]||t.color,border:`1px solid ${LC[t.level]||t.color}22`}}>
                {LEVELS[t.level]||t.level}
              </span>
              <span style={{fontSize:'.7rem',color:'var(--txt3)'}}>{t.dur}</span>
            </div>
            <h3 style={{fontWeight:700,fontSize:'.87rem',color:'var(--txt)',marginBottom:'.24rem',lineHeight:1.35}}>{t.title}</h3>
            <p style={{fontSize:'.73rem',color:t.color,fontFamily:'var(--fm)',marginBottom:'.4rem'}}>{t.sub}</p>
            <p style={{fontSize:'.79rem',color:'var(--txt3)',lineHeight:1.5,marginBottom:'.65rem'}}>{t.overview.slice(0,105)}...</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'.25rem'}}>{t.tech.slice(0,4).map(tg=><span key={tg} className="tag">{tg}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
