import React from "react";
import Accordion from "react-bootstrap/Accordion";
import style from "./AccordionDiv.module.css";
import check from "../../Photos/check.png";

const AccordionDiv = () => {
  return (
    <div className={style.processContainer}>
      <div className={style.processTitles}>
        <h1>Conoce nuestros servicios</h1>
        <h2>Pensados en apoyar a nuestros clientes durante todo el proceso.</h2>
      </div>
      <Accordion className={style.accordionDivContainer}>
        <Accordion.Item eventKey="0" className={style.accordioDivItem}>
          <Accordion.Header>
            <div className={style.checkDiv}>
              <img src={check} alt="check" />
              <div className={style.checkDivTitles}>
                <h1>Logistica</h1>
                <h2>Movemos tu mercancia desde punta A a punto B</h2>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Movemos tu mercancia desde punta A a punto B</h2>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className={style.accordioDivItem}>
          <Accordion.Header>
            <div className={style.checkDiv}>
              <img src={check} alt="check" />
              <div className={style.checkDivTitles}>
                <h1>Importacion Exportacion</h1>
                <h2>Hacemos tus tramites de comercio exterior más sencillas</h2>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Hacemos tus tramites de comercio exterior más sencillas</h2>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className={style.accordioDivItem}>
          <Accordion.Header>
            <div className={style.checkDiv}>
              <img src={check} alt="check" />
              <div className={style.checkDivTitles}>
                <h1>Asesoría</h1>
                <h2>
                  Ayudamos a expandir tu negocio mas allá de las fronteras de
                  una manera segura
                </h2>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <h2>
              Ayudamos a expandir tu negocio mas allá de las fronteras de una
              manera segura
            </h2>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionDiv;
