import React, { useContext } from "react";
import { CustomContext } from "../Context/CustomContext";
import CarritoImg from "../../assets/carrito1.png";

export const CartWidget = () => {
  const { totals } = useContext(CustomContext);
  return (
    <div style={{ display: "flex", marginLeft: "200px" }}>
      <img src={CarritoImg} alt="Carrito" style={{ width: "32px", height: "32px" }} />
      {totals.qty > 0 && <p>{totals.qty}</p>}
    </div>
  );
};

export default CartWidget;
