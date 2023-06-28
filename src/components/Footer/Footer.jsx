import React from 'react'
import style from './Footer.module.css'
import logo from '../../Photos/logo.png'
import facebook from '../../Photos/facebook.svg'
import insta from '../../Photos/insta.svg'
import linkedin from '../../Photos/linkedin.svg'
import phone from '../../Photos/phone.svg'
import location from '../../Photos/location.svg'
import email from '../../Photos/email.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={style.footerInformation}>
        <section className={style.footerLogo}>
            <img src={logo} alt="logo" />
            <div className={style.socialNetworks}>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="#">
                  <img src={insta} alt="insta" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="linkedin" />
                </a>
            </div>
        </section>
        <section>
            <ul className={style.listFooter}>
              <li><Link to='/details'>¿Como funciona?</Link></li>
              <li><Link to='/contact'>Contactanos</Link></li>
              <li><a href="#">Testimonios</a></li>
            </ul>
        </section>
        <section className={style.footerInfo}>
            <a href="#">
              <img src={location} alt="location" />
              <h2>Location locatio location location</h2>
            </a>
            <a href="#">
              <img src={phone} alt="phone" />
              <h2>+52 888-88-888</h2>
            </a>
            <a href="mailto:info@grsafemovement.com">
              <img src={email} alt="mail" />
              <h2>info@grsafemovement.com</h2>
            </a>
        </section>
        </div>
        <div className={style.gifFooter}></div> 
      </footer>
      
    </div>
  )
}

export default Footer