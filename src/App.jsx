import { useState, useMemo } from 'react'
import { Scene, Icon, PhoneIcon, MailIcon, ShieldBadgeIcon } from './art.jsx'

export const COMPANY = {
  name: 'SVMS Chits Pvt Ltd',
  phone: '91 XXXXXXXXXX',
  email: 'info@svmschits.com',
  cin: 'CIN: U65992KA2015PTC082345',
}

export const GROUPS = [
  { value: 100000, months: 20, sub: 5000, tag: 'Starter Saver' },
  { value: 200000, months: 25, sub: 8000, tag: 'Family Goal' },
  { value: 500000, months: 40, sub: 12500, tag: 'Most Popular' },
  { value: 1000000, months: 40, sub: 25000, tag: 'Business Growth' },
  { value: 2500000, months: 50, sub: 50000, tag: 'High Net Worth' },
]

const STEPS = [
  ['Choose your Chit', 'Select a total chit amount and tenure (20 to 50 months) aligned with your monthly budget.'],
  ['Contribute Monthly', 'Deposit the fixed monthly installment conveniently via UPI, NEFT/IMPS or at your nearest branch.'],
  ['Participate in Auction', 'Join the monthly reverse auction in person or online. Bidders offer a discount to receive the pooled pot.'],
  ['Quick Fund Disbursal', 'Submit simple security documentation to receive prize money directly in your verified bank account.'],
  ['Earn Monthly Dividends', 'The auction discount after 5% company commission is distributed equally among all group members as dividend.'],
]

const FEATURES = [
  ['Registered & Regulated', '100% compliant with the Chit Funds Act, 1982 with prior state registration approval.'],
  ['Transparent Live Auctions', 'Fair, open bidding conducted on fixed dates every month with clear ledger transparency.'],
  ['Prompt Prize Settlement', 'Prize funds disbursed within days of security verification without hidden brokerage.'],
  ['Flexible Security Norms', 'Multiple collateral choices: property, FDR, gold, salary, or verified co-guarantors.'],
  ['Mobile-First Digital Access', 'Track monthly auctions, download passbooks, and pay subscriptions from your phone.'],
  ['Dedicated Relationship Officer', 'Personal guidance and prompt assistance for every subscriber throughout the chit tenure.'],
]

export const BRANCHES = [
  {
    name: 'Bengaluru - Head Office',
    phone: '91 XXXXXXXXXX',
    timing: 'Mon–Sat: 9:30 AM – 5:30 PM'
  },
  {
    name: 'Bengaluru - South Branch',
    phone: '91 XXXXXXXXXX',
    timing: 'Mon–Sat: 9:30 AM – 5:30 PM'
  },
  {
    name: 'Mysuru Branch',
    phone: '91 XXXXXXXXXX',
    timing: 'Mon–Sat: 9:30 AM – 5:30 PM'
  },
]

const TESTIMONIALS = [
  {
    name: 'Ravi Kumar',
    role: 'Retail Business Owner, Bengaluru',
    quote: 'I used my chit prize amount of ₹5 Lakhs to expand my inventory before the festive season. The auction process was transparent and the prize money reached my account within 48 hours.',
    avatar: '/images/avatar-ravi.jpg',
    chit: '₹5 Lakh Chit Winner',
    rating: 5,
  },
  {
    name: 'Meena Sundaram',
    role: 'Senior High School Teacher',
    quote: 'Chit funds with SVMS gave me a disciplined monthly habit to fund my daughter’s higher education. The monthly dividend consistently lowered my out-of-pocket installment.',
    avatar: '/images/avatar-meena.jpg',
    chit: '₹2 Lakh Chit Member',
    rating: 5,
  },
  {
    name: 'Arun Patel',
    role: 'Agri-Business & Farmer',
    quote: 'Needed immediate liquidity for modern farm equipment without the collateral delays of traditional loans. SVMS verified my security quickly and disbursed funds smoothly.',
    avatar: '/images/avatar-arun.jpg',
    chit: '₹10 Lakh Chit Winner',
    rating: 5,
  },
]

