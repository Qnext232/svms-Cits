import { useState } from 'react'
import { Scene, Icon, PhoneIcon, MailIcon } from './art.jsx'
import { Calculator, Contact, GROUPS, FAQS, BRANCHES, COMPANY, fmt } from './App.jsx'

const ART = {
  'About SVMS Chits': 'family',
  'Chit plans': 'coins',
  'Chit calculator': 'growth',
  'Auction results': 'calendar',
  'Our branches': 'building',
  Downloads: 'shield',
  Careers: 'community',
  'Frequently asked questions': 'help',
  'Contact us': 'support',
  'Pay online': 'phone',
  'Privacy policy': 'shield',
  'Terms and conditions': 'shield',
  'Page not found': 'help'
}

const Page = ({ t, sub, children }) => (
  <>
    <div className="banner">
      <div className="wrap bn">
        <div className="banner-text">
          <span className="banner-tag">SVMS Chits Pvt Ltd</span>
          <h1 className="ph">{t}</h1>
          {sub && <p className="banner-sub">{sub}</p>}
        </div>
        <div className="banner-media">
          <Scene k={ART[t] || 'shield'} cls="bs" alt={t} />
        </div>
      </div>
    </div>
    <section className="sec">
      <div className="wrap">{children}</div>
    </section>
  </>
)

