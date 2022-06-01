import React from "react";
import { CTAbutton } from "../CTAbutton";
export const CTASection = () => {
  return (
    <section id="CTASection" className="bg-brightRed">
      <div className="container flex mx-auto justify-between px-6 py-24 flex-col space-y-12 md:py-12 md:space-y-0 md:flex-row">
        <h2 className="text-center text-5xl leading-tight font-bold text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        <div className="py-10">
          <CTAbutton
            hover="hover:bg-darkBlue"
            textColor="text-brightRed"
            bgColor="bg-white"
          />
        </div>
      </div>
    </section>
  );
};
