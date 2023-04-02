import {
  Card,
  Center,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Alert,
  AlertIcon,
  Stack,
  Image,
  Button,
  Container,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/ShopppingCartContext";
import { Link } from "react-router-dom";
import EnviarCompra from "./EnviarCompra";
import "./Cart.css";


const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const { cart, eliminarProducto, precioTotal, vaciarCarrito } =
    useContext(CartContext);

  

  if (cart.length === 0) {
    return (
      <div className="carritoVacio">
        <h2>¡ Tu carrito esta vacio !</h2>

        <Link to="/catalogo">
          <Button>Al catalogo</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="carritoFondo">
      <Alert status="warning" className="alerta">
        <AlertIcon />
        Atencion: No podras adquirir mas productos del stock disponible
      </Alert>
      <div className="cart">
        <Center>
        <h2 className="titulo">Productos</h2>
        </Center>
        <div className="productos">
          {cart.map((item) => {
            return (
              <Container key={item.id} className="cartMain">
                <Card width="xs" maxW="xs" maxH="xs" key={item.id} >
                  <CardBody>
                    <Stack mt="7" spacing="4">
                      <Center>
                        <Image
                          boxSize="50px"
                          objectFit="cover"
                          src={item.img[0]}
                          alt="Producto"
                        />
                        <Heading size="md">{item.nombre}</Heading>
                      </Center>
                      <Center>
                        <Text>
                          precio: $ {item.precio}
                          <br />
                          cantidad: {item.cantidad}
                          <br />
                          stock disponible : {item.stock}
                        </Text>
                      </Center>
                      <Center>
                        <Text color="blue.600" fontSize="2xl">
                          subtotal: $ {item.cantidad * item.precio}
                        </Text>
                      </Center>
                    </Stack>
                  </CardBody>
                  
                  <Center >
                    <CardFooter pb="40px">
                      <Button
                        variant="solid"
                        colorScheme="red"
                        onClick={() => eliminarProducto(item.id)}
                        
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </CardFooter>
                  </Center>
                </Card>
              </Container>
            );
          })}
        </div>
        <Center>
        <Text color="white">Total: $ {precioTotal()}</Text>
        </Center>
        <Center>
        <Button colorScheme="red" onClick={vaciarCarrito} className="botonVaciar">Vaciar Carrito</Button>
        </Center>
      </div>
      
     
      <EnviarCompra total={precioTotal()} />
    </div>
  );
};

export default Cart;
