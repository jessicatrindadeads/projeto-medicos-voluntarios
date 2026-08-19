import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'
import Logo  from '../../assets/logo.png'
import Menu from '../../assets/menu.png'

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className={s.header}>
      <div className={s.boxLogo}>
        <img src={Logo} alt="Imagem de logo do site Médicos Voluntários" />
        <Link to="/" onClick={fecharMenu}>Médicos & Dentistas</Link>
      </div>

      <button
        className={s.menuButton}
        type="button"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        aria-controls="navegacao-principal"
        onClick={() => setMenuAberto((aberto) => !aberto)}
      >
        <img src={Menu} alt="" aria-hidden="true" />
      </button>

      <nav
        id="navegacao-principal"
        className={menuAberto ? s.navAberta : ''}
        aria-label="Navegação principal"
      >
        <Link to="/" onClick={fecharMenu}>Home</Link>
        <Link to="/como-ajudar" onClick={fecharMenu}>Como ajudar</Link>
        <Link to="/voluntario" onClick={fecharMenu}>Seja voluntário</Link>
      </nav>
    </header>
  )
}

export default Header
