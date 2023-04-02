import { collection, addDoc, getFirestore, serverTimestamp } from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../../context/ShopppingCartContext";
import {
  Stack,
  Input,
  Button,
  Center,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  useToast,
  InputGroup,
  InputLeftAddon,
  ModalCloseButton,
} from "@chakra-ui/react";
import "./Cart.css";

const EnviarCompra = ({ total }) => {
  
  const { vaciarCarrito, cart } = useContext(CartContext);

  /* Info que se guarda en firebase */
  const [orderId, setOrderId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [phone, setPhone] = useState("");

  const db = getFirestore();

  const handleSubmit = () => {
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
  };

  const order = {
    nombre,
    email,
    domicilio,
    localidad,
    productos: cart.map((product) => ({
      id: product.id,
      nombre: product.nombre,
      cantidad: product.cantidad,
      precioXun: product.precio,
      subtotal: product.precio * product.cantidad,
    })),
    total,
    fecha: serverTimestamp()
  };

  const orderCollection = collection(db, "orden");

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cerrarModal = () => {
    onClose();
    vaciar();
  };

  /* Toast */
  const toast = useToast();

  const vaciar = () => {
    setTimeout(() => {
      vaciarCarrito();
    }, 2000);
  };

  const modal = () => {
    if (
      nombre === "" ||
      email === "" ||
      domicilio === "" ||
      localidad === "" ||
      phone === ""
    ) {
      toast({
        title: "Incompleto",
        description: "Por favor rellena todos los campos",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      handleSubmit();
      onOpen();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container className="formFondo">
        <Stack spacing={4} p="5px">
          <Center>
            <h2 className="tituloForm">Datos de entrega</h2>
          </Center>
          <Input
            color="white-alpha"
            type="text"
            variant="filled"
            placeholder="Nombre y Apellido"
            onChange={(e) => setNombre(e.target.value)}
          />
          <Input
            color="white-alpha"
            type="email"
            variant="filled"
            placeholder="Correo Electronico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroup>
            <InputLeftAddon children="+54" />
            <Input
              type="number"
              placeholder="ej:1123456789"
              variant="filled"
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
          <Input
            color="white-alpha"
            type="text"
            variant="filled"
            placeholder="Domicilio"
            onChange={(e) => setDomicilio(e.target.value)}
          />
          <Input
            color="white-alpha"
            type="text"
            variant="filled"
            placeholder="Localidad"
            onChange={(e) => setLocalidad(e.target.value)}
          />
          <Button onClick={modal} colorScheme="blue" variant="outline">
            Confirmar Compra
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>COMPRA REALIZADA</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                * IMPORTANTE * <br /> guarde esta clave de compra : {orderId}{" "}
                <br />- en la parte de abajo de tu pantalla tienes una opcion de consultar
                ticket de compra y te pedira este codigo -
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={cerrarModal}>
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Container>
    </form>
  );
};

export default EnviarCompra;
