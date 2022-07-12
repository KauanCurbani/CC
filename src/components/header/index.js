import * as H from "./styles";
import ReactDOM from "react-dom/client";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";

function Header() {
  const nav = useRef();
  function MenuToggle() {
    nav.current.classList.toggle("is-active");
  }

  return (
    <H.Container>
      <h1 id="segalas">Segala's</h1>
      <nav>
        <BiMenuAltRight id="menuIcon" onClick={MenuToggle} />
      </nav>
      <H.Menu id="menu" ref={nav}>
        <Link to="/">Início</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/perfil">Cartão Ponto</Link>
      </H.Menu>
    </H.Container>
  );
}

export default Header;
