import { useState } from 'react'
import { QUIZ } from '../data/content'

const CATS = ['all', ...new Set(QUIZ.map(q => q.cat))]
const LVS  = ['all', 'easy', 'medium', 'hard']
const LVL  = { easy:'Cơ Bản', medium:'Trung Cấp', hard:'Nâng cao' }

export default function Quiz() {
  const [cat, setCat] = useState('all')
  const [lv,  setLv]  = useState('all')
  const [idx, setIdx] = useState(0)
  const [ch,  setCh]  = useState({})
  const [mode, setMode] = useState('browse')  // 'browse' | 'test'
  const [score, setScore] = useState(null)

  const pool = QUIZ.filter(q => (cat==='all'||q.cat===cat) && (lv==='all'||q.lv===lv))
  const q    = pool[idx]

  const pick = (qi, j) => { if (ch[qi] !== undefined) return; setCh(p => ({...p,[qi]:j})) }
  const submit = () => setScore(pool.filter((_,i) => ch[i] === pool[i].ans).length)

  if (mode === 'test' && score === null) return (
    <div className="fu">
      <div style={{display:'flex',gap:'.5rem',marginBottom:'1rem',flexWrap:'wrap',alignItems:'center'}}>
        <h1 style={{fontSize:'1.1rem',flex:1}}><span className="gt">Kiem tra</span> — {pool.length} cau</h1>
        <button className="btn btn-s" onClick={() => { setMode('browse'); setCh({}); setIdx(0) }}>Thoat</button>
      </div>
      <div style={{fontSize:'.76rem',color:'var(--txt3)',marginBottom:'.6rem'}}>{Object.keys(ch).length}/{pool.length} da tra loi</div>
      <div className="prog" style={{marginBottom:'1.1rem'}}><div className="prog-f" style={{width:`${Object.keys(ch).length/pool.length*100}%`}}/></div>

      {pool.map((qq, i) => (
        <div key={qq.id} className="card" style={{padding:'1.05rem',marginBottom:'.65rem'}}>
          <div style={{fontSize:'.72rem',color:'var(--txt3)',marginBottom:'.32rem'}}>Cau {i+1} · {qq.cat} · {LVL[qq.lv]||qq.lv}</div>
          <p style={{fontWeight:600,color:'var(--txt)',fontSize:'.87rem',marginBottom:'.65rem',lineHeight:1.55}}>{qq.q}</p>
          {qq.opts.map((opt, j) => {
            const done=ch[i]!==undefined, sel=ch[i]===j, right=qq.ans===j
            return (
              <div key={j} onClick={() => pick(i,j)}
                className={`qopt${done&&right?' qr':done&&sel&&!right?' qw':''}`}
                style={{opacity:done&&!right&&!sel?.5:1}}>
                <div className="qbub">{done&&right?'v':done&&sel?'x':['A','B','C','D'][j]}</div>
                <span>{opt}</span>
              </div>
            )
          })}
          {ch[i] !== undefined && (
            <div className="alert as" style={{marginTop:'.55rem',fontSize:'.81rem'}}>{qq.exp}</div>
          )}
        </div>
      ))}

      <div style={{display:'flex',justifyContent:'center',padding:'1rem 0'}}>
        <button className="btn btn-p" disabled={Object.keys(ch).length < pool.length} onClick={submit}>
          Nop bai ({Object.keys(ch).length}/{pool.length})
        </button>
      </div>
    </div>
  )

  if (mode === 'test' && score !== null) {
    const pct = Math.round(score / pool.length * 100)
    return (
      <div className="fu" style={{textAlign:'center',padding:'3.5rem 1rem'}}>
        <div style={{fontFamily:'var(--fm)',fontSize:'2rem',fontWeight:800,color:pct>=80?'var(--g)':pct>=60?'var(--y)':'var(--r)',marginBottom:'.4rem'}}>{score}/{pool.length}</div>
        <div style={{color:'var(--txt2)',marginBottom:'1.5rem',fontSize:'.9rem'}}>{pct}% — {pct>=80?'Xuat sac!':pct>=60?'Kha tot!':'Can on them!'}</div>
        <div style={{display:'flex',gap:'.6rem',justifyContent:'center',flexWrap:'wrap'}}>
          <button className="btn btn-p" onClick={() => { setCh({}); setScore(null); setMode('test') }}>Lam lai</button>
          <button className="btn btn-s" onClick={() => { setCh({}); setScore(null); setMode('browse'); setIdx(0) }}>Ve browse</button>
        </div>
      </div>
    )
  }

  if (!q) return <div className="page-hdr"><h1>Không có câu hỏi nào</h1></div>

  return (
    <div className="fu">
      <div className="page-hdr">
        <h1><span className="gt">Trắc Nghiệm AIoT</span></h1>
        <p>{QUIZ.length} Câu hỏi — 6 Chủ Đề — Có Giải Thích Chi Tiết</p>
      </div>

      <div style={{display:'flex',gap:'.45rem',flexWrap:'wrap',marginBottom:'1rem',alignItems:'center'}}>
        <select value={cat} onChange={e => { setCat(e.target.value); setIdx(0); setCh({}) }}
          style={{padding:'.38rem .65rem',background:'var(--sur)',border:'1px solid var(--brd)',color:'var(--txt)',borderRadius:6,fontSize:'.81rem',fontFamily:'var(--fd)',cursor:'pointer'}}>
          {CATS.map(c => <option key={c} value={c}>{c==='all'?`Tất cả (${QUIZ.length})`:c}</option>)}
        </select>
        <select value={lv} onChange={e => { setLv(e.target.value); setIdx(0); setCh({}) }}
          style={{padding:'.38rem .65rem',background:'var(--sur)',border:'1px solid var(--brd)',color:'var(--txt)',borderRadius:6,fontSize:'.81rem',fontFamily:'var(--fd)',cursor:'pointer'}}>
          {LVS.map(l => <option key={l} value={l}>{l==='all'?'Tất cả cấp độ':LVL[l]}</option>)}
        </select>
        <button className="btn btn-p" onClick={() => { setCh({}); setScore(null); setMode('test') }}>Bắt đầu kiểm tra ({pool.length})</button>
      </div>

      <div style={{fontSize:'.74rem',color:'var(--txt3)',marginBottom:'.65rem'}}>Cau {idx+1}/{pool.length} · {q.cat} · {LVL[q.lv]||q.lv}</div>
      <div className="prog" style={{marginBottom:'.9rem'}}><div className="prog-f" style={{width:`${(idx+1)/pool.length*100}%`}}/></div>

      <div className="card" style={{padding:'1.2rem',marginBottom:'.9rem'}}>
        <p style={{fontWeight:600,color:'var(--txt)',fontSize:'.9rem',lineHeight:1.6,marginBottom:'.9rem'}}>{q.q}</p>
        {q.opts.map((opt, j) => {
          const done=ch[idx]!==undefined, sel=ch[idx]===j, right=q.ans===j
          return (
            <div key={j} onClick={() => pick(idx,j)}
              className={`qopt${done&&right?' qr':done&&sel&&!right?' qw':sel?' qs':''}`}
              style={{opacity:done&&!right&&!sel?.5:1}}>
              <div className="qbub">{done&&right?'v':done&&sel?'x':['A','B','C','D'][j]}</div>
              <span>{opt}</span>
            </div>
          )
        })}
        {ch[idx] !== undefined && (
          <div className="alert as" style={{marginTop:'.7rem',fontSize:'.83rem'}}><strong>Giải thích:</strong> {q.exp}</div>
        )}
      </div>

      <div style={{display:'flex',justifyContent:'space-between',gap:'.5rem'}}>
        <button className="btn btn-s" disabled={idx===0} onClick={() => setIdx(i => i-1)}>Câu trước</button>
        <button className="btn btn-o" disabled={idx===pool.length-1} onClick={() => setIdx(i => i+1)}>Câu tiếp</button>
      </div>
    </div>
  )
}
