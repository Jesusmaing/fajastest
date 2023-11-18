import React from "react";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../redux/bazarSlice";
import { useDispatch, useSelector } from "react-redux";

function Success() {
  const [countdown, setCountdown] = React.useState(3);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // countdown from 3 to 0 and redirect to subscriptions page
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);
    if (countdown === 0) {
      clearInterval(interval);

      navigate("/");
    }
    return () => clearInterval(interval);
  }, [countdown, navigate]);

  React.useEffect(() => {
    dispatch(resetCart());
  }, []);
  return (
    <div>
      {/* Display the redirecting page at the center of page and countdown from 3 to 0 */}
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              Payment successfully completed...
            </h3>
            {/* Display redirecting message to the user */}
            <div className="mt-2">
              <p className="text-sm text-gray-500 w-96">
                You will be redirected to the subscriptions page in{" "}
                <span className="font-bold">{countdown}</span> seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
