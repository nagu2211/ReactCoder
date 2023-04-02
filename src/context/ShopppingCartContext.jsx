import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const vaciarCarrito = () => setCart([]);
  
  const eliminarProducto = (id) => setCart(cart.filter(producto => producto.id !==  id));

  const precioTotal = () => {
    return cart.reduce((inicio,set) => inicio + set.cantidad * set.precio, 0)
  }
  

  return (
    <CartContext.Provider value={{vaciarCarrito,eliminarProducto,precioTotal,cart,setCart}}>
      {children}
    </CartContext.Provider>
  );
};
