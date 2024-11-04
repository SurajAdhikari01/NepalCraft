// Button.jsx
import React from "react";

export const Button = ({ children, className, variant, onClick }) => {
  const baseStyle = `px-4 py-2 font-semibold rounded-md focus:outline-none transition-all duration-300 ${className}`;
  const styles = {
    primary: `${baseStyle} bg-blue-500 text-white hover:bg-blue-600`,
    outline: `${baseStyle} border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`,
    ghost: `${baseStyle} text-blue-500 hover:bg-blue-50`,
  };

  return (
    <button className={styles[variant] || baseStyle} onClick={onClick}>
      {children}
    </button>
  );
};
