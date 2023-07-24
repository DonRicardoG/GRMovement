import React from "react";
import style from "./Diferencia.module.css";
import customer from "../../Photos/customerService.png";
import punctuality from "../../Photos/punctuality.png";
import logistic from "../../Photos/logistica.png";
import detail from "../../Photos/detail.png";
import { Link } from "react-router-dom";

const Diferencia = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className={style.containerMaxDif}>
      <div className={style.diferenciaContainer}>
        <h1>
          ¿Que nos <br /> diferencia?
        </h1>
        <div className={style.diferenceGrid}>
          <div className={style.gridElement}>
            <img
              src={customer}
              alt="customer service"
              width="120px"
              height="120px"
            />
            <h2>servicio personalizado</h2>
          </div>
          <div className={style.gridElement}>
            <img
              src={punctuality}
              alt="punctuality"
              width="120px"
              height="120px"
            />
            <h2>puntualidad</h2>
          </div>
          <div className={style.gridElement}>
            <img src={logistic} alt="logistica" width="120px" height="120px" />
            <h2>logistica eficaz</h2>
          </div>
          <div className={style.gridElement}>
            <img src={detail} alt="detail" width="120px" height="120px" />
            <h2>atención al detalle</h2>
          </div>
        </div>
      </div>
      <Link to="/contact" onClick={handleClick}>
        empieza ya
      </Link>
    </div>
  );
};

export default Diferencia;
