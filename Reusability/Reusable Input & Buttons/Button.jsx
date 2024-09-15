import React from "react";

const Button = ({ text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, padding: "10px", margin: "10px" }}
    >
      {text}
    </button>
  );
};

export default Button;
