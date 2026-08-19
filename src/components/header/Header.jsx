import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'
import Logo  from '../../assets/logo.png'
import Menu from '../../assets/menu.png'

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  const headerRef = useRef(null)

  const fecharMenu = () => setMenuAberto(false)

  useEffect(() => {
    if (!menuAberto) return undefined

    const fecharAoClicarFora = (evento) => {
      if (!headerRef.current?.contains(evento.target)) setMenuAberto(false)
    }

    const fecharAoPressionarTecla = (evento) => {
      if (evento.key === 'Escape') setMenuAberto(false)
    }

    const fecharAoRolar = () => setMenuAberto(false)

    document.addEventListener('pointerdown', fecharAoClicarFora)
    document.addEventListener('keydown', fecharAoPressionarTecla)
    window.addEventListener('scroll', fecharAoRolar, { passive: true })

    return () => {
      document.removeEventListener('pointerdown', fecharAoClicarFora)
      document.removeEventListener('keydown', fecharAoPressionarTecla)
      window.removeEventListener('scroll', fecharAoRolar)
    }
  }, [menuAberto])

  return (
    <header ref={headerRef} className={s.header}>
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
        <Link to="/voluntario" onClick={fecharMenu}>Seja voluntário</Link>
      </nav>
    </header>
  )
}

export default Header
