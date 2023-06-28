import React from 'react'
import logo from '../../Photos/logo.png'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className={style.navBarStyle}>
        <div>
          <Link to='/'><img src={logo} alt="logo" width="90px" height="80px"/></Link>
        </div>
        <ul className={style.listNavBar}>
          <li><Link to='/details'>¿Como funciona?</Link></li>
          <li><Link to='/contact'>Contactanos</Link></li>
          <li><a href="#">Testimonios</a></li>
        </ul>
        <div className={style.navBarBtn}>
          <button >
            Blog
          </button>
        </div>
        
      </nav>
    </div>
  )
}

export default NavBar