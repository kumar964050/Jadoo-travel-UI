import React from "react";

const Button = ({ className, children, handleClick, type }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
Button.defaultProps = {
  handleClick: () => {},
  type: "button",
};
