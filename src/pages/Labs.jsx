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

const diffLabel = d => d === 'easy' ? 'Co ban' : d === 'medium' ? 'Trung cap' : 'Nang cao'
const diffColor = d => d === 'easy' ? 'var(--g)' : d === 'medium' ? 'var(--c)' : 'var(--p)'

// ── Lab Detail component — defined OUTSIDE main component ──────────────
function LabDetail({ lab, done, setDone, onBack }) {
  const [step, setStep] = useState(0)
  const [tab,  setTab]  = useState('steps')

  if (!lab) return null

  return (
    <div>
      {/* Header bar */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <button className="btn btn-s" onClick={onBack}>Quay lai</button>
        <span className="badge" style={{ background: `${diffColor(lab.diff)}12`, color: diffColor(lab.diff), border: `1px solid ${diffColor(lab.diff)}28` }}>
          {diffLabel(lab.diff)}
        </span>
        <span style={{ fontSize: '.75rem', color: 'var(--txt3)' }}>{lab.time}</span>
        <span style={{ fontSize: '.75rem', color: 'var(--txt3)' }}>{lab.hw}</span>
      </div>

      {/* Lab info card */}
      <div className="card" style={{ padding: '1.1rem', marginBottom: '.9rem', background: `${lab.groupColor}06`, borderColor: `${lab.groupColor}25` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '.6rem', color: lab.groupColor, fontFamily: 'var(--fm)', fontWeight: 700, marginBottom: '.15rem', textTransform: 'uppercase' }}>
              {lab.group}
            </div>
            <h2 style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '.3rem', lineHeight: 1.3 }}>{lab.title}</h2>
            <p style={{ fontSize: '.83rem', color: 'var(--txt2)', lineHeight: 1.55 }}>{lab.obj}</p>
          </div>
          <button
            className={`btn ${done[lab.id] ? 'btn-s' : 'btn-p'}`}
            style={{ flexShrink: 0 }}
            onClick={() => setDone(p => ({ ...p, [lab.id]: !p[lab.id] }))}>
            {done[lab.id] ? 'Da hoan thanh' : 'Mark done'}
          </button>
        </div>

        {/* Progress */}
        <div style={{ marginTop: '.8rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.67rem', color: 'var(--txt3)', marginBottom: '.25rem' }}>
            <span>Buoc {step + 1} / {lab.steps.length}</span>
            <span>{Math.round((step + 1) / lab.steps.length * 100)}%</span>
          </div>
          <div className="prog"><div className="prog-f" style={{ width: `${(step + 1) / lab.steps.length * 100}%` }} /></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {[['steps', 'Cac buoc'], ['theory', 'Ly thuyet'], ['verify', 'Kiem tra']].map(([k, l]) => (
          <button key={k} className={`tab${tab === k ? ' on' : ''}`} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {/* Tab: Steps */}
      {tab === 'steps' && (
        <div>
          {lab.steps.map((s, idx) => (
            <div key={idx} onClick={() => setStep(idx)} className="card"
              style={{
                padding: '.85rem 1rem', marginBottom: '.45rem', cursor: 'pointer', transition: 'border-color .13s',
                borderColor: idx === step ? lab.groupColor : idx < step ? 'rgba(0,230,118,.3)' : 'var(--brd)',
                background: idx === step ? `${lab.groupColor}07` : idx < step ? 'rgba(0,230,118,.025)' : 'var(--sur)',
              }}>
              <div style={{ display: 'flex', gap: '.65rem', alignItems: 'flex-start' }}>
                {/* Step number circle */}
                <div style={{
                  width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.67rem', fontFamily: 'var(--fm)', fontWeight: 700,
                  background: idx < step ? 'var(--g)' : idx === step ? lab.groupColor : 'var(--sur2)',
                  color: idx <= step ? '#000' : 'var(--txt3)',
                }}>
                  {idx < step ? 'v' : idx + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: '.87rem', color: idx === step ? 'var(--txt)' : 'var(--txt2)', marginBottom: idx === step ? '.4rem' : 0 }}>
                    {s.t}
                  </div>
                  {idx === step && (
                    <>
                      {s.info && <p style={{ color: 'var(--txt3)', fontSize: '.82rem', marginBottom: '.4rem', lineHeight: 1.55 }}>{s.info}</p>}
                      <div style={{ position: 'relative' }}>
                        <pre data-lang={s.lang || 'cpp'}><code style={{ color: '#b8d4e8' }}>{s.code}</code></pre>
                        <CopyBtn code={s.code} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Result & Tips */}
          {lab.expect && (
            <div className="alert as" style={{ marginTop: '.6rem', fontSize: '.83rem' }}>
              <strong>Ket qua mong doi:</strong> {lab.expect}
            </div>
          )}
          {lab.tips?.length > 0 && (
            <div className="alert aw" style={{ marginTop: '.5rem', fontSize: '.82rem' }}>
              <strong>Tips:</strong>
              <ul className="ul" style={{ marginTop: '.35rem' }}>{lab.tips.map((t, i) => <li key={i}>{t}</li>)}</ul>
            </div>
          )}

          {/* Nav buttons */}
          <div style={{ display: 'flex', gap: '.5rem', marginTop: '.8rem', flexWrap: 'wrap' }}>
            <button className="btn btn-s" disabled={step === 0} onClick={() => setStep(s => s - 1)}>Buoc truoc</button>
            <button className="btn btn-o" disabled={step === lab.steps.length - 1} onClick={() => setStep(s => s + 1)}>Buoc tiep</button>
            {step === lab.steps.length - 1 && (
              <button className="btn btn-p" onClick={() => { setDone(p => ({ ...p, [lab.id]: true })); setTab('verify') }}>
                Hoan thanh - Kiem tra
              </button>
            )}
          </div>
        </div>
      )}

      {/* Tab: Theory */}
      {tab === 'theory' && (
        <div className="card" style={{ padding: '1.2rem' }}>
          <div className="alert ai" style={{ fontSize: '.85rem', lineHeight: 1.65 }}>
            <strong>Ly thuyet:</strong> {lab.theory}
          </div>
        </div>
      )}

      {/* Tab: Verify */}
      {tab === 'verify' && (
        <div>
          <div className="card" style={{ padding: '1.1rem', marginBottom: '.75rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--c)', marginBottom: '1rem', fontSize: '.9rem' }}>Cau hoi kiem tra</div>
            {lab.verify?.map((v, i) => (
              <div key={i} style={{ background: 'var(--bg)', borderRadius: 8, padding: '.75rem .9rem', marginBottom: '.5rem', border: '1px solid var(--brd)' }}>
                <div style={{ fontWeight: 600, fontSize: '.84rem', color: 'var(--txt)', marginBottom: '.38rem' }}>{i + 1}. {v.q}</div>
                <div style={{ position: 'relative' }}>
                  <pre><code style={{ color: '#9ab' }}>{v.cmd}</code></pre>
                  <CopyBtn code={v.cmd} />
                </div>
              </div>
            ))}
          </div>
          {done[lab.id]
            ? <div className="alert as">Xuat sac! Da hoan thanh <strong>{lab.title}</strong></div>
            : <div className="alert aw">Chua mark done. Quay lai tab Cac buoc.</div>
          }
        </div>
      )}
    </div>
  )
}

// ── Main Labs component ─────────────────────────────────────────────────
export default function Labs() {
  const [sel,  setSel]  = useState(null)
  const [done, setDone] = useState({})
  const [grp,  setGrp]  = useState('all')

  if (!LABS || LABS.length === 0) {
    return <div className="page-hdr"><h1>Labs chua co du lieu</h1></div>
  }

  const list  = grp === 'all' ? LABS : LABS.filter(l => l.group === grp)
  const total = Object.values(done).filter(Boolean).length
  const openLab = l => { setSel(l); window.scrollTo(0, 0) }
  const backToList = () => setSel(null)

  return (
    <div className="fu">
      {/* Page header */}
      <div className="page-hdr">
        <h1><span className="gt">Lab thuc hanh</span></h1>
        <p>{LABS.length} labs — {total}/{LABS.length} hoan thanh</p>
      </div>

      {/* Group filter tabs */}
      <div className="tabs" style={{ marginBottom: '1rem' }}>
        <button className={`tab${grp === 'all' ? ' on' : ''}`} onClick={() => setGrp('all')}>
          Tat ca ({LABS.length})
        </button>
        {LAB_GROUPS.map(g => (
          <button key={g.id} className={`tab${grp === g.id ? ' on' : ''}`}
            onClick={() => setGrp(g.id)}
            style={grp === g.id ? { color: g.color, borderBottomColor: g.color } : {}}>
            {g.id} ({g.count})
          </button>
        ))}
      </div>

      {/* ── MOBILE ─────────────────────────────── */}
      <div className="mob">
        {sel ? (
          <LabDetail lab={sel} done={done} setDone={setDone} onBack={backToList} />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem' }}>
            {list.map(l => (
              <div key={l.id} className="card card-a" onClick={() => openLab(l)}
                style={{ padding: '.85rem', borderColor: `${l.groupColor}1a` }}>
                <div style={{ fontSize: '.6rem', color: l.groupColor, fontFamily: 'var(--fm)', fontWeight: 700, marginBottom: '.18rem' }}>
                  {l.group}
                </div>
                <div style={{ fontWeight: 600, fontSize: '.8rem', color: 'var(--txt)', marginBottom: '.2rem', lineHeight: 1.3 }}>
                  {l.title.split(':')[0]}
                </div>
                <div style={{ fontSize: '.65rem', color: diffColor(l.diff) }}>{diffLabel(l.diff)}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── DESKTOP 2-column ────────────────────── */}
      <div className="desk" style={{ display: 'grid', gridTemplateColumns: '210px 1fr', gap: '1.2rem', alignItems: 'start' }}>

        {/* Left: sidebar list */}
        <div style={{ position: 'sticky', top: '1rem' }}>
          {/* Progress bar */}
          <div style={{ padding: '.6rem .75rem', background: 'rgba(0,212,255,.04)', border: '1px solid rgba(0,212,255,.12)', borderRadius: 8, marginBottom: '.6rem' }}>
            <div style={{ fontSize: '.62rem', color: 'var(--txt3)', fontFamily: 'var(--fm)', marginBottom: '.28rem' }}>TIEN DO</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
              <div className="prog" style={{ flex: 1 }}><div className="prog-f" style={{ width: `${total / LABS.length * 100}%` }} /></div>
              <span style={{ fontSize: '.68rem', color: 'var(--c)', fontFamily: 'var(--fm)', flexShrink: 0 }}>{total}/{LABS.length}</span>
            </div>
          </div>

          {/* Lab list */}
          {list.map(l => (
            <button key={l.id} onClick={() => openLab(l)}
              style={{
                display: 'flex', flexDirection: 'column', gap: '.14rem',
                width: '100%', padding: '.58rem .68rem', borderRadius: 8, marginBottom: 3,
                background: sel?.id === l.id ? `${l.groupColor}0c` : 'var(--sur)',
                border: `1px solid ${sel?.id === l.id ? l.groupColor + '38' : 'var(--brd)'}`,
                cursor: 'pointer', textAlign: 'left', transition: 'all .13s',
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: '.8rem', fontWeight: sel?.id === l.id ? 700 : 500,
                  color: sel?.id === l.id ? l.groupColor : 'var(--txt)',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%',
                }}>
                  {l.title}
                </span>
                {done[l.id] && <span style={{ color: 'var(--g)', fontSize: '.8rem' }}>v</span>}
              </div>
              <div style={{ display: 'flex', gap: '.3rem', alignItems: 'center' }}>
                <span style={{ fontSize: '.62rem', color: diffColor(l.diff) }}>{diffLabel(l.diff)}</span>
                <span style={{ fontSize: '.62rem', color: 'var(--txt3)' }}>| {l.time}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right: detail or placeholder */}
        <div>
          {sel ? (
            <LabDetail lab={sel} done={done} setDone={setDone} onBack={backToList} />
          ) : (
            <div>
              {/* Placeholder */}
              <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(0,212,255,.025)', borderColor: 'rgba(0,212,255,.12)', marginBottom: '1rem' }}>
                <div style={{ fontFamily: 'var(--fm)', fontSize: '1.8rem', color: 'var(--txt3)', marginBottom: '.65rem' }}>{ }</div>
                <h2 style={{ fontWeight: 800, fontSize: '1.08rem', marginBottom: '.45rem' }}>Chon Lab de bat dau</h2>
                <p style={{ color: 'var(--txt3)', fontSize: '.84rem', maxWidth: 380, margin: '0 auto', lineHeight: 1.6 }}>
                  {LABS.length} labs step-by-step voi code copy-paste. Click vao lab bat ky de xem huong dan.
                </p>
              </div>

              {/* Lab cards grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(240px,100%),1fr))', gap: '.6rem' }}>
                {list.map(l => (
                  <div key={l.id} className="card card-a" onClick={() => openLab(l)}
                    style={{ padding: '1rem', borderColor: `${l.groupColor}18` }}>
                    <div style={{ fontSize: '.62rem', color: l.groupColor, fontFamily: 'var(--fm)', fontWeight: 700, marginBottom: '.28rem', textTransform: 'uppercase' }}>
                      {l.group}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '.88rem', color: 'var(--txt)', marginBottom: '.25rem', lineHeight: 1.35 }}>
                      {l.title}
                    </div>
                    <div style={{ fontSize: '.78rem', color: 'var(--txt3)', marginBottom: '.6rem', lineHeight: 1.45 }}>
                      {l.obj}
                    </div>
                    <div style={{ display: 'flex', gap: '.3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontSize: '.68rem', color: diffColor(l.diff), fontWeight: 600 }}>{diffLabel(l.diff)}</span>
                      <span style={{ fontSize: '.68rem', color: 'var(--txt3)' }}>| {l.time}</span>
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
