import candadoIcon from '../assets/icons/candadoIcon.svg'
import luggageIcon from '../assets/icons/luggageIcon.svg'
import okIcon from '../assets/icons/okIcon.svg'
import nubes from '../assets/nubes.png'

const benefits = [
  {
    icon: candadoIcon,
    alt: 'Seguridad',
    title: <>Mayor seguridad<br />para los pasajeros</>,
    text: 'Con nuestra app, los pasajeros pueden confirmar en tiempo real que sus maletas están a bordo de su vuelo. Esto reduce la ansiedad y aumenta la confianza en el servicio de la aerolínea, brindando una experiencia de viaje más tranquila y segura.',
  },
  {
    icon: luggageIcon,
    alt: 'Control',
    title: <>Control total sobre<br />el equipaje</>,
    text: 'Los pasajeros ya no dependen exclusivamente de la aerolínea para saber si su equipaje llegará con ellos. Nuestro sistema les permite rastrear su maleta de forma independiente, dándoles el control que necesitan durante su viaje.',
  },
  {
    icon: okIcon,
    alt: 'Ahorro',
    title: <>Ahorro de tiempo,<br />dinero y trámites</>,
    text: 'El pasajero puede reportar su maleta como extraviada antes de que el avión despegue, agilizando la gestión de equipaje perdido. Esto ahorra tiempo valioso tanto para el pasajero como para la aerolínea, evitando procesos engorrosos y costos adicionales.',
  },
]

function Benefits() {
  return (
    <section className="benefits" id="beneficios">
      <div className="container">
        <h2 className="section-title">
          Beneficios de integrar nuestro<br />sistema de rastreo de equipaje
        </h2>
        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div className="benefit-card" key={i}>
              <div className="benefit-card__icon-wrapper">
                <img src={nubes} alt="" className="benefit-card__clouds" />
                <img src={b.icon} alt={b.alt} className="benefit-card__icon" />
              </div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
