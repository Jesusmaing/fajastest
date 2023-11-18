import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-justify">
          Fajas y Fajas, your go-to store for all your shapewear needs. We offer
          a wide range of high-quality products designed for support and
          comfort. Our selection includes slimming shapewear, body shapers,
          post-surgical girdles, and sports waist trainers, as well as related
          accessories. Commitment to customer satisfaction and offering
          top-notch products are at the heart of our service. Explore our
          collection and find everything you need for excellent body support and
          shaping.
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;
