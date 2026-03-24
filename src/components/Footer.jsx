import logo from '../assets/image.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#" className="footer__logo">
          <img src={logo} alt="BagTag" className="footer__logo-img" />
        </a>
        <p className="footer__copy">&copy; 2024 BagTag. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
