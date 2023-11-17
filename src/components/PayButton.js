
import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../api/urls";
import { functions,getStripeURL } from "../fireabase.config";

const PayButton = ({ cartItems }) => {
  const context = useSelector((state) => state.bazar);
    
  
  const handleCheckout = async () => {
    try {
      const response = await getStripeURL({items:context.productData})
      const checkoutUrl = response.data;

      if (typeof window !== "undefined") {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error calling stripeCheckout function:", error);
     }
  };
  
    return (
      <>
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleCheckout() }>Check out</button>
      </>
    );
  };
  
  export default PayButton;