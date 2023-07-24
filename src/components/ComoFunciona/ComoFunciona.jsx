import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import imageUs from "../../Photos/conocenos.png";
import style from "./ComoFunciona.module.css";
import Ejemplos from "./EjemplosServicio/Ejemplos";
import Proceso from "./Proceso/Proceso";
import Formulario from "../Formulario/Form";
import contactUs from "../../Photos/contactUs.png";
import AccordionDiv from "../AccordionDiv/AccordionDiv";

const ComoFunciona = () => {
  return (
    <div className={style.comoStyle}>
      <NavBar />
      <div>
        <div className={style.cfContainer}>
          <div>
            <h1>Nuestro objetivo es </h1>
            <h2>
              ayudar pequeños y medianos <br /> empresarios a importar facíl.
            </h2>
            <button>contrata ya</button>
          </div>
          <img src={imageUs} alt="conocenos" width="500px" height="500px" />
        </div>
      </div>
      <Ejemplos />
      <AccordionDiv />
      <div className={style.cfBanner}>
        <h1>empieza a importar ya!</h1>
      </div>
      <div className={style.contacUsContainer}>
        <div className={style.cUsImgContainer}>
          <h1>comienza contactandonos</h1>
          <h2>compartenos tus datos y únete a GR Movement</h2>
          <img src={contactUs} alt="contact Us" />
        </div>
        <div className={style.formContainer2}>
          <h1>Ayudanos con tus datos</h1>
          <Formulario />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComoFunciona;
