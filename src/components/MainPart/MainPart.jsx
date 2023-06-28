import React from 'react'
import mainPhoto from '../../Photos/main_photo.png'
import style from './MainPart.module.css'

const MainPart = () => {
  return (
    <div className={style.mainBackground}>
        <div className={style.textMainPart}>
            <h1>Importamos lo que más te importa</h1>
            <hr />
            <h2>GR Safe Movement se encargará de facilitar tus importaciones desde cualquier parte del mundo.</h2>
            <div className={style.MainPartBtn}>
                <button>Cotiza tu Carga</button>
                <a href="#">Mandanos mensaje</a>
            </div>
        </div>
        <div>
            <img src={mainPhoto} alt="main photo" width="500px" />
        </div>
        
    </div>
  )
}

export default MainPart