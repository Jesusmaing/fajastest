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
          Optical Parts and Equipment, your trusted store for all your optical needs.
          We provide a wide range of high quality ophthalmic products designed for precision and reliability.
          Our offerings include lenses, frames, optical instruments, and various ophthalmic equipment.
          Commitment to customer satisfaction and offering top-notch products are at the heart of our service.
          Explore our collection and find everything you need to provide excellent eye care services.

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
