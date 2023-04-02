import React from "react";
import Item from "./Item";
import "./Item.css";
const itemList = ({ productos }) => {
  return (
    <div className="container">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          stock={producto.stock}
          marca={producto.marca}
          img={producto.img}
        />
      ))}
    </div>
  );
};

export default itemList;
