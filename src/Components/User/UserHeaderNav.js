import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import {ReactComponent as Estatísticas} from '../../Assets/estatisticas.svg'
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Sair} from '../../Assets/sair.svg'

const UserHeaderNav = () => {
  
  const {userLogout} = React.useContext(UserContext)
  //detecta a width 40rem da tela e ativa a versao responsiva para mobile usando o hook useMedia
  const mobile = useMedia('(max-width: 40rem')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const {pathname} = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])
  
  return (
    <>
      {mobile && <button aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)} className={`${styles.mobileBtn} ${mobileMenu && styles.mobileBtnActive}`}></button>}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos' }
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <Estatísticas />
          {mobile && 'Estatísticas' }
          
        </NavLink>
        <NavLink to="/conta/postar"> 
          <AdicionarFoto/>
          {mobile && 'Adicionar Foto' }
          
        </NavLink>

        <button onClick={userLogout}> 
          <Sair />
          {mobile && 'Sair' }
        </button>
      </nav>
    </>
    
  )
}

export default UserHeaderNav