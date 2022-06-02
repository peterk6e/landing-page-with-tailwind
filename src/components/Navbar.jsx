import React, { useState } from "react";
import { CTAbutton } from "./CTAbutton";

export const Navbar = () => {
  const initialBtnMenuClass = "block hamburger md:hidden focus:outline-none";
  const initialMenuClass = `absolute flex-col items-center self-end py-8 mt-10 space-y-6 
    font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`;
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [menuBtnClass, setMenuBtnClass] = useState(initialBtnMenuClass);
  const [menuClass, setMenuClass] = useState(
    initialMenuClass.concat(" ", "hidden")
  );

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
    setMenuBtnClass(
      isToggleOn ? initialBtnMenuClass : initialBtnMenuClass.concat(" ", "open")
    );
    setMenuClass(
      isToggleOn
        ? initialMenuClass.concat(" ", "hidden")
        : initialMenuClass.concat(" ", "flex")
    );
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="text-xl">Logo</div>
        <div className="hidden space-x-6 md:flex">
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
          <a href="https://#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <div className="md:block hidden">
          <CTAbutton
            hover="hover:bg-brightRedLight"
            textColor="text-white"
            bgColor="bg-brightRed"
          />
        </div>
        <button className={menuBtnClass} onClick={handleToggle}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div className={menuClass}>
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
          <a href="https://#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};
