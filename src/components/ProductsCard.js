import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.stripeProductID;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="col-lg-12 col-md-6 col-sm-6 col-12">
      <div className="product_box">
        <div className="product_img" onClick={handleDetails}>
          <div className="w-full h-60 cursor-pointer overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 duration-500 product_img "
              src={product.imageUrls[0]}
              alt="productImg"
              onClick={handleDetails}
            />
            <div className="absolute top-4 right-0">
              {product.isNew && (
                <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
                  Sale
                </p>
              )}
            </div>
            {/* <div className="product_action_box">
              <ul className="list_none pr_action_btn">
                <li>
                  <a
                    href="#!"
                    // onClick={() => addToFav(props.data.id)}
                    className="popup-ajax"
                  >
                    <i className="fa fa-heart "></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    //onClick={() => setModalShow(true)}
                    className="action quickview"
                    title="Quick view"
                  >
                    {" "}
                    <i className="fa fa-expand"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    //onClick={() => addToComp(props.data.id)}
                  >
                    <i className="fa fa-exchange"></i>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="product_info">
          <h5 className="product_title">{product.name.substring(0, 15)}</h5>
          <div className="product_price">
            <span className="price">${product.price}.00</span>
          </div>
          <div className="add-to-cart">
            <a
              className="offcanvas-toggle  theme-btn-one bg-black btn_sm"
              onClick={() => {
                toast.success(`${product.name} is added`);

                dispatch(
                  addToCart({
                    _id: product.stripeProductID,
                    size: product.size,
                    name: product.name,
                    imageUrls: product.imageUrls,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                    stripePriceID: product.stripePriceID,
                    stripeProductID: product.stripeProductID,
                    sizeInventory: product.sizeInventory,
                    colors: product.colors,
                  })
                );
              }}
            >
              <i className="fa fa-cart-arrow-down"></i>Add To Cart
            </a>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full relative group product_box text-center">
      <div
        onClick={handleDetails}
        className="w-full h-60 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-contain group-hover:scale-110 duration-500 product_img"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="product_action_box">
        <ul className="list_none pr_action_btn">
          <li>
            <a href="#!" onClick={() => {}} className="popup-ajax">
              <i className="fa fa-heart"></i>
            </a>
          </li>
          <li>
            <a
              href="#!"
              onClick={() => {}}
              className="action quickview"
              title="Quick view"
            >
              {" "}
              <i className="fa fa-expand"></i>
            </a>
          </li>
          <li>
            <a href="#!" onClick={() => {}}>
              <i className="fa fa-exchange"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="product_info">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold product_title">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="text-sm relative w-28 flex justify-end overflow-hidden">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              {!product.isSpecialRequest && (
                <div className="flex gap-3 product_price">
                  {product.oldPrice != product.price && (
                    <p className="line-through text-gray-500">
                      ${product.oldPrice}
                    </p>
                  )}

                  <p className="font-semibold">${product.price}</p>
                </div>
              )}
              {product.isSpecialRequest && (
                <p className="font-semibold">Special Request</p>
              )}
            </div>

            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                    stripeID: product.stripeID,
                  })
                ) & toast.success(`${product.title} is added`)
              }
              className="add-to-cart absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
      </div>
      <div className="absolute top-4 right-0">
        {product.isNew && (
          <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
            Sale
          </p>
        )}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductsCard;
