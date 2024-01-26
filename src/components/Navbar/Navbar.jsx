import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/ButtonGeneral";
import { MenuButton, MenuList, MenuItem, Menu } from "@chakra-ui/react";
import CartWidget from "./CartWidget";


function NavBar() {
  const [click, setClick] = useState(false);

  const [boton, setBoton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setBoton(false);
    } else {
      setBoton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fa-brands fa-wirsindhandwerk"></i> MYWATCH
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/catalogo"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Catalogo
              </Link>
            </li>
            <li className="nav-item">
              <Menu>
                <MenuButton className="nav-links">Marcas</MenuButton>
                <MenuList>
                  <Link to={`/marcas/${"CASIO"}`} onClick={closeMobileMenu}>
                    <MenuItem>Casio</MenuItem>
                  </Link>
                  <Link to={`/marcas/${"BULOVA"}`} onClick={closeMobileMenu}>
                    <MenuItem>Bulova</MenuItem>
                  </Link>
                  <Link to={`/marcas/${"CITIZEN"}`} onClick={closeMobileMenu}>
                    <MenuItem>Citizen</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <Button buttonStyle="btn--outline">
              <CartWidget/>
            </Button>
              </Link>
            </li>
          </ul>
          {boton && (
            <Link to="/cart">
            <Button buttonStyle="btn--outline">
              <CartWidget/>
            </Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
