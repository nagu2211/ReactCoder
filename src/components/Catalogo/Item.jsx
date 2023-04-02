import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ id, marca, nombre, img, stock }) => {
  return (
    <div className="card">
      <figure className="cards__item__pic-wrap" data-stock={marca}>
        <img src={img[0]} alt="" className="cards__item__img"/>
        </figure>
        <h4>{nombre}</h4>
        {stock <= 3 ? 
        <p className="cardMarcaLim">Limitado</p>  : 
        <p className="cardMarcaDisp">Disponible</p> }
        <p className="cardStock">stock : {stock}/u.</p>
        <Link to={`/detalles/${id}`}>
        <div className="cardDetails" >
                Detalles
        </div>
        </Link>
    </div>
  );
};

export default Item;
