import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { Button } from "../Button/ButtonGeneral";
import '../../App.css'
import './Bienvenida.css'





const Bienvenida = () => {

   useEffect(()=> {
    window.scrollTo(0, 0);
   },[])

  return (
    <>
    <main className="home">
    <div className="bienvenida-container">
      <video src="/videos/fondo-pagina.mp4" autoPlay loop muted id="video" />
      <h1>ELIGE LA ELEGANCIA</h1>
      <p>Un estandar mas alto</p>
      <div className="bienvenida-btns">
      <Link to='/catalogo' className="btn-mobile">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          EMPEZAR
        </Button>
        </Link>
        <Link to={`/catalogo/${"Limitado"}`} className="btn-mobile">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          PRODUCTOS LIMITADOS
        </Button>
        </Link>
      </div>
    </div>
    </main>
    
    </>
  );
};

export default Bienvenida;
