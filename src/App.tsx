import './App.css'

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=919256463031&text=Hi%20I%20want%20ID&type=phone_number&app_absent=0'

function App() {
  return (
    <>
      <section className="top-section" aria-label="Brand">
        <img
          src="/assets/img/bidaddy.png"
          className="logo"
          alt="Big Daddy"
          width={140}
          height="auto"
        />
      </section>

      <section className="top-cta" aria-label="Get your ID">
        <h1>GET YOUR ID NOW ON WHATSAPP 👇</h1>
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
            src="/assets/img/20260325_202741.png"
            alt="Big Daddy Exchange — India's oldest and trusted exchange"
            width={1100}
            height="auto"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-divider" />
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
          © {new Date().getFullYear()} BigDaddyExchange.com. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
