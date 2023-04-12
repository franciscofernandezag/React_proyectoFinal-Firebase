import React, { useState } from "react";
import "../../components/Containers/style.css";

const ItemCount = ({ onAdd, stock = 50 }) => {
  const [count, setCount] = useState(1);

  const handlerClickAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handlerClickSubtrack = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button className="card__button" onClick={() => handlerClickSubtrack()}>
          -
        </button>
        <span className="card__price">{count}</span>
        <button className="card__button" onClick={() => handlerClickAdd()}>
          +
        </button>
      </div>
      <button className="card__button" onClick={() => onAdd(count)}>
        Agregar
      </button>
    </div>
  );
};
export default ItemCount;
