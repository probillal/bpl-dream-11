import React from "react";
import bannerImage from "../../assets/bg-shadow.png";
import bannerLogoImg from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="container mx-auto hero min-h-96 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <img
            className="w-48 mx-auto mb-3"
            src={bannerLogoImg}
            alt={bannerLogoImg}
          />
          <h1 className="mb-5 text-2xl font-semibold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5">Beyond Boundaries Beyond Limits</p>
          <button className="btn btn-primary">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
