import React from 'react'
import style from './CarouselDiv.module.css'
import CartSVG from '../../Photos/cartShop.svg'
import sendSVG from '../../Photos/sendShop.svg'
import receiveSVG from '../../Photos/receiveShop.svg'
import ReactSwipe from 'react-swipe';

const CarouselDiv = () => {
  let reactSwipeEl;

  return (
    <div className={style.carousel}>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          <div className={style.serviceCard}>
            <img src={CartSVG} alt="cart icon" width='50px' height='50px'/>
            <h1>Compra</h1>
            <hr />
            <p>Compra en tus tiendas favoritas de China o Estados Unidos utilizando la dirección en Estados Unidos que proporcionamos.</p>
          </div>
        </div>
        <div>
          <div className={style.serviceCard}>
            <img src={sendSVG} alt="cart icon" width='50px' height='50px'/>
            <h1>Envia</h1>
            <hr />
            <p>Recibiremos tus paquetes en nuestros almacenes en El Paso, TX y nos encargaremos del despacho de aduana y reenvío.</p>
          </div>
        </div>
        <div>
          <div className={style.serviceCard}>
            <img src={receiveSVG} alt="cart icon" width='50px' height='50px'/>
            <h1>Recibe</h1>
            <hr />
            <p>Recibe tus compras en tu dirección en México y ahorra hasta un 70% en impuestos y tarifas aduaneras.</p>
          </div>
        </div>
      </ReactSwipe>
    </div>
  )
}

export default CarouselDiv