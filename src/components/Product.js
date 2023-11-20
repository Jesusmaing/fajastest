import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [baseQty, setBaseQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  // Estado para la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (details.imageUrls && details.imageUrls.length > 0) {
      setSelectedImage(details.imageUrls[0]);
    }
  }, [details.imageUrls]);

  const handleAddToCart = () => {
    console.log(details);
    if (details.colors && details.colors.length > 0) {
      // if first index staart with #
      if (details.colors[0].startsWith('#')) {

        if (!selectedColor) {
          toast.error("Please select a color");
          return;
        }
      }
    }
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    dispatch(
      addToCart({
        _id: details.stripeProductID,
        name: details.name,
        imageUrls: details.imageUrls,
        price: details.price,
        quantity: baseQty,
        size: selectedSize,
        color: selectedColor,
        description: details.description,
        stripePriceID: details.stripePriceID,
        stripeProductID: details.stripeProductID,

      })
    );
    toast.success(`${details.name} is added`);
  };
  // Función para obtener colores únicos
  const uniqueColors = () => {
    const colors = details.inventory.map(item => item.color);
    return [...new Set(colors)];
  };

  // Función para obtener tallas únicas
  const uniqueSizes = () => {
    const sizes = details.inventory.map(item => item.size);
    return [...new Set(sizes)];
  };

  // Función para obtener tallas disponibles por color seleccionado
  const sizesForColor = (color) => {
    return details.inventory
      .filter(item => item.color === color && item.quantity > 0)
      .map(item => item.size);
  };

  const renderSizes = () => {
    if (!details.inventory || !selectedColor) return null;

    const availableSizes = sizesForColor(selectedColor);

    // Check if there are available sizes
    if (availableSizes.length === 0) {
      return <div>No stock available in this color.</div>;
    }

    return availableSizes.map((size, index) => {
      return (
        <div
          key={index}
          className={`border rounded-full w-16 mr-2 h-8 flex items-center justify-center cursor-pointer ${selectedSize === size
            ? "bg-black text-white"
            : "text-gray-500 hover:bg-gray-200"
            }`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </div>
      );
    });
  };


  const renderColors = () => {
    if (!details.inventory) return null;

    return uniqueColors().map((color, index) => (
      <div
        key={index}
        style={{
          backgroundColor: color,
          width: "25px",
          height: "25px",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => setSelectedColor(color)}
      >
        {selectedColor === color && (
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "15px",
              height: "3px",
              backgroundColor: "green",
            }}
          ></div>
        )}
      </div>
    ));
  };


  return (
    <div className="max-w-screen-xl mx-auto my-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5 w-full">
          <img
            className="w-full h-auto object-cover"
            src={selectedImage}
            alt="productImg"
          />
          {/* Miniaturas de imágenes */}
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {details.imageUrls &&
              details.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`thumbnail-${index}`}
                  className="w-24 h-24 object-cover cursor-pointer"
                  onClick={() => setSelectedImage(url)}
                />
              ))}
          </div>
        </div>
        <div className="md:w-3/5 w-full flex flex-col gap-6">
          <div>
            <h2 className="text-4xl font-semibold">{details.name}</h2>
            <div className="flex items-center gap-4 mt-3">
              {/* <p className="line-through font-base text-gray-500">
                ${details.oldPrice}
              </p> */}
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          {/* <div className="flex items-center gap-2">
            <div className="flex text-base">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div> */}
          <p
            className="text-base text-gray-500 -mt-3"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {details.description}
          </p>{" "}
          {/* Sección de colores */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Available Colors</h3>
            <div className="flex gap-2">

              <div className="flex gap-2">{renderColors()}</div>

            </div>
          </div>
          {/* Sección de tallas */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Sizes</h3>
            <div className="flex flex-wrap">{renderSizes()}</div>
          </div>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                {baseQty}
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Product;
