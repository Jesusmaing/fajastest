export const url = "https://us-central1-ope-website-392721.cloudfunctions.net/stripeCheckoutURL";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};