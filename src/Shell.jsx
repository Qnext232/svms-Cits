import { useState, useEffect } from 'react'
import { COMPANY } from './App.jsx'
import { Scene, PhoneIcon, MailIcon, ShieldBadgeIcon, CreditCardIcon } from './art.jsx'

const NAV = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/plans', 'Chit plans'],
  ['/calculator', 'Calculator'],
  ['/auctions', 'Auctions'],
  ['/branches', 'Branches'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact']
]

export default function Shell({ route, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Listen to scroll to add shadow/elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change or ESC key
  useEffect(() => {
    setMenuOpen(false)
  }, [route])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      {/* Top Announcement & Quick Contact Bar */}
      <div className="topbar">
        <div className="wrap topbar-inner">
          <div className="topbar-left">
            <span className="badge-regd">
              <ShieldBadgeIcon />
              <span>Govt. Regd. Chit Fund</span>
              <span className="d-desktop">&bull; Chit Funds Act, 1982</span>
            </span>
            <span className="topbar-hours d-desktop">
              Mon &ndash; Sat: 9:30 AM &ndash; 5:30 PM
            </span>
          </div>
          <div className="topbar-right">
            <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="topbar-link topbar-phone">
              <PhoneIcon /> <span>{COMPANY.phone}</span>
            </a>
            <span className="sep d-desktop">&bull;</span>
            <a href={`mailto:${COMPANY.email}`} className="topbar-link d-desktop">
              <MailIcon /> <span>{COMPANY.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`hdr ${scrolled ? 'hdr-scrolled' : ''}`}>
        <div className="wrap hdr-container">
          {/* Brand Logo */}
          <a href="#/" className="logo" aria-label="SVMS Chits Home">
            <div className="logo-emblem">
              <svg viewBox="0 0 40 40" width="36" height="36" fill="none">
                <circle cx="20" cy="20" r="18" fill="url(#logoG)" />
                <path d="M14 27h12l-2-7h-8z" fill="#d4a017" />
                <path d="M20 9l5 7h-10z" fill="#ffffff" />
                <circle cx="20" cy="18" r="3.5" fill="#fef08a" />
                <path d="M11 20q9-12 18 0" stroke="#fff3c4" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="logoG" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f766e" />
                    <stop offset="1" stopColor="#093f3b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logo-text">
              <span className="brand-name">SVMS <span className="brand-gold">Chits</span></span>
              <span className="brand-sub">Pvt Ltd &bull; Trusted Since 2001</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {NAV.map(([p, n]) => {
              const active = route === p
              return (
                <a
                  key={p}
                  href={'#' + p}
                  className={`nav-link ${active ? 'nav-link-active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {n}
                  {active && <span className="nav-indicator" />}
                </a>
              )
            })}
          </nav>

          {/* Header Actions */}
          <div className="hdr-actions">
            <a className="btn btn-primary-gold btn-header" href="#/pay">
              <CreditCardIcon />
              <span>Pay Online</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`burger-btn ${menuOpen ? 'burger-active' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="burger-line line-1"></span>
              <span className="burger-line line-2"></span>
              <span className="burger-line line-3"></span>
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer & Backdrop */}
        <div
          className={`mobile-backdrop ${menuOpen ? 'backdrop-visible' : ''}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <div className={`mobile-drawer ${menuOpen ? 'drawer-open' : ''}`} aria-hidden={!menuOpen}>
          <div className="mobile-drawer-inner">
            {/* Quick Action Button in Mobile Drawer */}
            <div className="mobile-actions-row">
              <a
                className="btn btn-primary-gold btn-full"
                href="#/pay"
                onClick={() => setMenuOpen(false)}
              >
                <CreditCardIcon />
                <span>Pay Online</span>
              </a>
            </div>

            {/* Nav Links */}
            <div className="mobile-nav-links">
              {NAV.map(([p, n]) => {
                const active = route === p
                return (
                  <a
                    key={p}
                    href={'#' + p}
                    className={`mobile-nav-item ${active ? 'mobile-nav-active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{n}</span>
                    <span className="mobile-arrow">&rarr;</span>
                  </a>
                )
              })}
            </div>

            {/* Mobile Drawer Support Card */}
            <div className="mobile-contact-box">
              <p className="mobile-contact-title">Need guidance on chit plans?</p>
              <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="mobile-call-btn">
                <PhoneIcon /> Call Relationship Manager
              </a>
              <span className="mobile-time">Office: Mon &ndash; Sat, 9:30 AM &ndash; 5:30 PM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content">
        {children}
      </main>

      {/* Bottom CTA Band with Photo */}
      <section className="band">
        <div className="wrap bn">
          <div className="band-content">
            <span className="sub-badge">Start Small &bull; Grow Big</span>
            <h2>Ready to start your chit group?</h2>
            <p>Speak to our certified relationship officers to find a savings group tailored to your financial goals.</p>
            <div className="band-actions">
              <a className="btn btn-primary-gold" href="#/contact">Get a Call Back</a>
              <a className="btn btn-ghost-white" href="#/calculator">Calculate Returns</a>
            </div>
          </div>
          <div className="band-img-wrap">
            <Scene k="growth" cls="bs" alt="Financial Growth with SVMS Chits" />
          </div>
        </div>
      </section>

      {/* Modern High-Trust Footer */}
      <footer className="ftr">
        <div className="wrap">
          <div className="fgrid">
            {/* Col 1: Brand Info */}
            <div className="fcol-brand">
              <div className="logo logo-footer">
                <div className="logo-emblem">
                  <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
                    <circle cx="20" cy="20" r="18" fill="#0f766e" />
                    <circle cx="20" cy="18" r="4" fill="#fef08a" />
                    <path d="M12 25h16" stroke="#d4a017" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="logo-text">
                  <span className="brand-name light-text">SVMS <span className="brand-gold">Chits</span></span>
                  <span className="brand-sub light-sub">Pvt Ltd</span>
                </div>
              </div>
              <p className="small brand-desc">
                Regulated and registered under the Chit Funds Act, 1982. Providing disciplined savings and instant borrowing power to families, entrepreneurs, and businesses for over 25 years.
              </p>
              <div className="f-badges">
                <span className="f-badge">&bull; 100% Regulated</span>
                <span className="f-badge">&bull; Registrar of Chits Approved</span>
              </div>
            </div>

            {/* Col 2: Chit Links */}
            <div>
              <h4 className="ftr-heading">Explore</h4>
              <ul className="ftr-links">
                <li><a href="#/">Home</a></li>
                <li><a href="#/about">About Company</a></li>
                <li><a href="#/plans">Chit Plans</a></li>
                <li><a href="#/calculator">Chit Calculator</a></li>
                <li><a href="#/auctions">Auction Results</a></li>
                <li><a href="#/branches">Branch Network</a></li>
              </ul>
            </div>

            {/* Col 3: Member Services */}
            <div>
              <h4 className="ftr-heading">Member Services</h4>
              <ul className="ftr-links">
                <li><a href="#/pay">Pay Online</a></li>
                <li><a href="#/downloads">Download Forms & KYC</a></li>
                <li><a href="#/faq">Frequently Asked Questions</a></li>
                <li><a href="#/careers">Careers at SVMS</a></li>
                <li><a href="#/contact">Customer Support</a></li>
              </ul>
            </div>

            {/* Col 4: Contact & Support */}
            <div>
              <h4 className="ftr-heading">Customer Support</h4>
              <p className="small ftr-contact-item">
                <strong>Helpline:</strong><br />
                <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}>{COMPANY.phone}</a>
              </p>
              <p className="small ftr-contact-item">
                <strong>Email Support:</strong><br />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
              <p className="small ftr-contact-item">
                <strong>Office Timings:</strong><br />
                Mon &ndash; Sat: 9:30 AM &ndash; 5:30 PM
              </p>
              <p className="small ftr-contact-item">
                <span className="f-cin">{COMPANY.cin}</span>
              </p>
            </div>
          </div>

          <div className="ftr-bottom">
            <p className="small compliance-note">
              <strong>Statutory Disclosure:</strong> Chit funds are regulated under the Central Chit Funds Act, 1982 and relevant State Chit Fund Rules. Prospective subscribers are requested to read the sanctioned chit agreement and verify state registrar registration prior to enrolment.
            </p>
            <div className="ftr-legal-links">
              <span>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
              <a href="#/privacy">Privacy Policy</a>
              <span>&bull;</span>
              <a href="#/terms">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
