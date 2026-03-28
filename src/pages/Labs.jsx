import { useState } from 'react'
import { LABS, LAB_GROUPS } from '../data/labs'

function CopyBtn({ code }) {
  const [ok, setOk] = useState(false)
  return <button className={`cpbtn${ok?' ok':''}`} onClick={() => { navigator.clipboard?.writeText(code); setOk(true); setTimeout(() => setOk(false),1800) }}>{ok?'copied':'copy'}</button>
}

export default function Labs() {
  const [sel, setSel]     = useState(null)
  const [done, setDone]   = useState({})
  const [grp, setGrp]     = useState('all')
  const [step, setStep]   = useState(0)
  const [tab, setTab]     = useState('steps')
  const [mobView, setMob] = useState('list')

  if (!LABS || LABS.length === 0) return <div className="page-hdr"><h1>Labs chưa có dữ liệu</h1></div>

  const list = grp === 'all' ? LABS : LABS.filter(l => l.group === grp)
  const total = Object.values(done).filter(Boolean).length
  const open = l => { setSel(l); setStep(0); setTab('steps'); setMob('detail'); window.scrollTo(0,0) }
  const back = () => { setMob('list'); setSel(null) }

  const diffLabel = d => d==='easy'?'Cơ bản':d==='medium'?'Trung cấp':'Nâng cao'
  const diffColor = d => d==='easy'?'var(--g)':d==='medium'?'var(--c)':'var(--p)'

  function LabDetail({ lab }) {
    return (
      <div>
        <div style={{display:'flex',gap:'.5rem',marginBottom:'.9rem',flexWrap:'wrap',alignItems:'center'}}>
          <button className="btn btn-s" onClick={back}>Quay lai</button>
          <span className="badge" style={{background:`${diffColor(lab.diff)}12`,color:diffColor(lab.diff),border:`1px solid ${diffColor(lab.diff)}28`}}>{diffLabel(lab.diff)}</span>
          <span style={{fontSize:'.75rem',color:'var(--txt3)'}}>Thoi gian: {lab.time}</span>
          <span style={{fontSize:'.75rem',color:'var(--txt3)'}}>Phan cung: {lab.hw}</span>
        </div>

        <div className="card" style={{padding:'1.05rem',marginBottom:'.8rem',background:`${lab.groupColor}06`,borderColor:`${lab.groupColor}22`}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'.5rem',flexWrap:'wrap'}}>
            <div style={{flex:1}}>
              <div style={{fontSize:'.6rem',color:lab.groupColor,fontFamily:'var(--fm)',fontWeight:700,marginBottom:'.15rem'}}>{lab.group}</div>
              <h2 style={{fontWeight:800,fontSize:'1rem',marginBottom:'.28rem'}}>{lab.title}</h2>
              <p style={{fontSize:'.83rem',color:'var(--txt3)',lineHeight:1.55}}>{lab.obj}</p>
            </div>
            <button className={`btn ${done[lab.id]?'btn-s':'btn-p'}`} onClick={() => setDone(p=>({...p,[lab.id]:!p[lab.id]}))}>
              {done[lab.id]?'Hoan thanh':'Mark done'}
            </button>
          </div>
          <div style={{marginTop:'.7rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'.67rem',color:'var(--txt3)',marginBottom:'.2rem'}}>
              <span>Buoc {step+1}/{lab.steps.length}</span>
              <span>{Math.round((step+1)/lab.steps.length*100)}%</span>
            </div>
            <div className="prog"><div className="prog-f" style={{width:`${(step+1)/lab.steps.length*100}%`}}/></div>
          </div>
        </div>

        <div className="tabs">
          {[['steps','Cac buoc'],['theory','Ly thuyet'],['verify','Kiem tra']].map(([k,l]) => (
            <button key={k} className={`tab${tab===k?' on':''}`} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>

        {tab === 'steps' && (
          <div>
            {lab.steps.map((s, idx) => (
              <div key={idx} className="card" onClick={() => setStep(idx)}
                style={{padding:'.82rem 1rem',marginBottom:'.45rem',cursor:'pointer',transition:'all .13s',
                  borderColor:idx===step?lab.groupColor:idx<step?'rgba(0,230,118,.28)':'var(--brd)',
                  background:idx===step?`${lab.groupColor}07`:idx<step?'rgba(0,230,118,.025)':'var(--sur)'}}>
                <div style={{display:'flex',gap:'.6rem',alignItems:'flex-start'}}>
                  <div style={{width:23,height:23,borderRadius:'50%',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.67rem',fontFamily:'var(--fm)',fontWeight:700,background:idx<step?'var(--g)':idx===step?lab.groupColor:'var(--sur2)',color:idx<=step?'#000':'var(--txt3)'}}>
                    {idx < step ? 'v' : idx+1}
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:600,fontSize:'.86rem',color:idx===step?'var(--txt)':'var(--txt2)',marginBottom:idx===step?'.38rem':0}}>{s.t}</div>
                    {idx === step && <>
                      {s.info && <p style={{color:'var(--txt3)',fontSize:'.81rem',marginBottom:'.38rem',lineHeight:1.55}}>{s.info}</p>}
                      <div style={{position:'relative'}}>
                        <pre data-lang={s.lang||'cpp'}><code style={{color:'#b8d4e8'}}>{s.code}</code></pre>
                        <CopyBtn code={s.code}/>
                      </div>
                    </>}
                  </div>
                </div>
              </div>
            ))}

            <div className="alert as" style={{marginTop:'.5rem',fontSize:'.82rem'}}><strong>Ket qua:</strong> {lab.expect}</div>
            {lab.tips?.length > 0 && (
              <div className="alert aw" style={{marginTop:'.45rem',fontSize:'.81rem'}}>
                <strong>Tips:</strong>
                <ul className="ul" style={{marginTop:'.3rem'}}>{lab.tips.map((t,i) => <li key={i}>{t}</li>)}</ul>
              </div>
            )}

            <div style={{display:'flex',gap:'.5rem',marginTop:'.7rem',flexWrap:'wrap'}}>
              <button className="btn btn-s" disabled={step===0} onClick={() => { setStep(s => s-1); }}>Buoc truoc</button>
              <button className="btn btn-o" disabled={step===lab.steps.length-1} onClick={() => { setStep(s => s+1); }}>Buoc tiep</button>
              {step === lab.steps.length-1 && (
                <button className="btn btn-p" onClick={() => { setDone(p=>({...p,[lab.id]:true})); setTab('verify') }}>Xong - Kiem tra</button>
              )}
            </div>
          </div>
        )}

        {tab === 'theory' && (
          <div className="card" style={{padding:'1.1rem'}}>
            <div className="alert ai"><strong>Ly thuyet:</strong> {lab.theory}</div>
          </div>
        )}

        {tab === 'verify' && (
          <div>
            <div className="card" style={{padding:'1.1rem',marginBottom:'.7rem'}}>
              <div style={{fontWeight:700,color:'var(--c)',marginBottom:'.9rem',fontSize:'.88rem'}}>Cau hoi kiem tra</div>
              {lab.verify?.map((v,i) => (
                <div key={i} style={{background:'var(--bg)',borderRadius:8,padding:'.7rem .9rem',marginBottom:'.5rem',border:'1px solid var(--brd)'}}>
                  <div style={{fontWeight:600,fontSize:'.83rem',color:'var(--txt)',marginBottom:'.35rem'}}>{i+1}. {v.q}</div>
                  <div style={{position:'relative'}}>
                    <pre><code style={{color:'#9ab'}}>{v.cmd}</code></pre>
                    <CopyBtn code={v.cmd}/>
                  </div>
                </div>
              ))}
            </div>
            {done[lab.id]
              ? <div className="alert as">Hoan thanh {lab.title}! Tiep tuc lab ke tiep.</div>
              : <div className="alert aw">Chua mark done — quay lai tab Cac buoc.</div>}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="fu">
      <div className="page-hdr"><h1><span className="gt">Lab thuc hanh</span></h1><p>{LABS.length} labs — {total}/{LABS.length} hoan thanh</p></div>

      <div className="tabs" style={{marginBottom:'1rem'}}>
        <button className={`tab${grp==='all'?' on':''}`} onClick={() => setGrp('all')}>Tat ca ({LABS.length})</button>
        {LAB_GROUPS.map(g => (
          <button key={g.id} className={`tab${grp===g.id?' on':''}`} onClick={() => setGrp(g.id)}
            style={grp===g.id?{color:g.color,borderBottomColor:g.color}:{}}>{g.id} ({g.count})</button>
        ))}
      </div>

      {/* Mobile: show detail view */}
      {mobView === 'detail' && sel && <div className="mob"><LabDetail lab={sel}/></div>}

      {/* Mobile: grid cards */}
      {mobView === 'list' && (
        <div className="mob" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.45rem'}}>
          {list.map(l => (
            <div key={l.id} className="card card-a" onClick={() => open(l)} style={{padding:'.8rem',borderColor:`${l.groupColor}1a`}}>
              <div style={{fontSize:'.6rem',color:l.groupColor,fontFamily:'var(--fm)',fontWeight:700,marginBottom:'.18rem'}}>{l.group}</div>
              <div style={{fontWeight:600,fontSize:'.8rem',color:'var(--txt)',marginBottom:'.2rem',lineHeight:1.3}}>{l.title.split(':')[0]}</div>
              <span className="badge" style={{fontSize:'.58rem',background:`${diffColor(l.diff)}0e`,color:diffColor(l.diff),border:'none'}}>{diffLabel(l.diff)}</span>
              {done[l.id] && <span style={{color:'var(--g)',fontSize:'.75rem',marginLeft:'.3rem'}}>v</span>}
            </div>
          ))}
        </div>
      )}

      {/* Desktop: 2-col */}
      <div className="desk" style={{display:'grid',gridTemplateColumns:'210px 1fr',gap:'1.1rem',alignItems:'start'}}>
        <div style={{position:'sticky',top:'1rem'}}>
          <div style={{padding:'.55rem .7rem',background:'rgba(0,212,255,.04)',border:'1px solid rgba(0,212,255,.12)',borderRadius:8,marginBottom:'.55rem'}}>
            <div style={{fontSize:'.63rem',color:'var(--txt3)',fontFamily:'var(--fm)',marginBottom:'.25rem'}}>TIEN DO</div>
            <div style={{display:'flex',alignItems:'center',gap:'.4rem'}}>
              <div className="prog" style={{flex:1}}><div className="prog-f" style={{width:`${total/LABS.length*100}%`}}/></div>
              <span style={{fontSize:'.68rem',color:'var(--c)',fontFamily:'var(--fm)',flexShrink:0}}>{total}/{LABS.length}</span>
            </div>
          </div>
          {list.map(l => (
            <button key={l.id} onClick={() => open(l)}
              style={{display:'flex',flexDirection:'column',gap:'.15rem',width:'100%',padding:'.55rem .65rem',borderRadius:8,marginBottom:3,
                background:sel?.id===l.id?`${l.groupColor}0c`:'var(--sur)',
                border:`1px solid ${sel?.id===l.id?l.groupColor+'35':'var(--brd)'}`,
                cursor:'pointer',textAlign:'left',transition:'all .12s'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontSize:'.8rem',fontWeight:sel?.id===l.id?700:500,color:sel?.id===l.id?l.groupColor:'var(--txt)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',maxWidth:'84%'}}>{l.title}</span>
                {done[l.id] && <span style={{color:'var(--g)',fontSize:'.75rem'}}>v</span>}
              </div>
              <div style={{display:'flex',gap:'.28rem'}}>
                <span style={{fontSize:'.62rem',color:diffColor(l.diff)}}>{diffLabel(l.diff)}</span>
                <span style={{fontSize:'.62rem',color:'var(--txt3)'}}>{l.time}</span>
              </div>
            </button>
          ))}
        </div>

        <div>
          {sel ? <LabDetail lab={sel}/> : (
            <div>
              <div className="card" style={{padding:'1.8rem',textAlign:'center',background:'rgba(0,212,255,.025)',borderColor:'rgba(0,212,255,.12)',marginBottom:'1rem'}}>
                <div style={{fontFamily:'var(--fm)',fontSize:'1.5rem',color:'var(--txt3)',marginBottom:'.6rem'}}>[ ]</div>
                <h2 style={{fontWeight:800,fontSize:'1.05rem',marginBottom:'.42rem'}}>Chon Lab de bat dau</h2>
                <p style={{color:'var(--txt3)',fontSize:'.83rem',maxWidth:380,margin:'0 auto'}}>
                  {LABS.length} labs step-by-step voi code copy-paste san sang.
                </p>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(min(240px,100%),1fr))',gap:'.55rem'}}>
                {list.map(l => (
                  <div key={l.id} className="card card-a" onClick={() => open(l)} style={{padding:'.9rem',borderColor:`${l.groupColor}18`}}>
                    <div style={{fontSize:'.62rem',color:l.groupColor,fontFamily:'var(--fm)',fontWeight:700,marginBottom:'.28rem',textTransform:'uppercase'}}>{l.group}</div>
                    <div style={{fontWeight:700,fontSize:'.86rem',color:'var(--txt)',marginBottom:'.25rem',lineHeight:1.3}}>{l.title}</div>
                    <div style={{fontSize:'.77rem',color:'var(--txt3)',marginBottom:'.55rem',lineHeight:1.45}}>{l.obj}</div>
                    <div style={{display:'flex',gap:'.28rem',flexWrap:'wrap'}}>
                      <span style={{fontSize:'.68rem',color:diffColor(l.diff)}}>{diffLabel(l.diff)}</span>
                      <span style={{fontSize:'.68rem',color:'var(--txt3)'}}>| {l.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
