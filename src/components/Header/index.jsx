import { Link } from 'react-router-dom'
import '../../styles/scss/header.scss'

function Header() {
  return (
    <header>
      <img src='/images/logo.svg' alt='logo' className='kasa-logo' />
    <nav>
      <Link to="/">ACCUEIL</Link>
      <Link to="/about">A PROPOS</Link>
    </nav>
    </header>
  )
}

export default Header