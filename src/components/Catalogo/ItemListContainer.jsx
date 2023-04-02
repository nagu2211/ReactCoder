import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const { marcas } = useParams();
  const { limitado } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const db = getFirestore();
    const itemsCollection = collection(db, "relojes");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(docs);
    });
  }, []);

  const marcFilter = data.filter((Producto) => Producto.marca === marcas);
  const limitFilter = data.filter((Producto) => Producto.disponibilidad === limitado);

  if (!data.length) return <Loading />;

  return (
    <div>
      {marcas ? (
        <ItemList productos={marcFilter} />
      ) : limitado ? (
        <ItemList productos={limitFilter} />
      ) : (
        <ItemList productos={data} />
      )}
    </div>
  );
};

export default ItemListContainer;
