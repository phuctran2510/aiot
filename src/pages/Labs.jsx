import { useState } from 'react'
import { ALL_LABS as LABS, ALL_LAB_GROUPS as LAB_GROUPS } from '../data/labs_all'

function CopyBtn({ code }) {
  const [ok, setOk] = useState(false)
  return (
    <button className={`cpbtn${ok ? ' ok' : ''}`}
      onClick={() => { navigator.clipboard?.writeText(code); setOk(true); setTimeout(() => setOk(false), 1800) }}>
      {ok ? 'copied' : 'copy'}
    </button>
  )
}

const diffLabel = d => d === 'easy' ? 'Cơ bàn' : d === 'medium' ? 'Trung cấp' : 'Nâng cao'
const diffColor = d => d === 'easy' ? 'var(--g)' : d === 'medium' ? 'var(--c)' : 'var(--p)'

// ─── LabDetail — OUTSIDE main component ───────────────────────────────────
function LabDetail({ lab, done, setDone, onBack }) {
  const [step, setStep] = useState(0)
  const [tab,  setTab]  = useState('steps')
  if (!lab) return null

  return (
    <div>
      {/* Top bar */}
      <div style={{ display:'flex', gap:'.5rem', marginBottom:'1rem', flexWrap:'wrap', alignItems:'center' }}>
        <button className="btn btn-s" onClick={onBack}>← Quay lại</button>
        <span className="badge" style={{ background:`${diffColor(lab.diff)}12`, color:diffColor(lab.diff), border:`1px solid ${diffColor(lab.diff)}28` }}>
          {diffLabel(lab.diff)}
        </span>
        <span style={{ fontSize:'.75rem', color:'var(--txt3)' }}>{lab.time}</span>
        <span style={{ fontSize:'.75rem', color:'var(--txt3)' }}>{lab.hw}</span>
      </div>

      {/* Info card */}
      <div className="card" style={{ padding:'1.1rem', marginBottom:'.9rem', background:`${lab.groupColor}06`, borderColor:`${lab.groupColor}25` }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'.5rem', flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:'.6rem', color:lab.groupColor, fontFamily:'var(--fm)', fontWeight:700, marginBottom:'.12rem', textTransform:'uppercase' }}>
              {lab.group}
            </div>
            <h2 style={{ fontWeight:800, fontSize:'1.05rem', marginBottom:'.3rem', lineHeight:1.3, color:'var(--txt)' }}>
              {lab.title}
            </h2>
            <p style={{ fontSize:'.83rem', color:'var(--txt2)', lineHeight:1.55 }}>{lab.obj}</p>
          </div>
          <button
            className={`btn ${done[lab.id] ? 'btn-s' : 'btn-p'}`}
            style={{ flexShrink:0, marginTop:'.2rem' }}
            onClick={() => setDone(p => ({ ...p, [lab.id]: !p[lab.id] }))}>
            {done[lab.id] ? 'Da xong' : 'Mark done'}
          </button>
        </div>
        {/* Progress */}
        <div style={{ marginTop:'.8rem' }}>
          <div style={{ display:'flex', justifyContent:'space-between', fontSize:'.67rem', color:'var(--txt3)', marginBottom:'.22rem' }}>
            <span>Buoc {step+1} / {lab.steps.length}</span>
            <span>{Math.round((step+1)/lab.steps.length*100)}%</span>
          </div>
          <div className="prog"><div className="prog-f" style={{ width:`${(step+1)/lab.steps.length*100}%` }}/></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {[['steps','Các bước'],['theory','Lý thuyết'],['verify','Kiểm tra']].map(([k,l]) => (
          <button key={k} className={`tab${tab===k?' on':''}`} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {/* Steps tab */}
      {tab === 'steps' && (
        <div>
          {lab.steps.map((s, idx) => (
            <div key={idx} onClick={() => setStep(idx)} className="card"
              style={{
                padding:'.85rem 1rem', marginBottom:'.45rem', cursor:'pointer',
                borderColor: idx===step ? lab.groupColor : idx<step ? 'rgba(0,230,118,.3)' : 'var(--brd)',
                background:  idx===step ? `${lab.groupColor}07` : idx<step ? 'rgba(0,230,118,.025)' : 'var(--sur)',
              }}>
              <div style={{ display:'flex', gap:'.65rem', alignItems:'flex-start' }}>
                <div style={{
                  width:24, height:24, borderRadius:'50%', flexShrink:0,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'.67rem', fontFamily:'var(--fm)', fontWeight:700,
                  background: idx<step ? 'var(--g)' : idx===step ? lab.groupColor : 'var(--sur2)',
                  color: idx<=step ? '#000' : 'var(--txt3)',
                }}>
                  {idx < step ? 'v' : idx+1}
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontWeight:600, fontSize:'.87rem', color:idx===step?'var(--txt)':'var(--txt2)', marginBottom:idx===step?'.4rem':0 }}>
                    {s.t}
                  </div>
                  {idx === step && (
                    <>
                      {s.info && <p style={{ color:'var(--txt3)', fontSize:'.82rem', marginBottom:'.4rem', lineHeight:1.55 }}>{s.info}</p>}
                      <div style={{ position:'relative' }}>
                        <pre data-lang={s.lang||'cpp'}><code style={{ color:'#b8d4e8' }}>{s.code}</code></pre>
                        <CopyBtn code={s.code}/>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {lab.expect && <div className="alert as" style={{ marginTop:'.6rem', fontSize:'.83rem' }}><strong>Kết quả:</strong> {lab.expect}</div>}
          {lab.tips?.length > 0 && (
            <div className="alert aw" style={{ marginTop:'.5rem', fontSize:'.82rem' }}>
              <strong>Tips:</strong>
              <ul className="ul" style={{ marginTop:'.3rem' }}>{lab.tips.map((t,i) => <li key={i}>{t}</li>)}</ul>
            </div>
          )}

          <div style={{ display:'flex', gap:'.5rem', marginTop:'.8rem', flexWrap:'wrap' }}>
            <button className="btn btn-s" disabled={step===0} onClick={e => { e.stopPropagation(); setStep(s=>s-1) }}>Bước trước</button>
            <button className="btn btn-o" disabled={step===lab.steps.length-1} onClick={e => { e.stopPropagation(); setStep(s=>s+1) }}>Bước tiếp</button>
            {step === lab.steps.length-1 && (
              <button className="btn btn-p" onClick={() => { setDone(p=>({...p,[lab.id]:true})); setTab('verify') }}>
                Hoàn thành
              </button>
            )}
          </div>
        </div>
      )}

      {/* Theory tab */}
      {tab === 'theory' && (
        <div className="card" style={{ padding:'1.2rem' }}>
          <div className="alert ai" style={{ fontSize:'.85rem', lineHeight:1.65 }}>
            <strong>Lý thuyết:</strong> {lab.theory}
          </div>
        </div>
      )}

      {/* Verify tab */}
      {tab === 'verify' && (
        <div>
          <div className="card" style={{ padding:'1.1rem', marginBottom:'.75rem' }}>
            <div style={{ fontWeight:700, color:'var(--c)', marginBottom:'1rem' }}>Câu hỏi kiểm tra</div>
            {lab.verify?.map((v,i) => (
              <div key={i} style={{ background:'var(--bg)', borderRadius:8, padding:'.75rem .9rem', marginBottom:'.5rem', border:'1px solid var(--brd)' }}>
                <div style={{ fontWeight:600, fontSize:'.84rem', color:'var(--txt)', marginBottom:'.38rem' }}>{i+1}. {v.q}</div>
                <div style={{ position:'relative' }}>
                  <pre><code style={{ color:'#9ab' }}>{v.cmd}</code></pre>
                  <CopyBtn code={v.cmd}/>
                </div>
              </div>
            ))}
          </div>
          {done[lab.id]
            ? <div className="alert as">Xuất sắc ! Đã hoàn thành <strong>{lab.title}</strong></div>
            : <div className="alert aw">Chưa mark done. Quay lại tab Các bước.</div>
          }
        </div>
      )}
    </div>
  )
}

// ─── Lab Card ─────────────────────────────────────────────────────────────
function LabCard({ lab, isSelected, isDone, onClick }) {
  return (
    <div className="card card-a" onClick={onClick}
      style={{ padding:'.95rem 1rem', borderColor:`${lab.groupColor}18`, cursor:'pointer',
        borderLeftColor: isSelected ? lab.groupColor : undefined,
        borderLeftWidth: isSelected ? 3 : 1,
        background: isSelected ? `${lab.groupColor}06` : 'var(--sur)' }}>
      <div style={{ fontSize:'.62rem', color:lab.groupColor, fontFamily:'var(--fm)', fontWeight:700, marginBottom:'.25rem', textTransform:'uppercase' }}>
        {lab.group}
      </div>
      <div style={{ fontWeight:700, fontSize:'.88rem', color:'var(--txt)', marginBottom:'.25rem', lineHeight:1.35 }}>
        {lab.title}
        {isDone && <span style={{ color:'var(--g)', marginLeft:'.4rem', fontSize:'.85rem' }}>✓</span>}
      </div>
      <div style={{ fontSize:'.78rem', color:'var(--txt3)', marginBottom:'.6rem', lineHeight:1.45 }}>{lab.obj}</div>
      <div style={{ display:'flex', gap:'.3rem', flexWrap:'wrap', alignItems:'center' }}>
        <span style={{ fontSize:'.68rem', color:diffColor(lab.diff), fontWeight:600 }}>{diffLabel(lab.diff)}</span>
        <span style={{ fontSize:'.68rem', color:'var(--txt3)' }}>| {lab.time}</span>
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────
export default function Labs() {
  const [sel,  setSel]  = useState(null)
  const [done, setDone] = useState({})
  const [grp,  setGrp]  = useState('all')

  if (!LABS || LABS.length === 0) {
    return <div className="page-hdr"><h1>Labs chưa có dữ liệu</h1></div>
  }

  const list   = grp === 'all' ? LABS : LABS.filter(l => l.group === grp)
  const total  = Object.values(done).filter(Boolean).length
  const openLab = l => { setSel(l); window.scrollTo(0, 0) }
  const backToList = () => setSel(null)

  // ── Khi đang xem detail: full width (cả mobile lẫn desktop) ──
  if (sel) {
    return (
      <div className="fu">
        <LabDetail lab={sel} done={done} setDone={setDone} onBack={backToList}/>
      </div>
    )
  }

  // ── Khi chưa chọn lab: hiện danh sách ──
  return (
    <div className="fu">
      {/* Header */}
      <div className="page-hdr">
        <h1><span className="gt">Lab thực hành</span></h1>
        <p>{LABS.length} labs — {total}/{LABS.length} Hoàn thành</p>
      </div>

      {/* Group filter */}
      <div className="tabs" style={{ marginBottom:'1.2rem' }}>
        <button className={`tab${grp==='all'?' on':''}`} onClick={() => setGrp('all')}>
          Tat ca ({LABS.length})
        </button>
        {LAB_GROUPS.map(g => (
          <button key={g.id} className={`tab${grp===g.id?' on':''}`}
            onClick={() => setGrp(g.id)}
            style={grp===g.id ? { color:g.color, borderBottomColor:g.color } : {}}>
            {g.id} ({g.count})
          </button>
        ))}
      </div>

      {/* Progress */}
      <div style={{ padding:'.6rem .9rem', background:'rgba(0,212,255,.04)', border:'1px solid rgba(0,212,255,.12)', borderRadius:8, marginBottom:'1.2rem', display:'flex', alignItems:'center', gap:'.8rem' }}>
        <span style={{ fontSize:'.7rem', color:'var(--txt3)', fontFamily:'var(--fm)', flexShrink:0 }}>TIẾN ĐỘ</span>
        <div className="prog" style={{ flex:1 }}><div className="prog-f" style={{ width:`${total/LABS.length*100}%` }}/></div>
        <span style={{ fontSize:'.72rem', color:'var(--c)', fontFamily:'var(--fm)', flexShrink:0 }}>{total}/{LABS.length}</span>
      </div>

      {/* Lab cards grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap:'.75rem' }}>
        {list.map(l => (
          <LabCard key={l.id} lab={l} isSelected={false} isDone={!!done[l.id]} onClick={() => openLab(l)}/>
        ))}
      </div>
    </div>
  )
}
