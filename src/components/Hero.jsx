import illustration from '../assets/Illustration.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__radar">
        <img src={illustration} alt="" className="hero__radar-img" />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Con BagTag localiza tu<br />maleta en tiempo real.
          </h1>
          <p className="hero__subtitle">
            BagTag es la solución diseñada para aerolíneas que buscan ofrecer a sus pasajeros una experiencia de viaje más segura y transparente.
          </p>
          <p className="hero__cta-label">DESCARGA LA APP</p>
          <div className="hero__badges">
            <a href="#" className="hero__badge">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
            </a>
            <a href="#" className="hero__badge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
