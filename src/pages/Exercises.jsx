import { useState } from 'react'
import { EXERCISES } from '../data/content'

const DC = d => d==='easy'?'var(--g)':d==='medium'?'var(--c)':'var(--p)'
const DL = d => d==='easy'?'Cơ Bản':d==='medium'?'Trung Bình':'Nâng Cao'
const CATS = ['all',...new Set(EXERCISES.map(e=>e.cat))]

export default function Exercises() {
  const [diff, setDiff] = useState('all')
  const [cat, setCat]   = useState('all')
  const [open, setOpen] = useState(null)

  const list = EXERCISES.filter(e => (diff==='all'||e.diff===diff) && (cat==='all'||e.cat===cat))

  return (
    <div className="fu">
      <div className="page-hdr">
        <h1><span className="gt">Bài tập thực hành</span></h1>
        <p>{EXERCISES.length} Bài tập cơ bản hướng dẫn — Từ cơ bản đến đề tài khởi nghiệp</p>
      </div>

      <div style={{display:'flex',gap:'.45rem',flexWrap:'wrap',marginBottom:'1rem'}}>
        <select value={diff} onChange={e=>setDiff(e.target.value)}
          style={{padding:'.38rem .65rem',background:'var(--sur)',border:'1px solid var(--brd)',color:'var(--txt)',borderRadius:6,fontSize:'.81rem',fontFamily:'var(--fd)'}}>
          <option value="all">Tất cả độ khó</option>
          {['easy','medium','hard'].map(d=><option key={d} value={d}>{DL(d)}</option>)}
        </select>
        <select value={cat} onChange={e=>setCat(e.target.value)}
          style={{padding:'.38rem .65rem',background:'var(--sur)',border:'1px solid var(--brd)',color:'var(--txt)',borderRadius:6,fontSize:'.81rem',fontFamily:'var(--fd)'}}>
          {CATS.map(c=><option key={c} value={c}>{c==='all'?'Tất cả chủ đề':c}</option>)}
        </select>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:'.48rem'}}>
        {list.map(ex => (
          <div key={ex.id} className="card" style={{overflow:'hidden',borderColor:open===ex.id?`${DC(ex.diff)}35`:'var(--brd)'}}>
            <div onClick={()=>setOpen(open===ex.id?null:ex.id)}
              style={{display:'flex',alignItems:'center',gap:'.7rem',padding:'.82rem 1rem',cursor:'pointer',flexWrap:'wrap'}}>
              <div style={{flex:1,minWidth:150}}>
                <div style={{display:'flex',gap:'.35rem',alignItems:'center',marginBottom:'.18rem',flexWrap:'wrap'}}>
                  <span className="badge" style={{fontSize:'.6rem',background:`${DC(ex.diff)}0e`,color:DC(ex.diff),border:`1px solid ${DC(ex.diff)}28`}}>{DL(ex.diff)}</span>
                  <span className="badge bc" style={{fontSize:'.6rem'}}>{ex.cat}</span>
                  <span style={{fontSize:'.7rem',color:'var(--txt3)'}}>| {ex.time}</span>
                </div>
                <div style={{fontWeight:600,fontSize:'.87rem',color:'var(--txt)',lineHeight:1.3}}>{ex.title}</div>
              </div>
              <span style={{color:'var(--txt3)',fontSize:'.75rem',flexShrink:0}}>{open===ex.id?'[ - ]':'[ + ]'}</span>
            </div>

            {open === ex.id && (
              <div style={{borderTop:'1px solid var(--brd)',padding:'.95rem 1.05rem',background:'var(--bg)'}}>
                <div style={{fontSize:'.63rem',color:'var(--txt3)',fontFamily:'var(--fm)',marginBottom:'.35rem'}}>PHẦN CỨNG: {ex.hw}</div>
                <p style={{fontSize:'.85rem',color:'var(--txt2)',lineHeight:1.65,marginBottom:'.85rem'}}>{ex.desc}</p>
                <div style={{fontSize:'.68rem',color:'var(--c)',fontWeight:700,fontFamily:'var(--fm)',marginBottom:'.42rem',letterSpacing:.5}}>HƯỚNG DẪN TỪNG BƯỚC</div>
                <ol className="ol">{ex.steps.map((s,i)=><li key={i}>{s}</li>)}</ol>
                {ex.hint && (
                  <div className="alert aw" style={{marginTop:'.65rem',fontSize:'.82rem'}}>
                    <strong>Goi y:</strong> {ex.hint}
                  </div>
                )}
                <div className="alert as" style={{marginTop:'.5rem',fontSize:'.83rem'}}>
                  <strong>Ket qua mong doi:</strong> {ex.expected}
                </div>
              </div>
            )}
          </div>
        ))}
        {list.length === 0 && (
          <div style={{textAlign:'center',padding:'3rem',color:'var(--txt3)',fontSize:'.87rem'}}>
            Không có bài tập phù hợp với bộ lọc này.
          </div>
        )}
      </div>
    </div>
  )
}
