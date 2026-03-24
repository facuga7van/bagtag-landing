import phone from '../assets/iPhone 15 Pro .svg'

const steps = [
  { number: 1, side: 'left', title: 'Descargá la app', text: 'Disponible en App Store y Google Play. Descargala gratis y comenzá en minutos.' },
  { number: 2, side: 'right', title: 'Registrate', text: 'Creá tu cuenta con tu email y datos de vuelo para vincular tu equipaje.' },
  { number: 3, side: 'left', title: 'Vinculá tu equipaje', text: 'Escaneá el código de tu etiqueta BagTag y asocialo a tu maleta.' },
  { number: 4, side: 'right', title: 'Rastreá en tiempo real', text: 'Seguí tu maleta en cada etapa del viaje directamente desde la app.' },
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="container">
        <h2 className="section-title">Cómo funciona</h2>
        <div className="how-it-works__wrapper">
          <div className="how-it-works__steps">
            {steps.map((s) => (
              <div className={`step step--${s.side}`} key={s.number}>
                <div className="step__number">{s.number}</div>
                <div className="step__content">
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="how-it-works__phone">
            <img src={phone} alt="BagTag App" className="how-it-works__phone-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
