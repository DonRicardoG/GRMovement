import React from "react";
import style from "./Servicios.module.css";
import CartSVG from "../../Photos/cartShop.svg";
import sendSVG from "../../Photos/sendShop.svg";
import receiveSVG from "../../Photos/receiveShop.svg";
import CarouselDiv from "../Carousel/CarouselDiv";

const Servicios = () => {
  return (
    <>
      <div className={style.serviceFlex}>
        <div className={style.serviceCard}>
          <img src={CartSVG} alt="cart icon" width="50px" height="50px" />
          <h1>Compra</h1>
          <hr />
          <p>
            Compra en tus tiendas favoritas de China o Estados Unidos utilizando
            la dirección en Estados Unidos que proporcionamos.
          </p>
        </div>
        <div className={style.serviceCard}>
          <img src={sendSVG} alt="cart icon" width="50px" height="50px" />
          <h1>Envia</h1>
          <hr />
          <p>
            Recibiremos tus paquetes en nuestros almacenes en El Paso, TX y nos
            encargaremos del despacho de aduana y reenvío.
          </p>
        </div>
        <div className={style.serviceCard}>
          <img src={receiveSVG} alt="cart icon" width="50px" height="50px" />
          <h1>Recibe</h1>
          <hr />
          <p>
            Recibe tus compras en tu dirección en México y ahorra hasta un 70%
            en impuestos y tarifas aduaneras.
          </p>
        </div>
      </div>
      <CarouselDiv className={style.carouselDivNone} />
    </>
  );
};

export default Servicios;
