import React from "react";
import "./Button.css";

const Button = ({ children, ...rest }) => (
  <button className="Button" {...rest}>
    {children}
  </button>
);

Button.Link = ({ children, ...rest }) => (
  <button className="Button link" {...rest}>
    {children}
  </button>
);

export default Button;
