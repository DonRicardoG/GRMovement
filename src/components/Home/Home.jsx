import React from "react";
import style from "./Home.module.css";
import MainPart from "../MainPart/MainPart";
import Servicios from "../Servicios/Servicios";
import VideoPart from "../VideoPart/VideoPart";
import Footer from "../Footer/Footer";
import Diferencia from "../Diferencia/Diferencia";
import imageFooter from "../../Photos/footer.png";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar />
      <MainPart />
      <Servicios />
      <hr className={style.homeGeneral} />
      <VideoPart />
      <Diferencia />
      <div className={style.imageFooter}>
        <img src={imageFooter} alt="image footer" />
        <h1>¿Necesitas ayuda?</h1>
        <Link
          to="/contact"
          className={style.btnContact1}
          onClick={() => window.scroll(0, 0)}
        >
          Contáctanos
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
