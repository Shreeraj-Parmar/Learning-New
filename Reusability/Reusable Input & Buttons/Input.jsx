import React from "react";

const Input = ({ type, name, id, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={{ padding: "10px", margin: "10px", width: "200px" }}
    />
  );
};

export default Input;
