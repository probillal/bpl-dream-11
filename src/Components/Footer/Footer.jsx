import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className=" container mx-auto justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 ">
        <div className="space-y-2">
          <h4 className="text-2xl">About</h4>
          <p className="max-w-3xs">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl">Quick</h4>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div className="space-y-2">
          <h4 className="text-2xl">Subscribe</h4>
          <p className="max-w-3xs">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex items-center">
            <input
              className="bg-white p-2 rounded-l-lg text-black"
              type="Email"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary p-4 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <p className="text-center mb-3">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
