import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Products from "./components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data);
  }, [data]);
  return (
    <div>
      <Banner />
      <div className="mx-10">

      <Products products={products} />
      </div>
    </div> 
  );
};

export default Home;
