import './App.css'

const PHONE_DISPLAY = '+91 78350 65094'
const PHONE_E164 = '917835065094'
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${PHONE_E164}&text=${encodeURIComponent('Hi, I want ID')}&type=phone_number&app_absent=0`
const TEL_HREF = `tel:+917835065094`

function App() {
  return (
    <>
      <section className="top-section" aria-label="Brand">
        <img
          src="/assets/img/sarabook-logo.png"
          className="logo"
          alt="Sara Book — Betting App"
          width={160}
          height="auto"
        />
      </section>

      <section className="top-cta" aria-label="Get your ID">
        <h1>GET YOUR ID NOW ON WHATSAPP 👇</h1>
        <p className="phone-line">
          <a href={TEL_HREF} className="phone-link">
            <i className="fa-solid fa-phone" aria-hidden="true" /> {PHONE_DISPLAY}
          </a>
        </p>
        <div className="arrows" aria-hidden="true">
          👇👇
        </div>
        <a
          href={WHATSAPP_URL}
          className="whatsapp-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp icon" aria-hidden="true" />
          Whatsapp Now
          <i className="fa-brands fa-whatsapp icon" aria-hidden="true" />
        </a>
      </section>

      <section className="banner-section" aria-label="Promotional banner">
        <div className="banner">
          <img
            src="/assets/img/sarabook-banner.png"
            alt="SaraBook — IPL thrills and prizes, India's trusted betting exchange"
            width={1100}
            height="auto"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-divider" />
        <p className="footer-contact">
          <a href={TEL_HREF} className="footer-phone">
            {PHONE_DISPLAY}
          </a>
          <span className="footer-sep" aria-hidden="true">
            {' '}
            ·{' '}
          </span>
          <a
            href="https://www.sarabook.com"
            className="footer-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.sarabook.com
          </a>
        </p>
        <p className="footer-text">
          18+ | Gamble Responsibly. This game involves financial risk and may be
          addictive.
        </p>
        <p className="footer-text">
          Please gamble responsibly and only with money you can afford to lose.
        </p>
        <p className="footer-text">
          If you or someone you know has a gambling problem, please seek help.
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} SaraBook. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
