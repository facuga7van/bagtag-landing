import phone from '../assets/iPhone 15 Pro -1.svg'

function CTA() {
  return (
    <section className="cta-section" id="descarga">
      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <h2 className="cta-section__title">
            Haz que tus pasajeros<br />viajen con tranquilidad
          </h2>
          <div className="cta-section__buttons">
            <a href="#" className="btn btn--white">Comienza ahora</a>
            <a href="#" className="btn btn--outline">Contactar ventas</a>
          </div>
        </div>
        <div className="cta-section__visual">
          <img src={phone} alt="BagTag App" className="cta-section__phone" />
        </div>
      </div>
    </section>
  )
}

export default CTA
