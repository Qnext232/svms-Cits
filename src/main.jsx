import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './App.jsx'
import Shell from './Shell.jsx'
import * as P from './pages.jsx'
import './styles.css'

const ROUTES = { '/': Home, '/about': P.About, '/plans': P.Plans, '/calculator': P.CalcPage, '/auctions': P.Auctions, '/branches': P.Branches,
  '/downloads': P.Downloads, '/careers': P.Careers, '/faq': P.FAQPage, '/contact': P.ContactPage, '/pay': P.Pay,
  '/privacy': P.Privacy, '/terms': P.Terms }
const get = () => location.hash.replace(/^#/, '') || '/'

function Router() {
  const [r, setR] = useState(get())
  useEffect(() => {
    const f = () => { setR(get()); window.scrollTo(0, 0) }
    addEventListener('hashchange', f); return () => removeEventListener('hashchange', f)
  }, [])
  const Page = ROUTES[r] || P.NotFound
  return <Shell route={r}><Page /></Shell>
}
createRoot(document.getElementById('root')).render(<Router />)
