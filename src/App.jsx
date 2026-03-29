import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home      from './pages/Home'
import Theory    from './pages/Theory'
import Labs      from './pages/Labs'
import Quiz      from './pages/Quiz'
import Exercises from './pages/Exercises'
import Thesis    from './pages/Thesis'
import Resources from './pages/Resources'
import Guide     from './pages/Guide'
import Contact   from './pages/Contact'

const NAV = [
  { group:'Học tập', items:[
    { to:'/',          label:'Tổng quan'     },
    { to:'/theory',   label:'Lý thuyết'     },
    { to:'/labs',     label:'Lab thực hành' },
  ]},
  { group:'Luyện tập', items:[
    { to:'/quiz',      label:'Trắc nghiệm'  },
    { to:'/exercises', label:'Bài tập'      },
    { to:'/thesis',    label:'Đề tài'       },
  ]},
  { group:'Hỗ trợ', items:[
    { to:'/resources', label:'Tài liệu'     },
    { to:'/guide',     label:'Hướng dẫn'   },
    { to:'/contact',   label:'Liên hệ GV'  },
  ]},
]
function Login({ onLogin }) {
  const [pwd, setPwd] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pwd === '123456') {
      localStorage.setItem('auth', 'true')
      onLogin(true)
    } else {
      alert('Sai mật khẩu')
    }
  }

  return (
    <div style={S.wrap}>
      <div style={S.card}>
        {/* LEFT */}
        <div style={S.left}>
          <div style={S.logo}>AIoT</div>
          <h2 style={S.title}>AIoT EDU</h2>
          <p style={S.subtitle}>
            Hệ thống học tập & nghiên cứu AIoT — DLU
          </p>

          <form onSubmit={handleSubmit} style={{width:'100%'}}>
            <input
              type="password"
              placeholder="Nhập mật khẩu truy cập"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              style={S.input}
            />
            <button style={S.btn}>Đăng nhập</button>
          </form>
        </div>

        {/* RIGHT */}
        <div style={S.right}>
          <h3 style={S.contactTitle}>Liên hệ giảng viên</h3>

          <div style={S.info}>
            <div><strong>GV:</strong> Trần Vĩnh Phúc</div>
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:phuctv@dlu.edu.vn">phuctv@dlu.edu.vn</a>
            </div>
            <div>
              <strong>SĐT:</strong>{' '}
              <a href="tel:0976353605">0976353605</a>
            </div>
          </div>

          <p style={S.note}>
            Vui lòng liên hệ nếu bạn cần cấp quyền truy cập hệ thống.
          </p>
        </div>
      </div>
    </div>
  )
}
export default function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('auth')
    if (saved === 'true') setIsAuth(true)
  }, [])

  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0,0) }, [loc.pathname])

  if (!isAuth) {
  return <Login onLogin={setIsAuth} />
}

  return (
    <div className="layout">
      {open && <div className="overlay show" onClick={() => setOpen(false)} />}

      <aside className={`sidebar${open ? ' open' : ''}`}>
        <div style={{padding:'1rem .9rem',borderBottom:'1px solid var(--brd)',display:'flex',alignItems:'center',gap:'.6rem'}}>
          <div style={{width:30,height:30,borderRadius:7,background:'linear-gradient(135deg,var(--c),var(--g))',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,fontSize:'.85rem',color:'#000',flexShrink:0,fontFamily:'var(--fm)'}}>A</div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontWeight:800,fontSize:'.83rem',color:'var(--c)'}}>AIoT EDU</div>
            <div style={{fontSize:'.58rem',color:'var(--txt3)',fontFamily:'var(--fm)'}}>DLU — Khoa CNTT</div>
          </div>
          <button onClick={() => setOpen(false)} style={{background:'none',border:'none',color:'var(--txt3)',cursor:'pointer',fontSize:'.9rem',padding:'.2rem',display:'none'}} className="mob-close">&#10005;</button>
        </div>

        <nav style={{flex:1,padding:'.4rem .45rem',overflowY:'auto'}}>
          {NAV.map(g => (
            <div key={g.group}>
              <div className="nav-grp">{g.group}</div>
              {g.items.map(n => (
                <NavLink key={n.to} to={n.to} end={n.to === '/'}
                  className={({isActive}) => `nav-link${isActive ? ' on' : ''}`}>
                  {n.label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div style={{padding:'.7rem .9rem',borderTop:'1px solid var(--brd)',fontSize:'.64rem',color:'var(--txt3)',lineHeight:1.55}}>
          <div style={{fontWeight:600,color:'var(--txt2)',marginBottom:'.1rem'}}>GV. Trần Vĩnh Phúc</div>
          <a href="mailto:phuctv@dlu.edu.vn" style={{color:'var(--c)'}}>phuctv@dlu.edu.vn</a>
        </div>
      </aside>

      <div className="main">
        <div className="topbar">
          <button className="ham" onClick={() => setOpen(o => !o)}>&#9776;</button>
          <span style={{fontWeight:700,fontSize:'.87rem',color:'var(--c)',flex:1}}>AIoT EDU</span>
          <span style={{fontSize:'.6rem',color:'var(--txt3)',fontFamily:'var(--fm)'}}>DLU</span>
        </div>
        <main className="pg">
          <Routes>
            <Route path="/"          element={<Home/>}/>
            <Route path="/theory"    element={<Theory/>}/>
            <Route path="/labs"      element={<Labs/>}/>
            <Route path="/quiz"      element={<Quiz/>}/>
            <Route path="/exercises" element={<Exercises/>}/>
            <Route path="/thesis"    element={<Thesis/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/guide"     element={<Guide/>}/>
            <Route path="/contact"   element={<Contact/>}/>
          </Routes>
        </main>
      </div>
    </div>
  )
}
