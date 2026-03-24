import phone from '../assets/Frame 4.svg'
import nubes from '../assets/nubes.png'
import suitcase from '../assets/suitcase.png'

function CTA() {
  return (
    <section className="cta-section" id="descarga">
      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <h2 className="cta-section__title">
            ¡Haz que tus pasajeros viajen con tranquilidad!
          </h2>
          <p className="cta-section__body">
            Desde el rastreo en tiempo real hasta la posibilidad de gestionar imprevistos antes de que sucedan. Contáctanos hoy y descubre cómo integrar nuestra tecnología.
          </p>
          <a href="#" className="btn btn--white cta-section__btn">Contactanos</a>
          <div className="cta-section__download">
            <p className="cta-section__download-label">Descarga la app en:</p>
            <div className="cta-section__badges">
              <a href="#" className="cta-section__badge">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
              </a>
              <a href="#" className="cta-section__badge">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
        <div className="cta-section__visual">
          <img src={nubes} alt="" className="cta-section__clouds cta-section__clouds--left" />
          <img src={nubes} alt="" className="cta-section__clouds cta-section__clouds--right" />
          <img src={suitcase} alt="" className="cta-section__luggage" />
          <img src={phone} alt="BagTag App" className="cta-section__phone" />
        </div>
      </div>
    </section>
  )
}

export default CTA
