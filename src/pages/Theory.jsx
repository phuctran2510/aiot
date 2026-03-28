import { useState } from 'react'
import { ALL_THEORY } from '../data/theory'

function CopyBtn({ code }) {
  const [ok, setOk] = useState(false)
  return (
    <button className={`cpbtn${ok ? ' ok' : ''}`}
      onClick={() => { navigator.clipboard?.writeText(code); setOk(true); setTimeout(() => setOk(false), 1800) }}>
      {ok ? 'copied' : 'copy'}
    </button>
  )
}

function Md({ text }) {
  if (!text) return null
  const lines = text.trim().split('\n')
  const out = []; let i = 0

  const esc = s => s
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color:var(--c)">$1</a>')

  while (i < lines.length) {
    const l = lines[i]

    if (l.startsWith('```')) {
      const lang = l.slice(3).trim() || 'bash'
      const code = []; i++
      while (i < lines.length && !lines[i].startsWith('```')) { code.push(lines[i]); i++ }
      const raw = code.join('\n')
      out.push(
        <pre key={`c${i}`} data-lang={lang}>
          <code style={{ color: '#b8d4e8' }}>{raw}</code>
          <CopyBtn code={raw} />
        </pre>
      ); i++; continue
    }

    if (l.startsWith('|')) {
      const rows = []
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].includes('---')) rows.push(lines[i].split('|').filter(Boolean).map(c => c.trim()))
        i++
      }
      const [hd, ...bd] = rows
      if (!hd) continue
      out.push(
        <div key={`t${i}`} className="tw">
          <table>
            <thead><tr>{hd.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
            <tbody>{bd.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci} dangerouslySetInnerHTML={{ __html: esc(c) }} />)}</tr>)}</tbody>
          </table>
        </div>
      ); continue
    }

    if (l.startsWith('## ')) {
      out.push(<h2 key={`h2${i}`} style={{ fontSize: '.97rem', color: 'var(--c)', margin: '1.2rem 0 .5rem', borderBottom: '1px solid var(--brd)', paddingBottom: '.3rem', fontFamily: 'var(--fm)' }}>{l.slice(3)}</h2>)
      i++; continue
    }
    if (l.startsWith('### ')) {
      out.push(<h3 key={`h3${i}`} style={{ fontSize: '.91rem', color: 'var(--txt)', margin: '.9rem 0 .36rem', fontWeight: 600 }}>{l.slice(4)}</h3>)
      i++; continue
    }
    if (l.trim() === '---') {
      out.push(<div key={`hr${i}`} className="divider" />)
      i++; continue
    }
    if (l.match(/^[-*] /)) {
      const items = []
      while (i < lines.length && lines[i].match(/^[-*] /)) { items.push(lines[i].slice(2)); i++ }
      out.push(<ul key={`ul${i}`} className="ul">{items.map((it, j) => <li key={j} dangerouslySetInnerHTML={{ __html: esc(it) }} />)}</ul>)
      continue
    }
    if (l.trim() === '') { i++; continue }
    out.push(<p key={`p${i}`} style={{ color: 'var(--txt2)', margin: '.2rem 0 .55rem', fontSize: '.86rem', lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: esc(l) }} />)
    i++
  }
  return <div>{out}</div>
}

