import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import "../Containers/style.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const q = name
      ? query(productsCollection, where("category", "==", name))
      : productsCollection;

    getDocs(q)
      .then((data) => {
        const list = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(list);
      })
      .catch(() => {
        setError(true);
      });
  }, [name]);

  return (
    <>
      {error && (
        <p>
          {" "}
          No se pudiero cargar sus productos , porfavor intente nuevamente{" "}
        </p>
      )}
      <div className="container__flex">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
