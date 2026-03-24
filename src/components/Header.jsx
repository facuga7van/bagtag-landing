import { useState } from 'react'
import logo from '../assets/image.svg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <img src={logo} alt="BagTag" className="header__logo-img" />
        </a>
        <nav className={`header__nav${menuOpen ? ' active' : ''}`}>
          <a href="#beneficios" className="header__link" onClick={(e) => handleNavClick(e, '#beneficios')}>Beneficios</a>
          <a href="#como-funciona" className="header__link" onClick={(e) => handleNavClick(e, '#como-funciona')}>Cómo funciona</a>
          <a href="#faq" className="header__link" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
          <a href="#descarga" className="header__link" onClick={(e) => handleNavClick(e, '#descarga')}>Descarga la app</a>
        </nav>
        <a href="#" className="btn btn--primary header__cta">Comienza ahora</a>
        <button
          className={`header__hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
