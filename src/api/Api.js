import axios from "axios";
import { db } from "../fireabase.config";
import { collection, addDoc, getDocs } from "firebase/firestore";


export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  const productsData = [];
  const productCollection = collection(db, 'products'); 
  const productSnapshot = await getDocs(productCollection);

  productSnapshot.forEach(doc => { productsData.push(doc.data()) });

  console.group("products");
  console.log(productsData);
  console.groupEnd();

  return productsData;
}


