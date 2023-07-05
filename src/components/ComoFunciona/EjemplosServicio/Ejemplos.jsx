import React from 'react'
import ferreteria from '../../../Photos/ferreteria.png'
import agricultura from '../../../Photos/agricultura.png'
import autos from '../../../Photos/automotrix.png'
import style from './Ejemplos.module.css'

const Ejemplos = () => {
  return (
    <div className={style.ejemplosContainer}>
        <div className={style.ejemploCard}>
            <div>
                <img src={agricultura} alt="agricultura" width='60px' height='60px'/>
            </div>
            <div className={style.ejemploText}>
                <h1>Agricultura</h1>
                <h2>Proveemos servicios de logistica para cualquier producto agricola. Te invitamos a conocer que puedes exportar</h2>
            </div>
        </div>
        <div className={style.ejemploCard}>
            <div>
                <img src={ferreteria} alt="ferreteria" width='60px' height='60px' />
            </div>
            <div className={style.ejemploText}>
                <h1>Ferreteria</h1>
                <h2>Importar mercancia para ferreterias es una gran opción de negocio y una gran oportunidad para los empresarios mexicanos</h2>
            </div>
        </div>
        <div className={style.ejemploCard}>
            <div>
                <img src={autos} alt="autos" width='60px' height='60px' />
            </div>
            <div className={style.ejemploText}>
                <h1>Automotriz</h1>
                <h2>La industria automotriz no hace más que crecer, con nuestra ayuda podrás garantizar los pedidos que hagas para tu empresa y seguir creciendo.</h2>
            </div>   
        </div>
    </div>
  )
}

export default Ejemplos