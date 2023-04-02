import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";


const ItemDetail = ({ detalle, index }) => {
  const [indice, setIndice] = useState(index);

  const handleTab = (index) => {
    setIndice(index);
  };

  /* hago una confirmacion con && para decirle que voy a manipular un array */
  return (
    <div className="appDetail">
      {
        <div className="details" key={detalle.id}>
          <div className="big-img">
            {Array.isArray(detalle.img) && (
              <img src={detalle.img[indice]} alt="" />
            )}
          </div>
          <div className="box">
            <div className="row">
              <h2>
                ({detalle.marca}) {detalle.nombre}
              </h2>
              <span>$ {detalle.precio}</span>
            </div>
            <p className="content">{detalle.content}</p>
            <p>{detalle.descripcion}</p>

            <div className="thumb">
              {Array.isArray(detalle.img) &&
                detalle.img.map((img, index) => (
                  <img
                    src={img}
                    alt=""
                    key={index}
                    onClick={() => handleTab(index)}
                  />
                ))}
            </div>

            <ItemCount
              stock={detalle.stock}
              id={detalle.id}
              precio={detalle.precio}
              nombre={detalle.nombre}
              img={detalle.img}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default ItemDetail;
