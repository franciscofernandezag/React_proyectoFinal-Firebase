import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((data) => {
        setProduct({
          id: data.id,
          ...data.data(),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {
        <>
          {loading ? (
            <h1>Cargando...</h1>
          ) : (
            <ItemDetail product={product} className="container__flex" />
          )}
        </>
      }
    </>
  );
};
