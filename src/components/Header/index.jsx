import { Link } from 'react-router-dom'
import '../../styles/scss/header.scss'

function Header() {
  return (
    <header>
      <img src='/images/logo.svg' alt='logo' className='kasa-logo' />
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
    </header>
  )
}

export default Header