import React from "react";
import facebook from "../../img/sm/facebook.svg";
import twitter from "../../img/sm/twitter.svg";
import instagram from "../../img/sm/instagram.svg";

export const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="flex container flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          
          <div className="mx-auto my-6 text-center text-white md:hidden">
          Copyright &copy;2022 All Rights Reserved
          </div>
          <div className="text-2xl mb-5 text-white">Logo</div>
          <div className="flex space-x-6">
            <a href="https://#">
              <img src={facebook} alt="ico" />
            </a>
            <a href="https://#">
              <img src={twitter} alt="ico" />
            </a>
            <a href="https://#">
              <img src={instagram} alt="ico" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32 ">
          <div className="flex flex-col text-white">
            <a href="#heroSection" className="hover:text-brightRed">
              Home
            </a>
            <a href="https://#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="https://#" className="hover:text-brightRed">
              Products
            </a>
            <a href="https://#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="https://#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="https://#" className="hover:text-brightRed">
              Community
            </a>
            <a href="https://#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="py-2 px-6 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">Copyright &copy;2022 All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};
