import React from "react";
import { CTAbutton } from "../CTAbutton";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center ">
          What's different about us
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img
              src="https://avatars.dicebear.com/api/micah/8.svg"
              className="w-20 -mt-14 bg-blue-200 rounded-full"
              alt="profile"
            />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              "This solution supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex  md:w-1/3">
            <img
              src="https://avatars.dicebear.com/api/micah/ali.svg"
              className="w-20 -mt-14 bg-blue-200 rounded-full"
              alt="profile"
            />
            <h5 className="text-lg font-bold">Richard Watt</h5>
            <p className="text-sm text-darkGrayishBlue">
              "Our team loves working with this new workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img
              src="https://avatars.dicebear.com/api/micah/46.svg"
              className="w-20 -mt-14 bg-blue-200 rounded-full"
              alt="profile"
            />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              "We have been able to cancel so many subscription since we started
              using the solution. There is no more cross-channel confusuin and
              everyone is much more focused."
            </p>
          </div>
        </div>
        <div className="my-16">
          <CTAbutton
            hover="hover:bg-brightRedLight"
            textColor="text-white"
            bgColor="bg-brightRed"
          />
        </div>
      </div>
    </section>
  );
};
