import axios from "axios";
import { db } from "../fireabase.config";
import { collection, addDoc, getDocs } from "firebase/firestore";


export async function productsData() {
  const productsData = [];
  // store id bgYkQofK6TTQxaMuNNUo
  // products are in stores/storeId/products
  const productCollection = collection(db, 'stores/bgYkQofK6TTQxaMuNNUo/products');
  const productSnapshot = await getDocs(productCollection);

  // const productCollection = collection(db, 'store'); 
  // const productSnapshot = await getDocs(productCollection);

  productSnapshot.forEach(doc => { productsData.push(doc.data()) });

  console.group("products");
  console.log(productsData);
  console.groupEnd();
    

  return productsData;
}


