import React from "react";
import mainPhoto from "../../Photos/main_photo.png";
import style from "./MainPart.module.css";
import { Link } from "react-router-dom";

const MainPart = () => {
  return (
    <div className={style.mainBackground}>
      <div className={style.textMainPart}>
        <h1>Importamos lo que más te importa</h1>
        <hr />
        <h2>
          Somos una empresa Mexicana del sector logistico nacional e
          internacional, formada por personas apacionadas por el comercio
          exterior.
        </h2>
        <div>
          <Link to="/contact" className={style.mainPartBtn}>
            <p>Cotiza tu plan</p>
          </Link>
          <Link to="/contact" className={style.mainPartLink}>
            <p>Mandanos mensaje</p>
          </Link>
        </div>
      </div>
      <div className={style.imgNone}>
        <img src={mainPhoto} alt="main photo" width="500px" />
      </div>
    </div>
  );
};

export default MainPart;
