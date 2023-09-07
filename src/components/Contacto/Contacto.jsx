import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import imageFooter from "../../Photos/footer.png";
import style from "./Contacto.module.css";
import Formulario from "../Formulario/Form";
import contactUs from "../../Photos/contactUs.png";

const Contacto = () => {
  return (
    <div>
      <NavBar />
      <div className={style.contacUsContainer}>
        <div className={style.cUsImgContainerContact}>
          <h1>comienza contactandonos</h1>
          <h2>compartenos tus datos y únete a GR Movement</h2>
          <img src={contactUs} alt="contact Us" />
        </div>
        <div className={style.formContainerContact}>
          <h1>Ayudanos con tus datos</h1>
          <Formulario />
        </div>
      </div>
      <div className={style.imageFooterContact}>
        <img src={imageFooter} alt="image footer" />
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
