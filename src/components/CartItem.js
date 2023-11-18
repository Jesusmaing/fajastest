import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  return (
    <>
      <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        {productData.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          productData.map((item) => (
            <div
              key={`${item._id}-${item.color}-${item.size}`} // Clave única que incluye el ID, color y talla
              className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-gray-100 p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <MdOutlineClose
                  onClick={() => dispatch(deleteItem(item._id)) & toast.error(`${item.name} is removed`)}
                  className="text-2xl text-gray-600 hover:text-red-600 cursor-pointer"
                />
                <img
                  className="w-24 h-24 object-cover"
                  src={item.imageUrls[0]}
                  alt="productImg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Color: <span style={{ backgroundColor: item.color, width: '15px', height: '15px', display: 'inline-block' }}></span></p>
                <p>Size: {item.size}</p>
              </div>
              <p className="text-lg">${item.price}</p>
              <div className="flex items-center justify-between text-gray-500 gap-4 border p-2 rounded">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <span
                    onClick={() => dispatch(decrementQuantity(item))}
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </span>
                  {item.quantity}
                  <span
                    onClick={() => dispatch(increamentQuantity(item))}
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </span>
                </div>
              </div>
              <p className="text-lg">${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))
        )}
        <button
          onClick={() => dispatch(resetCart()) & toast.error("Your Cart is Empty!")}
          className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
        >
          Reset Cart
        </button>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default CartItem;
