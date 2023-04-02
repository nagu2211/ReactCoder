import React, { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./Footer.css";
import {
  Container,
  Box,
  Divider,
  Center,
  Input,
} from "@chakra-ui/react";

const resumenCompra = () => {
  const [idResumen, setIdResumen] = useState("");
  const [resumen, setResumen] = useState("");
  const [confirmarResumen, setConfirmarResumen] = useState("1");

  const confirmacion = () => {
    if (idResumen !== "") {
      setConfirmarResumen(idResumen);
    } else {
      setConfirmarResumen(confirmarResumen);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const db = getFirestore();

    const queryDoc = doc(db, "orden", confirmarResumen);
    getDoc(queryDoc).then((res) => setResumen({ id: res.id, ...res.data() }));
  }, [confirmarResumen]);

  if (confirmarResumen === "1") {
    return (
      <div className="resumenCompra">
        <Center>
          <Container centerContent minW="100%">
            <Box padding="4" bg="white" color="black" p={30} className="ticket">
              <h2>
                INSERTE ID DE COMPRA <i className="fa-solid fa-arrow-down"></i>
              </h2>

              <Input
                placeholder="sin espacios ni guiones"
                size="md"
                onChange={(e) => setIdResumen(e.target.value)}
              />
              <button type="submit" onClick={confirmacion} className="btnConsultar">
                CONSULTAR
              </button>
              <p>
                (si no aparece el ticket deseado: revisa que no contenga guiones ni espacios,
                distingue mayusculas y minusculas)
              </p>
            </Box>
          </Container>
        </Center>
      </div>
    );
  }

  return (
    <div className="resumenCompra">
      <Center>
        <Container centerContent minW="100%">
          <Box padding="4" bg="white" color="black" p={30} className="ticket">
            <h2 className="titulo">RESUMEN DE COMPRA</h2>
            <h2 className="titulo">"MY WATCH"</h2>
            <p className="id">id de factura: {resumen.id}</p>
            {Array.isArray(resumen.productos) &&
              resumen.productos.map((producto) => {
                return (
                  <p className="productos">
                    {producto.cantidad} x {producto.nombre} -- ${" "}
                    {producto.subtotal} ARS{" "}
                  </p>
                );
              })}
            <Divider />
            <p className="footer">
              TOTAL : $ {resumen.total} ARS <br />
              Metodo de pago: Efectivo
            </p>
            <p className="agradecimiento"> ¡GRACIAS POR ELEGIRNOS! </p>
          </Box>
        </Container>
      </Center>
    </div>
  );
};

export default resumenCompra;
