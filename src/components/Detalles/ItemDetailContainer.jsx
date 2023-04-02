import React,{useState,useEffect} from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {

  const {id} = useParams();

  const [detalle,setDetalle] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0,0);
    const db = getFirestore();
    const getProducto = async () => {
      const queryRef = doc(db, "relojes", id);
      const response = await getDoc(queryRef);
      const newItem = {
        id: response.id,
        ...response.data(),
      };
    setDetalle(newItem);
    };
    getProducto();

  }, [id]);
  
  

  return (
    <>
    {detalle.length === 0 ?  <Loading/> :  <ItemDetail detalle={detalle} index={0} />}
   </>
  )
}

export default ItemDetailContainer