const Table = ({ head, rows }) => (
  <div className="tbl-card">
    <div className="tbl">
      <table>
        <thead>
          <tr>{head.map(h => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export const About = () => (
  <Page
    t="About SVMS Chits"
    sub="A government-registered chit fund company built on 25+ years of trust, financial discipline, and punctual payments."
  >
    <div className="about-page-hero">
      <div className="about-page-img-wrap">
        <img
          src="/images/about-team.jpg"
          alt="SVMS Chits Leadership and Head Office"
          className="about-page-img"
          loading="lazy"
        />
        <div className="about-page-badge">
          <strong>25+ Years</strong>
          <span>Serving Karnataka</span>
        </div>
      </div>
      <div className="about-page-text">
        <h2>Fostering Community Prosperity Since 2001</h2>
        <p>
          SVMS Chits Pvt Ltd was founded with a singular purpose: to provide families, shopkeepers, and micro-entrepreneurs with a reliable, structured way to save systematically and access emergency liquidity without bureaucratic bottlenecks.
        </p>
        <p>
          We operate under the strict supervision of the Chit Funds Act, 1982. Before a single rupee is collected from members, 100% of the aggregate chit value is deposited as an irrevocable fixed deposit in the name of the Registrar of Chits, assuring absolute peace of mind.
        </p>
      </div>
    </div>

    <div className="grid3 gap">
      {[
        ['Our Heritage', 'Established by seasoned financial professionals to bring formal banking transparency to traditional community chit funds.'],
        ['Our Mission', 'To cultivate saving habits across every household and deliver prompt, hassle-free credit to thriving businesses.'],
        ['Our Core Guarantee', 'Fair, audited auctions, zero hidden charges, and immediate electronic disbursal of prize amounts.']
      ].map(([title, desc], i) => (
        <div className="card feature-card" key={title}>
          <Icon n={i + 1} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>

    <h2 className="gap">Board of Directors &amp; Management</h2>
    <Table
      head={['Name', 'Designation', 'Experience']}
      rows={[
        ['S. B. Maheshwarappa', 'Managing Director', '30+ Years in Financial Services'],
        ['B. M. Shivakumar', 'Executive Director', '22+ Years in Chit Fund Administration'],
        ['K. R. Ananth Kumar', 'General Manager (Operations)', '18+ Years in Audit & Regulatory Compliance']
      ]}
    />

    <h2 className="gap">Regulatory Approvals &amp; Compliance</h2>
    <div className="card compliance-box">
      <p>
        <strong>Government Registration:</strong> Incorporated under the Companies Act with the Ministry of Corporate Affairs (MCA). CIN: <code>{COMPANY.cin}</code>.
      </p>
      <p>
        <strong>Chit Fund Sanction:</strong> All chit groups are conducted under previous sanction granted by the Registrar of Chits, Government of Karnataka, in accordance with Section 4 of the Central Chit Funds Act, 1982.
      </p>
    </div>
  </Page>
)

export const Plans = () => (
  <Page
    t="Chit plans"
    sub="Explore carefully crafted monthly chit groups to match your short-term savings or capital borrowing needs."
  >
    <div className="grid3">
      {GROUPS.map(g => (
        <div className="card plan-card" key={g.value}>
          <div className="plan-header">
            <span className="badge-tag">{g.tag}</span>
            <span className="plan-tenure">{g.months} Months</span>
          </div>
          <div className="plan-price">
            <small>Chit Value</small>
            <h3>{fmt(g.value)}</h3>
          </div>
          <div className="plan-details">
            <div className="plan-row">
              <span>Monthly Subscription:</span>
              <strong>{fmt(g.sub)}</strong>
            </div>
            <div className="plan-row">
              <span>Total Members:</span>
              <strong>{g.months}</strong>
            </div>
            <div className="plan-row">
              <span>Auction Frequency:</span>
              <strong>Monthly</strong>
            </div>
          </div>
          <a className="btn btn-primary-gold btn-full sm" href="#/contact">
            Enquire for this Group &rarr;
          </a>
        </div>
      ))}
    </div>

    <div className="card gap how-chit-member-works">
      <h3>Prized vs. Non-Prized Members: Understanding Your Returns</h3>
      <div className="two-col-balanced">
        <div>
          <h4 className="color-teal">Non-Prized Subscribers (Saver Mode)</h4>
          <p>
            Members who continue saving until the final months earn attractive dividends every single month from the auction discounts. This yields a net return often superior to conventional bank deposits, with zero market volatility.
          </p>
        </div>
        <div>
          <h4 className="color-gold">Prized Subscribers (Borrower Mode)</h4>
          <p>
            Members who bid for the prize money in earlier months access instant lump-sum capital at competitive interest equivalents. After simple security verification, funds are released quickly without loan processing fees.
          </p>
        </div>
      </div>
    </div>
  </Page>
)

export const CalcPage = () => (
  <Page
    t="Chit calculator"
    sub="Easily calculate and plan your monthly chit installments, prize amounts, and dividend earnings."
  >
    <Calculator />
  </Page>
)

export const Auctions = () => (
  <Page
    t="Auction results"
    sub="Transparent monthly auction summaries. Members can attend in person or follow results online."
  >
    <Table
      head={['Chit Group', 'Month No.', 'Auction Date', 'Winning Discount', 'Prize Money Paid', 'Status']}
      rows={[
        ['SVMS-G101 (₹5,00,000)', '14 of 40', '10th Oct 2026', '24.5%', fmt(377500), 'Disbursed'],
        ['SVMS-G102 (₹10,00,000)', '08 of 40', '12th Oct 2026', '22.0%', fmt(780000), 'Disbursed'],
        ['SVMS-G103 (₹2,00,000)', '19 of 25', '15th Oct 2026', '26.0%', fmt(148000), 'Disbursed'],
        ['SVMS-G104 (₹25,00,000)', '06 of 50', '18th Oct 2026', '20.0%', fmt(2000000), 'Disbursed'],
        ['SVMS-G105 (₹1,00,000)', '12 of 20', '20th Oct 2026', '21.0%', fmt(79000), 'Disbursed']
      ]}
    />
    <p className="note">
      *Official auction results are signed by the authorized foreman and presiding members in adherence to Chit Fund Rules.
    </p>
  </Page>
)

export const Branches = () => (
  <Page
    t="Our branches"
    sub="Visit any of our convenient branches across Karnataka for enrollment, security verification, or friendly advisory."
  >
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
            <span className="branch-badge">Walk-ins Welcome</span>
          </div>
          <div className="branch-content">
            <h3>{b.name}</h3>
            <p className="branch-time"><strong>Timing:</strong> {b.timing}</p>
            <div className="branch-actions">
              <a href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-outline-teal sm btn-full">
                <PhoneIcon /> Call: {b.phone}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Page>
)

export const Downloads = () => (
  <Page
    t="Downloads"
    sub="Download official membership application kits, KYC guidelines, and sample chit agreements."
  >
    <Table
      head={['Document Name', 'Format', 'Description', 'Action']}
      rows={[
        ['Chit Membership Enrollment Application', 'PDF (320 KB)', 'Standard enrollment form for new subscribers', <a href="#/downloads" className="color-teal font-semibold">Download PDF</a>],
        ['KYC Verification Checklist & Guidelines', 'PDF (180 KB)', 'List of acceptable ID, address and income proofs', <a href="#/downloads" className="color-teal font-semibold">Download PDF</a>],
        ['Prize Money Claim & Security Form', 'PDF (450 KB)', 'Documentation checklist for auction winners', <a href="#/downloads" className="color-teal font-semibold">Download PDF</a>],
        ['Sample Sanctioned Chit Agreement', 'PDF (620 KB)', 'Standard statutory agreement under Chit Funds Act', <a href="#/downloads" className="color-teal font-semibold">Download PDF</a>]
      ]}
    />
  </Page>
)

export const Careers = () => (
  <Page
    t="Careers"
    sub="Build a rewarding career in registered financial services. Join a warm, professional team with high growth potential."
  >
    <Table
      head={['Open Position', 'Location', 'Experience', 'Job Type']}
      rows={[
        ['Senior Relationship Officer (Chit Advisory)', 'Bengaluru Branches', '2–5 Years in Banking/Chits', 'Full Time'],
        ['Branch Operations & Accounts Officer', 'Mysuru Branch', '3+ Years in Tally / Financial Accounting', 'Full Time'],
        ['Field Verification & Collection Executive', 'Bengaluru South & North', '1–2 Years experience with two-wheeler', 'Full Time'],
        ['Customer Care Representative', 'Head Office, Bengaluru', 'Fresher / 1 Year (Fluent in Kannada & English)', 'Full Time']
      ]}
    />
    <div className="card gap">
      <h3>How to Apply</h3>
      <p>
        Send your updated CV and cover letter mentioning the position to{' '}
        <a href={`mailto:${COMPANY.email}`}><strong>{COMPANY.email}</strong></a>{' '}
        or contact our HR department at <strong>{COMPANY.phone}</strong>.
      </p>
    </div>
  </Page>
)

export const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <Page
      t="Frequently asked questions"
      sub="Clear answers to common questions regarding chit fund operations, bidding rules, and government security."
    >
      <div className="narrow">
        <div className="faq-list">
          {FAQS.map(([q, a], i) => (
            <div className="faq-card" key={q}>
              <button
                className="faq-trigger"
                aria-expanded={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="faq-q-text">{q}</span>
                <span className={`faq-icon ${openIdx === i ? 'faq-icon-open' : ''}`}>
                  {openIdx === i ? '−' : '+'}
                </span>
              </button>
              {openIdx === i && (
                <div className="faq-ans">
                  <p>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}

export const ContactPage = () => (
  <Page
    t="Contact us"
    sub="Have questions about chit plans or need personalized advice? Reach out to our customer care team."
  >
    <div className="two-col-balanced">
      <div className="contact-info-col">
        <h3>Connect Directly With Our Team</h3>
        <p>
          Visit our registered office or talk to our relationship officers. We are happy to walk you through our registered chit schemes.
        </p>

        <div className="support-officer-card">
          <img
            src="/images/support.jpg"
            alt="Customer Support Executive"
            className="support-officer-avatar"
            loading="lazy"
          />
          <div>
            <strong>Dedicated Relationship Desk</strong>
            <p className="small">We respond to callbacks within 2 business hours.</p>
          </div>
        </div>

        <div className="contact-details-box">
          <div className="c-item">
            <span className="c-icon"><PhoneIcon /></span>
            <div>
              <strong>Helpline Phone</strong>
              <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}>{COMPANY.phone}</a>
            </div>
          </div>
          <div className="c-item">
            <span className="c-icon"><MailIcon /></span>
            <div>
              <strong>Email Us</strong>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
          </div>
          <div className="c-item">
            <span className="c-icon">🕒</span>
            <div>
              <strong>Working Hours</strong>
              <span>Mon &ndash; Sat: 9:30 AM &ndash; 5:30 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  </Page>
)

export const Pay = () => {
  const [memberId, setMemberId] = useState('')
  const [groupNo, setGroupNo] = useState('')
  const [amount, setAmount] = useState('')
  const [payMethod, setPayMethod] = useState('upi')
  const [done, setDone] = useState(false)

  const handlePay = (e) => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <Page
      t="Pay online"
      sub="Pay your monthly chit installment securely with instant receipt generation."
    >
      <div className="narrow">
        {done ? (
          <div className="sent">
            <div className="sent-icon">✓</div>
            <h3>Payment Initialized</h3>
            <p>
              Initiating secure gateway transaction for <strong>₹{Number(amount).toLocaleString('en-IN')}</strong> for Member <strong>{memberId}</strong> (Group {groupNo}).
            </p>
            <button className="btn btn-outline-teal sm" onClick={() => setDone(false)}>
              Make Another Payment
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={handlePay}>
            <h3 className="form-title">Quick Installment Payment</h3>
            <p className="form-sub">Instant credit to your chit passbook with digital receipt.</p>
            <label>
              Subscriber / Member ID *
              <input
                required
                placeholder="e.g. SVMS-98210"
                value={memberId}
                onChange={e => setMemberId(e.target.value)}
              />
            </label>
            <label>
              Group Number *
              <input
                required
                placeholder="e.g. SVMS-G101"
                value={groupNo}
                onChange={e => setGroupNo(e.target.value)}
              />
            </label>
            <label>
              Installment Amount (₹) *
              <input
                type="number"
                required
                placeholder="e.g. 12500"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </label>
            <label>
              Payment Method
              <select value={payMethod} onChange={e => setPayMethod(e.target.value)}>
                <option value="upi">UPI (Google Pay, PhonePe, Paytm)</option>
                <option value="netbanking">Net Banking (All Major Banks)</option>
                <option value="debit">Debit Card / ATM Card</option>
                <option value="neft">NEFT / RTGS Bank Transfer</option>
              </select>
            </label>
            <button className="btn btn-primary-gold btn-full" type="submit">
              Proceed to Secure Payment &rarr;
            </button>
            <div className="payment-security-badge">
              <small>🔒 256-bit SSL Encrypted &bull; Instant SMS &amp; WhatsApp Receipt</small>
            </div>
          </form>
        )}
      </div>
    </Page>
  )
}

export const Privacy = () => (
  <Page t="Privacy policy">
    <div className="narrow text-page">
      <p>
        At <strong>SVMS Chits Pvt Ltd</strong>, your financial privacy and confidentiality are of paramount importance. This policy outlines how we gather, utilize, and protect your personal and financial details.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We collect identification details including name, address, phone number, PAN, and Aadhaar strictly in compliance with statutory KYC guidelines under the Chit Funds Act, 1982.
      </p>
      <h3>Usage of Information</h3>
      <p>
        Your information is used solely to maintain your chit subscription, verify security documents, process prize disbursements, and send legal intimations regarding auction schedules.
      </p>
      <h3>Data Security</h3>
      <p>
        We do not sell, rent, or trade your personal data to any commercial third parties. All subscriber records are safeguarded with bank-grade digital security and stringent physical access controls.
      </p>
    </div>
  </Page>
)

export const Terms = () => (
  <Page t="Terms and conditions">
    <div className="narrow text-page">
      <p>
        Subscribers to any chit group operated by <strong>SVMS Chits Pvt Ltd</strong> are legally governed by the provisions of the Central Chit Funds Act, 1982, the Karnataka Chit Funds Rules, and the registered Chit Agreement signed upon enrollment.
      </p>
      <h3>Subscription &amp; Dividend</h3>
      <p>
        Monthly subscriptions are due on or before the sanctioned due date of every calendar month. Non-prized subscribers receive dividend deductions earned from the preceding month’s auction.
      </p>
      <h3>Auctions &amp; Prize Disbursal</h3>
      <p>
        Auctions are held openly on pre-specified dates every month. The successful bidder must furnish security acceptable to the company before the prize money is disbursed, in compliance with Section 31 of the Chit Funds Act.
      </p>
    </div>
  </Page>
)

export const NotFound = () => (
  <Page t="Page not found" sub="The requested page could not be located.">
    <div className="narrow text-center" style={{ padding: '40px 0' }}>
      <p>The link you followed may be broken or the page may have moved.</p>
      <a href="#/" className="btn btn-primary-gold">
        Return to Home Page &rarr;
      </a>
    </div>
  </Page>
)
