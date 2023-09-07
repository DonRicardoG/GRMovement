import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../Photos/logo.png";

const NavBar2 = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="logo" width="90px" height="80px" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" className={style.listNavBar}>
            <li>
              <Link to="/" onClick={() => window.scroll(0, 0)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/details">¿Como funciona?</Link>
            </li>
            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar2;
