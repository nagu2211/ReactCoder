import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import {
  Badge,
  Tooltip,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from "@chakra-ui/react";
import { CartContext } from "../../context/ShopppingCartContext";


const Itemcantidad = ({ stock, id, precio, nombre, img }) => {
  const { setCart } = useContext(CartContext);

  /* Toast */
  const toast = useToast();

  /* cantidad de producto a adquirir */
  const [cantidad, setCantidad] = useState(1);
  const [stockDisponible, setStockDisponible] = useState(stock);
  const sumar = () => {
    if (cantidad < stockDisponible) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  /* funcion de adquirir producto y que no sobrepase stock disponible */
  const añadirProducto = () => {
    setCart((cart) => {
      const isInCart = cart.find((item) => item.id === id) ? true : false;
      if (isInCart === true) {
        return cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              cantidad:
                item.cantidad >= stock ? stock : item.cantidad + cantidad,
            };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...cart,
          { id, cantidad: cantidad, precio, nombre, stock, img },
        ];
      }
    });
  };

  const onAdd = () => {
    if (stockDisponible > 0) {
      setStockDisponible(stockDisponible - cantidad);
      setCantidad(1);
    }
  };

  const funcionAddProduct = () => {
    añadirProducto();
    onAdd();
    toast({
      title: "Producto añadido.",
      status: "success",
      duration: 1500,
    });
  };

  return (
    <div>
      <NumberInput defaultValue={cantidad} min={1} max={stock} value={cantidad}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper onClick={sumar} />
          <NumberDecrementStepper onClick={restar} />
        </NumberInputStepper>
      </NumberInput>
      {cantidad <= stockDisponible ? (
        <button className="cartButton" onClick={() => funcionAddProduct()}>
          Añadir al carrito
        </button>
      ) : (
        <Tooltip label="stock maximo alcanzado" placement="bottom">
          <Button className="cartButton" isDisabled>
            Añadir al carrito
          </Button>
        </Tooltip>
      )}
      <Badge colorScheme="green">stock disponible : {stockDisponible}</Badge>
    </div>
  );
};

export default Itemcantidad;
