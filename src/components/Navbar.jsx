import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className=" relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="text-xl">Logo</div>
          <div className="hidden md:flex space-x-3">
            <a href="https://#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="https://#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="https://#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="https://#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <div className="flex md:hidden">
            <div className="space-y-1.5">
              <span className="block w-7 h-0.5 bg-gray-600"></span>
              <span className="block w-7 h-0.5 bg-gray-600"></span>
              <span className="block w-7 h-0.5 bg-gray-600"></span>
            </div>
          </div>
          <a
            href="https://#"
            className="hidden md:block p-3  px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
};
