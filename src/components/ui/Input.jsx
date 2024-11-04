// Input.jsx
import React from "react";

export const Input = ({ type = "text", placeholder, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${className}`}
  />
);
