import { useState } from 'react'
import chevron from '../assets/icons/Vector.svg'

const faqs = [
  {
    question: '¿Qué es BagTag y cómo funciona?',
    answer: 'BagTag es un sistema de rastreo de equipaje en tiempo real que permite a los pasajeros conocer la ubicación exacta de sus maletas durante todo el viaje, desde el check-in hasta la cinta de retiro.',
  },
  {
    question: '¿Qué aerolíneas son compatibles?',
    answer: 'BagTag está diseñado para integrarse con cualquier aerolínea. Actualmente estamos trabajando con diversas compañías aéreas para expandir nuestra cobertura a nivel global.',
  },
  {
    question: '¿Qué hago si pierdo mi equipaje?',
    answer: 'Con BagTag, podrás ver la última ubicación registrada de tu equipaje y recibir actualizaciones en tiempo real. Además, podrás iniciar un reclamo directamente desde la app.',
  },
  {
    question: '¿Qué tipo de tecnología usa BagTag?',
    answer: 'BagTag utiliza tecnología de rastreo de última generación, combinando GPS, Bluetooth y conectividad con los sistemas aeroportuarios para ofrecer un seguimiento preciso y confiable.',
  },
]

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Preguntas frecuentes</h2>
        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div className={`faq__item${activeIndex === i ? ' active' : ''}`} key={i}>
              <button
                className="faq__question"
                aria-expanded={activeIndex === i}
                onClick={() => toggle(i)}
              >
                <span>{faq.question}</span>
                <img src={chevron} alt="" className="faq__chevron" />
              </button>
              <div className="faq__answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
