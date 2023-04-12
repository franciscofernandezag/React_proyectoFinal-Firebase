import React, { useContext } from "react";
import { CustomContext } from "../Context/CustomContext";
import { Link } from "react-router-dom";
import "../Containers/style.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Cart = () => {
  const { cart, totals, removeFromCart } = useContext(CustomContext);

  const handlerStock = () => {
    const docReference = doc(db, "products", "rwerr5234rfwef");
    updateDoc(docReference, { stock: 50 });
  };

  return (
    <div className="cart-container">
      {!cart.length ? (
        <>
          <h1>
            No hay productos agregados al carrito. 
          </h1>
          <Link to={"/"}>Para volver al Home</Link>
          <h1>Porfavor seleccione productos e indique opcion comprar</h1>
        </>
      ) : (
        <>
          <div className="cart-products">
            {cart.map((product) => {
              return (
                <div key={product.id} className="product">
                  <h1>{product.title}</h1>
                  <img src={product.image} alt={product.title} />
                  <h4>Precio: {product.price}</h4>
                  <h4>Cantidad: {product.quantity}</h4>
                  <h2>Subtotal: ${product.price * product.quantity} </h2>
                  <button onClick={() => removeFromCart(product.id)}>
                    Eliminar
                  </button>
                </div>
              );
            })}
          </div>
          <h1 className="cart-total">Total : ${totals.total}</h1>
          <button className="cart-button" onClick={handlerStock}>
            Comprar
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
