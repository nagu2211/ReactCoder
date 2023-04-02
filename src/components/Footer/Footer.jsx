import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Button } from "../Button/ButtonGeneral";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import "./Footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  const [email, setEmail] = useState();

  const db = getFirestore();

  const order = {
    email,
  };

  const orderCollection = collection(db, "novedades");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order);
  };

  const toast = useToast();

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <Link to="/resumen">
        <p className="footer-subscription-heading">
        CONSULTAR RESUMEN DE COMPRA
        </p>
        </Link>
        <p className="footer-subscription-text">
          ¡No dejes pasar esta oportunidad <br/>
          Dejanos tu email para mandarte las novedades y ofertas !
        </p>
        <div className="input-areas">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              buttonStyle="btn--outline"
              type="submit"
              onClick={()=> toast({
                title: "Email guardado",
                description: "Todas nuestras novedades y ofertas serian enviadas a su correo electronico",
                status: "success",
                duration: 4000,
                isClosable: true,
              })}
            >
              Enviar
            </Button>
          </form>
        </div>
        <a
          href="https://www.linkedin.com/in/santiago-espindola-a56ba4255/"
          target="_blank"
        >
          MY LINKEDIN
        </a>
        
      </section>
      
    </div>
  );
};

export default footer;
