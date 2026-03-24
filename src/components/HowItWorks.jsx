import imgA from '../assets/iPhone 15 Pro .svg'
import imgB from '../assets/iPhone 15 Pro -1.svg'
import imgC from '../assets/Frame 4.svg'
import imgD from '../assets/Frame 5.svg'

const steps = [
  { number: 1, title: 'Descargá la app', img: imgC },
  { number: 2, title: 'Registrate', img: imgD },
  { number: 3, title: 'Vinculá tu equipaje', img: imgA },
  { number: 4, title: 'Rastreá en tiempo real', img: imgB },
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="como-funciona">
      <div className="container">
        <h2 className="section-title">Cómo funciona</h2>
        <div className="how-it-works__grid">
          {steps.map((s) => (
            <div className="step" key={s.number}>
              <div className="step__header">
                <span className="step__number">{s.number}</span>
                <h3 className="step__title">{s.title}</h3>
              </div>
              <div className="step__img-wrapper">
                <img src={s.img} alt={s.title} className="step__img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
