import { useState } from 'react'

function CopyBtn({ text }) {
  const [ok, setOk] = useState(false)
  return (
    <button className={`copy-btn${ok?' ok':''}`}
      onClick={() => { navigator.clipboard?.writeText(text); setOk(true); setTimeout(()=>setOk(false),1800) }}>
      {ok ? '✓' : 'copy'}
    </button>
  )
}

export default function Md({ src }) {
  if (!src) return null
  const lines = src.trim().split('\n')
  const out = []; let i = 0

  const inline = t => t
    .replace(/\*\*([^*]+)\*\*/g, '<strong style="color:var(--txt);font-weight:600">$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')

  while (i < lines.length) {
    const l = lines[i]

    if (l.startsWith('```')) {
      const lang = l.slice(3).trim() || 'code'
      const code = []; i++
      while (i < lines.length && !lines[i].startsWith('```')) { code.push(lines[i]); i++ }
      const codeStr = code.join('\n')
      out.push(
        <div key={`code-${i}`} style={{position:'relative',margin:'.7rem 0'}}>
          <div style={{position:'absolute',top:'.3rem',left:'.6rem',fontSize:'.59rem',color:'var(--txt3)',fontFamily:'var(--fm)',zIndex:2,letterSpacing:'.04em'}}>{lang}</div>
          <pre style={{paddingTop:'1.4rem'}}><code>{codeStr}</code></pre>
          <CopyBtn text={codeStr} />
        </div>
      )
      i++; continue
    }

    if (l.startsWith('| ')) {
      const rows = []
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].includes('---'))
          rows.push(lines[i].split('|').filter(Boolean).map(c => c.trim()))
        i++
      }
      const [hd, ...bd] = rows
      out.push(
        <div key={`tbl-${i}`} className="tw" style={{margin:'.7rem 0'}}>
          <table>
            <thead><tr>{hd?.map((h,j) => <th key={j}>{h}</th>)}</tr></thead>
            <tbody>{bd.map((r,ri) => <tr key={ri}>{r.map((c,ci) => <td key={ci} dangerouslySetInnerHTML={{__html:inline(c)}}/>)}</tr>)}</tbody>
          </table>
        </div>
      )
      continue
    }

    if (l.startsWith('## ')) { out.push(<h2 key={`h2-${i}`} style={{fontSize:'.96rem',color:'var(--c)',fontFamily:'var(--fm)',margin:'1.2rem 0 .5rem',borderBottom:'1px solid var(--brd)',paddingBottom:'.3rem'}}>{l.slice(3)}</h2>); i++; continue }
    if (l.startsWith('### ')) { out.push(<h3 key={`h3-${i}`} style={{fontSize:'.91rem',color:'var(--txt)',margin:'.9rem 0 .35rem',fontWeight:600}}>{l.slice(4)}</h3>); i++; continue }
    if (l.startsWith('> ')) { out.push(<div key={`bq-${i}`} className="alert ai" dangerouslySetInnerHTML={{__html:inline(l.slice(2))}}/>); i++; continue }
    if (l.trim() === '---') { out.push(<div key={`hr-${i}`} className="div"/>); i++; continue }

    if (l.match(/^[-*] /)) {
      const items = []; const start = i
      while (i < lines.length && lines[i].match(/^[-*] /)) { items.push(lines[i].slice(2)); i++ }
      out.push(<ul key={`ul-${start}`} className="ul">{items.map((it,j) => <li key={j} dangerouslySetInnerHTML={{__html:inline(it)}}/>)}</ul>)
      continue
    }

    if (l.trim() === '') { i++; continue }
    out.push(<p key={`p-${i}`} style={{color:'var(--txt2)',margin:'.15rem 0 .55rem',fontSize:'.85rem',lineHeight:1.75}} dangerouslySetInnerHTML={{__html:inline(l)}}/>)
    i++
  }
  return <div>{out}</div>
}
