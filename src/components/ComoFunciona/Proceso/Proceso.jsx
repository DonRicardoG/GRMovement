import React from "react";
import check from "../../../Photos/check.png";
import style from "./Proceso.module.css";

const Proceso = () => {
  return (
    <div className={style.processContainer}>
      <div className={style.processTitles}>
        <h1>Conoce nuestros servicios</h1>
        <h2>Pensados en apoyar a nuestros clientes durante todo el proceso.</h2>
      </div>
      <div>
        <div className={style.checkDiv}>
          <img src={check} alt="check" />
          <div className={style.checkDivTitles}>
            <h1>Logistica</h1>
            <h2>Movemos tu mercancia desde punta A a punto B</h2>
          </div>
        </div>
        <div className={style.checkDiv}>
          <img src={check} alt="check" />
          <div className={style.checkDivTitles}>
            <h1>Importacion Exportacion</h1>
            <h2>Hacemos tus tramites de comercio exterior más sencillas</h2>
          </div>
        </div>
        <div className={style.checkDiv}>
          <img src={check} alt="check" />
          <div className={style.checkDivTitles}>
            <h1>Asesoría</h1>
            <h2>
              Ayudamos a expandir tu negocio mas allá de las fronteras de una
              manera segura
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proceso;