const GALLERY_ITEMS = [
  {
    k: 'family',
    title: 'Family Dreams & Milestones',
    desc: 'Disciplined monthly savings for children’s education, dream home down payment, and family weddings.',
    tag: 'Long-term Savings'
  },
  {
    k: 'calendar',
    title: 'Transparent Scheduled Auctions',
    desc: 'Fair monthly bidding on fixed dates with recorded minutes and full dividend disclosure to all members.',
    tag: '100% Transparent'
  },
  {
    k: 'coins',
    title: 'Guaranteed On-Time Payouts',
    desc: 'Prize money deposited directly into your bank account promptly upon document verification.',
    tag: 'Quick Disbursal'
  },
  {
    k: 'phone',
    title: 'Digital Payments & Passbook',
    desc: 'Pay your installments anytime via UPI or Netbanking and monitor dividends from your smartphone.',
    tag: 'Mobile Friendly'
  }
]

export const FAQS = [
  ['What is a chit fund and how does it work?', 'A chit fund is a unique indigenous financial instrument combining savings and borrowing. A group of members subscribes a fixed amount each month. Every month, the collected pool is auctioned to the subscriber willing to take the highest discount. The remaining discount, minus company commission, is distributed equally as dividend among all members.'],
  ['Is SVMS Chits legal and government registered?', 'Yes, absolutely. SVMS Chits Pvt Ltd is fully registered and regulated under the Central Chit Funds Act, 1982 and the Karnataka Chit Funds Rules. Every chit group is initiated only after obtaining sanction and registration from the Registrar of Chits.'],
  ['What documents are required to join a chit group?', 'Joining requires standard KYC documents: Passport-size photo, Aadhaar Card, PAN Card, address proof, and bank account details. Additional security documents are required only when claiming the prize money after winning an auction.'],
  ['What securities are acceptable for taking prize money?', 'We accept flexible securities including: Approved immovable property documents, fixed deposits with nationalized banks, government securities, gold, or personal sureties/guarantors (salaried employees or business owners).'],
  ['Can I pay my monthly chit installments online?', 'Yes! You can pay seamlessly using UPI (Google Pay, PhonePe, Paytm), Net Banking, IMPS/NEFT, or visit any of our physical branches across Karnataka.'],
]

export const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN')

export function Calculator() {
  const [idx, setIdx] = useState(2)
  const [disc, setDisc] = useState(25)
  const g = GROUPS[idx]
  const r = useMemo(() => {
    const discount = (g.value * disc) / 100
    const prize = g.value - discount
    const commission = g.value * 0.05
    const dividend = (discount - commission) / g.months
    return { prize, dividend, effective: g.sub - dividend, total: g.sub * g.months }
  }, [g, disc])

  return (
    <div className="calc">
      <div className="calc-in">
        <label>
          Select Chit Plan
          <select value={idx} onChange={e => setIdx(+e.target.value)}>
            {GROUPS.map((x, i) => (
              <option key={i} value={i}>
                {fmt(x.value)} &bull; {x.months} Months ({fmt(x.sub)}/mo)
              </option>
            ))}
          </select>
        </label>
        <div className="calc-slider-box">
          <div className="calc-slider-header">
            <span>Estimated Auction Discount</span>
            <b className="calc-discount-val">{disc}%</b>
          </div>
          <input
            type="range"
            min="5"
            max="40"
            value={disc}
            onChange={e => setDisc(+e.target.value)}
          />
          <div className="slider-ticks">
            <span>Min (5%)</span>
            <span>Typical (20-30%)</span>
            <span>Max (40%)</span>
          </div>
        </div>
        <p className="note">
          *Illustrative estimation only. Company foreman commission is 5% as mandated under the Chit Funds Act, 1982. Actual returns vary by monthly bidding behavior.
        </p>
      </div>
      <dl className="calc-out">
        <div className="calc-out-item">
          <dt>Nominal Monthly Subscription</dt>
          <dd>{fmt(g.sub)}</dd>
        </div>
        <div className="calc-out-item highlight-prize">
          <dt>Prize Money Received (Approx)</dt>
          <dd>{fmt(r.prize)}</dd>
        </div>
        <div className="calc-out-item">
          <dt>Dividend Earned Per Member</dt>
          <dd className="calc-green">+{fmt(r.dividend)}</dd>
        </div>
        <div className="calc-out-item net-payment">
          <dt>Effective Monthly Outflow</dt>
          <dd>{fmt(r.effective)}</dd>
        </div>
      </dl>
    </div>
  )
}

