import React from 'react'
import photoUs from '../../Photos/us.png'
import style from './VideoPart.module.css'

const VideoPart = () => {
  return (
    <div className={style.videoPartFlex}>
        <div>
            <img src={photoUs} alt="ilustrative photo" height='350px' width='350px'/>
        </div>
        <div>
            <h1>Haciendo tus importaciones simples</h1>
            <p>Conectando de Punto A a B</p>
            <button className={style.videoPartBtn}>Contra YA</button>
        </div>
    </div>
  )
}

export default VideoPart