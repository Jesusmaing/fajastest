import React from "react";
import BanImg from "../assets/img/common/man.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section id="banner_one">
        <div className="container flex flex-col p-10">
          <div className="banner_text_one ">
            <h1>
              Live For <span>Fashion</span>
            </h1>
            <h3>Save Up To 50%</h3>
            <Link  className="theme-btn-one bg-black btn_md">
              Shop Now
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="hero_img ">
              <img
                src={BanImg}
                alt="img"
                className="w-1/2 align-middle items-center justify-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