export function Contact() {
  const [f, setF] = useState({ name: '', phone: '', chit: '', msg: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = k => e => setF({ ...f, [k]: e.target.value })

  const submit = e => {
    e.preventDefault()
    const er = {}
    if (f.name.trim().length < 2) er.name = 'Please enter your full name.'
    if (!/^[6-9]\d{9}$/.test(f.phone.trim())) er.phone = 'Please enter a valid 10-digit Indian mobile number.'
    setErr(er)
    if (!Object.keys(er).length) setSent(true)
  }

  if (sent) {
    return (
      <div className="sent">
        <div className="sent-icon">✓</div>
        <h3>Thank you, {f.name}!</h3>
        <p>Our senior relationship officer will call you on <strong>{f.phone}</strong> within 2 hours to help you choose the best chit plan.</p>
        <button className="btn btn-outline-teal sm" onClick={() => setSent(false)}>Send Another Query</button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="form">
      <h3 className="form-title">Request a Callback</h3>
      <p className="form-sub">Speak with our certified chit fund advisor today.</p>
      <label>
        Full Name *
        <input
          placeholder="e.g. Ramesh Kumar"
          value={f.name}
          onChange={set('name')}
        />
        {err.name && <span className="err">{err.name}</span>}
      </label>
      <label>
        10-Digit Mobile Number *
        <input
          inputMode="numeric"
          maxLength="10"
          placeholder="e.g. 9876543210"
          value={f.phone}
          onChange={set('phone')}
        />
        {err.phone && <span className="err">{err.phone}</span>}
      </label>
      <label>
        Interested Chit Value
        <select value={f.chit} onChange={set('chit')}>
          <option value="">Select Chit Plan (Optional)</option>
          {GROUPS.map((x, i) => (
            <option key={i} value={x.value}>
              {fmt(x.value)} ({x.months} Months &bull; {fmt(x.sub)}/mo)
            </option>
          ))}
        </select>
      </label>
      <label>
        Message / Requirement
        <textarea
          rows="3"
          placeholder="Tell us what you are planning for (e.g. business expansion, wedding, emergency fund)..."
          value={f.msg}
          onChange={set('msg')}
        />
      </label>
      <button className="btn btn-primary-gold btn-full" type="submit">
        Request Free Consultation &rarr;
      </button>
    </form>
  )
}

export function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text-col">
            <div className="hero-pill">
              <ShieldBadgeIcon />
              <span>Regulated Under Chit Funds Act, 1982</span>
            </div>
            <h1>
              Save Together. <br className="d-desktop" />
              <span className="hero-highlight">Borrow Without Bank Delays.</span> <br className="d-desktop" />
              Grow With Trust.
            </h1>
            <p className="lead">
              SVMS Chits helps families and business owners build disciplined wealth and access timely emergency funds through 100% transparent, government-sanctioned chit groups.
            </p>
            <div className="hero-cta-group">
              <a className="btn btn-primary-gold" href="#/contact">
                Join a Chit Group &rarr;
              </a>
              <a className="btn btn-ghost-white" href="#/calculator">
                Calculate Returns
              </a>
            </div>
            <div className="hero-trust-badges">
              <div className="trust-item">
                <span className="trust-check">✓</span>
                <span>Fixed Monthly Auctions</span>
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span>
                <span>Instant UPI Online Payments</span>
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span>
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </div>

          <div className="hero-media-col">
            <div className="herobox">
              <Scene k="hero" cls="hs" alt="Family financial savings with SVMS Chits" />
              <div className="pot-card" aria-hidden="true">
                <div className="pot-header">
                  <span className="pot-pulse" />
                  <span className="pot-label">Active Group Auction</span>
                </div>
                <strong className="pot-val">₹5,00,000</strong>
                <ul className="pot-meta">
                  <li><strong>40</strong> Members</li>
                  <li><strong>₹12,500</strong> / month</li>
                  <li>Auction on <strong>10th</strong></li>
                </ul>
                <a href="#/plans" className="pot-action">View Group Details &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats">
        <div className="wrap stats-grid">
          {[
            ['25+', 'Years of Trust & Service'],
            ['10,000+', 'Active Happy Subscribers'],
            ['₹500 Cr+', 'Total Chit Turnover'],
            ['15+', 'Branches in Karnataka']
          ].map(([val, label]) => (
            <div key={label} className="stat-card">
              <b className="stat-val">{val}</b>
              <span className="stat-desc">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section on Home */}
      <section id="about" className="sec">
        <div className="wrap two-col-balanced">
          <div className="sec-text-content">
            <span className="sec-eyebrow">Why Choose SVMS</span>
            <h2>A Safe, Regulated Path to Financial Freedom</h2>
            <p>
              For over two and a half decades, <strong>SVMS Chits Pvt Ltd</strong> has empowered local merchants, professionals, and families to achieve their financial aspirations without cumbersome bank documentation.
            </p>
            <p>
              Unlike unorganized finance, every group we organize is registered with the state Registrar of Chits. We hold 100% of the chit value in bank deposits as security before commencing group subscriptions.
            </p>
            <div className="about-visual-card">
              <img
                src="/images/about-team.jpg"
                alt="SVMS Chits Team and Branch Office"
                className="about-preview-img"
                loading="lazy"
              />
              <div className="about-img-caption">
                <span>Operations &amp; Customer Care Team</span>
              </div>
            </div>
          </div>

          <div className="grid2">
            {FEATURES.map(([title, desc], i) => (
              <div className="card feature-card" key={title}>
                <Icon n={i} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section id="how-it-works" className="sec alt">
        <div className="wrap">
          <div className="sec-header-center">
            <span className="sec-eyebrow">Simple &amp; Transparent</span>
            <h2>How a Chit Fund Works in 5 Steps</h2>
            <p className="sub">
              A time-tested financial vehicle designed to balance monthly savings with immediate low-cost borrowing.
            </p>
          </div>
          <ol className="steps">
            {STEPS.map(([title, desc]) => (
              <li key={title} className="step-card">
                <h3>{title}</h3>
                <p>{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Chit Calculator */}
      <section id="calculator" className="sec">
        <div className="wrap">
          <div className="sec-header-center">
            <span className="sec-eyebrow">Smart Estimator</span>
            <h2>Interactive Chit Calculator</h2>
            <p className="sub">
              Slide the auction discount to preview your net monthly outflow, monthly dividend, and expected prize money.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      {/* Available Chit Plans Table */}
      <section id="groups" className="sec alt">
        <div className="wrap">
          <div className="sec-header-center">
            <span className="sec-eyebrow">Sanctioned Schemes</span>
            <h2>Popular Chit Groups Open for Enrolment</h2>
            <p className="sub">
              Groups start every month. Pick the chit value matching your savings target.
            </p>
          </div>
          <div className="tbl-card">
            <div className="tbl">
              <table>
                <thead>
                  <tr>
                    <th>Chit Value</th>
                    <th>Tenure</th>
                    <th>Monthly Subscription</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {GROUPS.map(g => (
                    <tr key={g.value}>
                      <td><strong>{fmt(g.value)}</strong></td>
                      <td>{g.months} Months</td>
                      <td><strong>{fmt(g.sub)}</strong> / month</td>
                      <td><span className="badge-tag">{g.tag}</span></td>
                      <td>
                        <a href="#/contact" className="btn btn-outline-teal sm">
                          Enquire Now
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="note text-center">
            *Government registered chit groups. Subscriptions subject to execution of standard chit agreement.
          </p>
        </div>
      </section>

      {/* Life with SVMS Chits (Image Gallery) */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-header-center">
            <span className="sec-eyebrow">Real Life Value</span>
            <h2>Life with SVMS Chits</h2>
            <p className="sub">
              From systematic monthly savings to the day you achieve your life goals.
            </p>
          </div>
          <div className="gallery-grid">
            {GALLERY_ITEMS.map(item => (
              <div key={item.k} className="gallery-card">
                <div className="gallery-img-container">
                  <Scene k={item.k} cls="gallery-thumb" alt={item.title} />
                  <span className="gallery-tag">{item.tag}</span>
                </div>
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-header-center">
            <span className="sec-eyebrow">Customer Stories</span>
            <h2>Trusted by 10,000+ Happy Subscribers</h2>
            <p className="sub">
              Hear directly from people who have grown their businesses and secured family goals with SVMS Chits.
            </p>
          </div>
          <div className="grid3 testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="card testimonial-card" key={i}>
                <div className="testimonial-rating">
                  {'★'.repeat(t.rating)}
                </div>
                <blockquote className="testimonial-quote">
                  "{t.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                  <div className="testimonial-meta">
                    <strong className="testimonial-name">{t.name}</strong>
                    <span className="testimonial-role">{t.role}</span>
                    <span className="testimonial-badge">{t.chit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="sec">
        <div className="wrap">
          <div className="sec-header-center">
            <span className="sec-eyebrow">Our Presence</span>
            <h2>Visit Our Branch Offices</h2>
            <p className="sub">
              Walk in for fast enrollment, document verification, and in-person auction participation.
            </p>
          </div>
          <div className="grid3">
            {BRANCHES.map((b, i) => (
              <div className="card branch-card" key={i}>
                <div className="branch-img-wrap">
                  <img
                    src="/images/building.jpg"
                    alt={b.name}
                    className="branch-img"
                    loading="lazy"
                  />
                  <span className="branch-badge">Active Branch</span>
                </div>
                <div className="branch-content">
                  <h3>{b.name}</h3>
                  <p className="branch-time"><strong>Hours:</strong> {b.timing}</p>
                  <a href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-outline-teal sm btn-full">
                    Call Branch: {b.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="sec alt">
        <div className="wrap narrow">
          <div className="sec-header-center">
            <span className="sec-eyebrow">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p className="sub">Everything you need to know about joining and bidding in a chit fund.</p>
          </div>
          <div className="faq-list">
            {FAQS.map(([q, a], i) => (
              <div className="faq-card" key={q}>
                <button
                  className="faq-trigger"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="faq-q-text">{q}</span>
                  <span className={`faq-icon ${openFaq === i ? 'faq-icon-open' : ''}`}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="faq-ans">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sec">
        <div className="wrap two-col-balanced">
          <div className="contact-info-col">
            <span className="sec-eyebrow">Get in Touch</span>
            <h2>We’re Here to Help You Save Better</h2>
            <p>
              Whether you are looking for systematic monthly investment or need immediate capital for your business, our experienced advisors will guide you through registered chit groups.
            </p>

            <div className="support-officer-card">
              <img
                src="/images/support.jpg"
                alt="Dedicated Relationship Manager"
                className="support-officer-avatar"
                loading="lazy"
              />
              <div>
                <strong>Need immediate assistance?</strong>
                <p className="small">Your dedicated relationship officer is available Monday to Saturday.</p>
              </div>
            </div>

            <div className="contact-details-box">
              <div className="c-item">
                <span className="c-icon"><PhoneIcon /></span>
                <div>
                  <strong>Phone Support</strong>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a>
                </div>
              </div>
              <div className="c-item">
                <span className="c-icon"><MailIcon /></span>
                <div>
                  <strong>Email Inquiries</strong>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
              <div className="c-item">
                <span className="c-icon"><ShieldBadgeIcon /></span>
                <div>
                  <strong>Working Hours</strong>
                  <span>Mon &ndash; Sat: 9:30 AM &ndash; 5:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <Contact />
          </div>
        </div>
      </section>
    </>
  )
}
