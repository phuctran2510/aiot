import { LABS as L1, LAB_GROUPS as G1 } from './labs'
import { LABS_EXTRA as L2 }              from './labs_extra'

export const ALL_LABS = [...L1, ...L2]

export const ALL_LAB_GROUPS = [
  { id:'Cơ bản',     color:'#00e676', count: L1.filter(l=>l.group==='Cơ bản').length },
  { id:'Trung cấp',  color:'#00d4ff', count: L1.filter(l=>l.group==='Trung cấp').length },
  { id:'TinyML',     color:'#a855f7', count: L1.filter(l=>l.group==='TinyML').length },
  { id:'Hệ thống',   color:'#f59e0b', count: L1.filter(l=>l.group==='Hệ thống').length },
  { id:'Nâng cao',   color:'#2dd4bf', count: L2.length },
]
