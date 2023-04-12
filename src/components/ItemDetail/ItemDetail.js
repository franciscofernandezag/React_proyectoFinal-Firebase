import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CustomContext } from "../Context/CustomContext";
import "../../components/Containers/style.css";

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addProduct } = useContext(CustomContext);

  const onAdd = (count) => {
    setIsPressedButton(true);
    addProduct(product, count);
  };

  return (
    <div className="card">
      <div>
        <div>
          <h1 className="card__title">Titulo {product.title}</h1>
          <h6 className="card__title"> Autor {product.author}</h6>
          <h6 className="card__title">Categoria {product.category}</h6>
          <div className="card__image">
            <img src={product.image} alt={product.title} />
          </div>
          <h3 className="card__price"> Descripcion : {product.description}</h3>
          <h6 className="card__price"> Precio ${product.price}</h6>
          <h6 className="card__price"> Stock {product.stock}</h6>
        </div>
        <div className="card__title">
          {isPressedButton ? (
            <div>
              <Link to="/cart">
                <button className="card__button">Finalizar compra</button>
              </Link>
              <Link to="/">
                <button className="card__button">Seguir comprando</button>
              </Link>
            </div>
          ) : (
            <ItemCount onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
