import { useState } from 'react'

// Real photography assets stored in /public/images/
export const PHOTOS = {
  hero: '/images/hero.jpg',
  family: '/images/family.jpg',
  growth: '/images/growth.jpg',
  shield: '/images/shield.jpg',
  calendar: '/images/calendar.jpg',
  coins: '/images/coins.jpg',
  phone: '/images/phone.jpg',
  building: '/images/building.jpg',
  community: '/images/community.jpg',
  'about-team': '/images/about-team.jpg',
  support: '/images/support.jpg',
  'avatar-ravi': '/images/avatar-ravi.jpg',
  'avatar-meena': '/images/avatar-meena.jpg',
  'avatar-arun': '/images/avatar-arun.jpg',
}

const T = '#0f766e', G = '#d4a017', I = '#14213d', L = '#e6f4f1', S = '#f2c9a0'
const Person = ({ x, y, c, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle cy="-34" r="14" fill={S} />
    <path d="M-22 26v-28a22 22 0 0 1 44 0v28z" fill={c} />
  </g>
)

const Coin = ({ x, y, r = 16 }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill={G} />
    <circle cx={x} cy={y} r={r - 4} fill="none" stroke="#fff3c4" strokeWidth="2" />
    <text x={x} y={y + r / 3} textAnchor="middle" fontSize={r} fontWeight="700" fill="#fff3c4">₹</text>
  </g>
)

const SCENES = {
  hero: (
    <>
      <circle cx="330" cy="70" r="40" fill="#fff3c4" />
      <path d="M0 250q100-40 200-10t200-20v80H0z" fill={T} opacity=".25" />
      <rect x="150" y="150" width="100" height="100" rx="18" fill={T} />
      <rect x="140" y="135" width="120" height="26" rx="10" fill={I} />
      <Coin x={200} y={110} r={22} />
      <Coin x={165} y={85} r={14} />
      <Coin x={238} y={80} r={16} />
      <Person x={80} y={228} c={G} />
      <Person x={320} y={228} c={I} />
      <Person x={45} y={236} c={T} s=".8" />
    </>
  ),
  family: (
    <>
      <path d="M130 110 200 55l70 55v20H130z" fill={G} />
      <rect x="145" y="110" width="110" height="20" fill="#fff3c4" />
      <Person x={160} y={215} c={T} />
      <Person x={240} y={215} c={I} />
      <Person x={200} y={232} c={G} s=".7" />
      <path d="M0 255h400v45H0z" fill={T} opacity=".3" />
    </>
  ),
  growth: (
    <>
      <rect x="70" y="170" width="50" height="90" rx="6" fill={T} opacity=".5" />
      <rect x="140" y="130" width="50" height="130" rx="6" fill={T} opacity=".7" />
      <rect x="210" y="90" width="50" height="170" rx="6" fill={T} />
      <rect x="280" y="50" width="50" height="210" rx="6" fill={I} />
      <path d="M60 150 150 110 230 70 320 30" stroke={G} strokeWidth="6" fill="none" strokeLinecap="round" />
      <Coin x={320} y={30} r={18} />
    </>
  ),
  shield: (
    <>
      <path d="M200 40 290 75v75c0 55-40 90-90 110-50-20-90-55-90-110V75z" fill={T} />
      <path d="M200 60 272 88v62c0 44-32 74-72 91-40-17-72-47-72-91V88z" fill="#fff" opacity=".12" />
      <path d="M158 150l30 30 56-62" stroke="#fff" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Coin x={300} y={70} r={14} />
    </>
  ),
  building: (
    <>
      <rect x="120" y="60" width="160" height="200" rx="8" fill={I} />
      {[0, 1, 2, 3].map(r => [0, 1, 2].map(c => <rect key={r + '' + c} x={140 + c * 48} y={80 + r * 40} width="30" height="24" rx="3" fill={(r + c) % 2 ? G : '#fff3c4'} />))}
      <rect x="185" y="215" width="30" height="45" fill={T} />
      <circle cx="70" cy="215" r="30" fill={T} />
      <rect x="66" y="230" width="8" height="30" fill="#7a5230" />
      <circle cx="335" cy="225" r="24" fill={T} opacity=".7" />
    </>
  ),
  phone: (
    <>
      <rect x="140" y="30" width="120" height="240" rx="22" fill={I} />
      <rect x="150" y="48" width="100" height="204" rx="12" fill="#fff" />
      <rect x="162" y="64" width="76" height="14" rx="7" fill={L} />
      <Coin x={200} y={125} r={26} />
      <circle cx="200" cy="200" r="22" fill={T} />
      <path d="M189 200l8 8 15-17" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
      <Coin x={96} y={90} r={14} />
      <Coin x={310} y={170} r={18} />
    </>
  ),
  coins: (
    <>
      {[0, 1, 2, 3].map(i => <ellipse key={i} cx="150" cy={220 - i * 22} rx="55" ry="16" fill={G} stroke="#a87b00" strokeWidth="3" />)}
      {[0, 1, 2].map(i => <ellipse key={i} cx="270" cy={225 - i * 22} rx="50" ry="15" fill={G} stroke="#a87b00" strokeWidth="3" />)}
      <Coin x={210} y={90} r={30} />
      <Coin x={300} y={110} r={14} />
    </>
  ),
  calendar: (
    <>
      <rect x="90" y="60" width="220" height="190" rx="14" fill="#fff" />
      <rect x="90" y="60" width="220" height="44" rx="14" fill={T} />
      {[0, 1, 2, 3, 4].map(r => [0, 1, 2, 3].map(c => <rect key={r + '' + c} x={110 + c * 48} y={120 + r * 25} width="32" height="16" rx="4" fill={r === 2 && c === 1 ? G : L} />))}
      <Coin x={310} y={70} r={20} />
    </>
  ),
  doc: (
    <>
      <rect x="120" y="40" width="160" height="220" rx="12" fill="#fff" />
      <path d="M240 40l40 40h-40z" fill={L} />
      {[0, 1, 2, 3, 4].map(i => <rect key={i} x="140" y={100 + i * 26} width={i === 4 ? 70 : 120} height="10" rx="5" fill={i === 0 ? G : L} />)}
      <circle cx="260" cy="235" r="26" fill={T} />
      <path d="M248 235l9 9 16-18" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
    </>
  ),
  community: (
    <>
      <circle cx="200" cy="150" r="90" fill="none" stroke={T} strokeWidth="3" strokeDasharray="6 8" />
      <Coin x={200} y={150} r={30} />
      <Person x={200} y={85} c={T} s=".7" />
      <Person x={285} y={150} c={G} s=".7" />
      <Person x={255} y={235} c={I} s=".7" />
      <Person x={145} y={235} c={G} s=".7" />
      <Person x={115} y={150} c={I} s=".7" />
    </>
  ),
  help: (
    <>
      <rect x="80" y="60" width="170" height="90" rx="20" fill={T} />
      <path d="M120 150l-8 34 40-34z" fill={T} />
      <rect x="150" y="125" width="170" height="90" rx="20" fill={G} />
      <path d="M280 215l8 34-40-34z" fill={G} />
      {[0, 1, 2].map(i => <circle key={i} cx={130 + i * 30} cy="105" r="8" fill="#fff" />)}
      <rect x="175" y="160" width="110" height="10" rx="5" fill="#fff" />
      <rect x="175" y="182" width="70" height="10" rx="5" fill="#fff" />
    </>
  ),
  lock: (
    <>
      <rect x="130" y="130" width="140" height="120" rx="16" fill={T} />
      <path d="M160 130v-30a40 40 0 0 1 80 0v30" stroke={I} strokeWidth="14" fill="none" />
      <circle cx="200" cy="185" r="16" fill={G} />
      <rect x="195" y="190" width="10" height="28" rx="4" fill={G} />
      <Coin x={310} y={80} r={16} />
    </>
  ),
}

export function Scene({ k = 'hero', cls = '', alt = '' }) {
  const [hasError, setHasError] = useState(false)
  const photoUrl = PHOTOS[k]

  if (photoUrl && !hasError) {
    return (
      <div className={`scene-wrap ${cls}`}>
        <img
          className={`scene-img ${cls}`}
          src={photoUrl}
          alt={alt || `${k} visual`}
          loading="lazy"
          onError={() => setHasError(true)}
        />
        <div className="scene-overlay" aria-hidden="true" />
      </div>
    )
  }

  return (
    <svg className={'scene ' + cls} viewBox="0 0 400 300" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={'bgA' + k} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#e6f4f1" />
          <stop offset="1" stopColor="#fff4d6" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="24" fill={`url(#bgA${k})`} />
      {SCENES[k] || SCENES.shield}
    </svg>
  )
}

const ICONS = [
  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  <><circle cx="12" cy="12" r="9" /><path d="M9 8h6M9 12h6M11 8c4 0 4 5 0 5l4 4" /></>,
  <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></>,
  <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6M15 15c3 0 6 1 6 5" /></>,
  <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="6" rx="1" /><rect x="17" y="13" width="4" height="6" rx="1" /></>
]

export const Icon = ({ n = 0 }) => (
  <i className="ic">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[n % 6]}
    </svg>
  </i>
)

// Standalone SVG helpers for crisp header and components
export const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

export const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export const ShieldBadgeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const LockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

export const CreditCardIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
)
