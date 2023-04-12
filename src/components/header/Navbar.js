import React from "react";
import logo from "../../assets/tienda.png";
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../Containers/style.css"


const Navbar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        <h1>EBOOKSTOTAL</h1>
        <h2>TIENDA VIRTUAL DE EBOOKS</h2>
      </div>
      <div>
      <NavCategories />
      </div>
      <Link to={"/cart"}><CartWidget /></Link>
    </header>
  );
};

export default Navbar;



