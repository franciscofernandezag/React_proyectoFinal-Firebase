import React from "react";
import { NavLink } from "react-router-dom";
import "../Containers/style.css"

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Novela", route:'/categories/Novela'},
    { id: 2, name: "Divulgacion", route:"/categories/Divulgacion"},
    { id: 3, name: "Clasico", route:'/categories/Clasico'},
    { id: 4, name: "Filosofia ", route:"/categories/Filosofia "},
    { id: 5, name: "Auto Ayuda ", route:"/categories/AutoAyuda "},
    
  ];
  return (
    <nav>
      {categories.map((category) => {
        return (
          <NavLink key={category.id}  to={category.route}>{category.name}</NavLink>
          
        );
      })}
    </nav>
  );
};

export default NavCategories;
