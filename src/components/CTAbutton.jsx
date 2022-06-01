import React from "react";
import classnames from "classnames";

export const CTAbutton = (props) => {
  const classStr = classnames(
    "p-3  px-6 pt-2 rounded-full baseline",
    props.bgColor,
    props.textColor,
    props.hover
  );

  return (
    <a href="https://#" className={classStr}>
      Get Started
    </a>
  );
};