export default function Theory() {
  const [ch, setCh] = useState(ALL_THEORY[0])
  const [sc, setSc] = useState(ALL_THEORY[0].sections[0])

  const pick = c => { setCh(c); setSc(c.sections[0]); window.scrollTo(0, 0) }

  const chIdx = ALL_THEORY.indexOf(ch)
  const scIdx = ch.sections.indexOf(sc)

  const prev = () => {
    if (scIdx > 0) { setSc(ch.sections[scIdx - 1]); window.scrollTo(0, 0) }
    else if (chIdx > 0) { const p = ALL_THEORY[chIdx - 1]; setCh(p); setSc(p.sections[p.sections.length - 1]); window.scrollTo(0, 0) }
  }
  const next = () => {
    if (scIdx < ch.sections.length - 1) { setSc(ch.sections[scIdx + 1]); window.scrollTo(0, 0) }
    else if (chIdx < ALL_THEORY.length - 1) { const nx = ALL_THEORY[chIdx + 1]; setCh(nx); setSc(nx.sections[0]); window.scrollTo(0, 0) }
  }
  const hasPrev = chIdx > 0 || scIdx > 0
  const hasNext = chIdx < ALL_THEORY.length - 1 || scIdx < ch.sections.length - 1

  return (
    <div>
      <div className="page-hdr">
        <h1><span className="gt">Lý thuyết AIoT</span></h1>
        <p>{ALL_THEORY.length} chương — từ nền tảng IoT đến Deep Learning, FPGA và Khởi nghiệp</p>
      </div>

      {/* Mobile: horizontal scroll tabs */}
      <div className="mob" style={{ display: 'flex', gap: '.3rem', overflowX: 'auto', paddingBottom: '.4rem', marginBottom: '.7rem', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
        {ALL_THEORY.map(c => (
          <button key={c.id} onClick={() => pick(c)}
            style={{ padding: '.3rem .62rem', borderRadius: 7, flexShrink: 0, background: ch.id === c.id ? `${c.color}14` : 'var(--sur)', border: `1px solid ${ch.id === c.id ? c.color + '35' : 'var(--brd)'}`, color: ch.id === c.id ? c.color : 'var(--txt3)', cursor: 'pointer', fontSize: '.73rem', fontWeight: ch.id === c.id ? 600 : 400, whiteSpace: 'nowrap' }}>
            {c.title}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '185px 1fr', gap: '1.1rem', alignItems: 'start' }}>
        {/* Desktop sidebar */}
        <div style={{ position: 'sticky', top: '1rem' }} className="desk">
          {ALL_THEORY.map(c => (
            <button key={c.id} onClick={() => pick(c)}
              style={{ display: 'flex', alignItems: 'center', gap: '.42rem', width: '100%', padding: '.4rem .6rem', borderRadius: 7, marginBottom: 2, background: ch.id === c.id ? `${c.color}0d` : 'transparent', border: `1px solid ${ch.id === c.id ? c.color + '28' : 'transparent'}`, cursor: 'pointer', textAlign: 'left', transition: 'all .12s' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: c.color, flexShrink: 0, opacity: ch.id === c.id ? 1 : .5 }} />
              <span style={{ fontSize: '.78rem', color: ch.id === c.id ? c.color : 'var(--txt2)', fontWeight: ch.id === c.id ? 600 : 400, lineHeight: 1.3 }}>{c.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="fu">
          <div className="card" style={{ padding: '.95rem 1.1rem', marginBottom: '.75rem', background: `${ch.color}06`, borderColor: `${ch.color}22` }}>
            <span className="badge" style={{ background: `${ch.color}12`, color: ch.color, border: `1px solid ${ch.color}28`, marginBottom: '.4rem', display: 'inline-flex' }}>{ch.title}</span>
            <h2 style={{ fontWeight: 800, fontSize: '1.05rem', marginTop: '.3rem' }}>{sc.title}</h2>
          </div>

          {ch.sections.length > 1 && (
            <div className="tabs">
              {ch.sections.map(s => (
                <button key={s.id} className={`tab${sc.id === s.id ? ' on' : ''}`}
                  onClick={() => { setSc(s); window.scrollTo(0, 0) }}>
                  {s.title}
                </button>
              ))}
            </div>
          )}

          <div className="card" style={{ padding: '1.1rem 1.2rem' }}>
            <Md text={sc.content} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '.75rem', gap: '.5rem' }}>
            <button className="btn btn-s" disabled={!hasPrev} onClick={prev}>Trang truoc</button>
            <button className="btn btn-o" disabled={!hasNext} onClick={next}>Trang tiep</button>
          </div>
        </div>
      </div>
    </div>
  )
}
