import React from 'react'
import check from '../../../Photos/check.png'
import style from './Proceso.module.css'

const Proceso = () => {
  return (
    <div className={style.processContainer}>
        <div className={style.processTitles}>
          <h1>Conoce nuestros servicios</h1>
          <h2>Pensados en apoyar a nuestros clientes durante todo el proceso.</h2>
        </div>
        <div>
          <div className={style.checkDiv}>
            <img src={check} alt="check"  />
            <h1>Comercializadora</h1>
          </div>
          <div className={style.checkDiv}>
            <img src={check} alt="check"  />
            <h1>Proveedores Verificados</h1>
          </div>
          <div className={style.checkDiv}>
            <img src={check} alt="check"  />
            <h1>Alianzas</h1>
          </div>
          <div className={style.checkDiv}>
            <img src={check} alt="check"  />
            <h1>Asesoría</h1>
          </div>
        </div>
    </div>
  )
}

export default Proceso