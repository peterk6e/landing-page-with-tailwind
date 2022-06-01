import React from "react";
import { CTAbutton } from "./CTAbutton";

export const Navbar = () => {
  return (
    <div>
      <nav className="relative container mx-auto p-6">
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
          <CTAbutton
              hover="hover:bg-brightRedLight"
              textColor="text-white"
              bgColor="bg-brightRed"
            />
        </div>
      </nav>
    </div>
  );
};
