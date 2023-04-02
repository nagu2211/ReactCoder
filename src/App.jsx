import ItemListContainer from "./components/Catalogo/ItemListContainer";
import Footer from './components/Footer/Footer'
import ItemDetailContainer from "./components/Detalles/ItemDetailContainer";
import { ShoppingCartProvider } from "./context/ShopppingCartContext";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar/Navbar";
import Bienvenida from "./components/Home/Bienvenida";
import ResumenDeCompra from "./components/Footer/ResumenDeCompra"
import './App.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <ChakraProvider>
            <NavBar/>

            <Routes>
              <Route exact path="/" element={<Bienvenida/>}/>
              
              
              <Route exact path="/catalogo" element={<ItemListContainer />} />
              <Route exact path="/catalogo/:limitado" element={<ItemListContainer />} />
              <Route
                exact
                path="/marcas/:marcas"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/detalles/:id"
                element={<ItemDetailContainer />}
              />
              <Route exact path="/cart" element={<Cart/>} />
              <Route exact path="/resumen" element={<ResumenDeCompra/>} />
            </Routes>
            
            <Footer/>
          </ChakraProvider>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
