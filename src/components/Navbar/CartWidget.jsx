import { useContext } from "react";
import { CartContext } from "../../context/ShopppingCartContext";

const CartWidget = () => {
  const {cart}= useContext(CartContext);

  const cantidad = cart.reduce((inicio, set) => {
    return inicio + set.cantidad;
  }, 0);

  return (
    <>
      <i className="fa-solid fa-cart-shopping"></i>
          <span>{cantidad}</span>
    </>
  );
};

export default CartWidget;
