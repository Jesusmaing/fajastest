import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { url } from "../api/urls";
import { functions, getStripeURL } from "../fireabase.config";
// Simple CSS spinner (You can replace it with your preferred spinner)
const Spinner = () => (
  <div
    className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"
    role="status"
  >
  </div>
);
const PayButton = ({ cartItems }) => {
  const context = useSelector((state) => state.bazar);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const handleCheckout = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await getStripeURL({
        cartItems: context.productData,
        successUrl: "http://localhost:3000/success",
        cancelUrl: "http://localhost:3000/cancel",
        storeID: "bgYkQofK6TTQxaMuNNUo",
      });

      //console.log("response", response);
      const checkoutUrl = response.data.url;

      if (typeof window !== "undefined") {
        setIsLoading(false); // Stop loading
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      //` console.error("Error calling stripeCheckout function:", error);
      setIsLoading(false); // Stop loading in case of error
    }
  };

  return (
    <>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
      onClick={() => handleCheckout()}
      disabled={isLoading} // Disable button when loading
    >
      {isLoading ? <Spinner /> : 'Check out'}
    </button>
  </>
  );
};

export default PayButton;
