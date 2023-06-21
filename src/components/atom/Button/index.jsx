import React from "react";

export default function Button(props) {
  const {
    color = "bg-green-400",
    children,
    size,
    type = "submit",
    onClick,
  } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-10 px-6 font-semibold rounded md ${color} ${size}  text-white`}
    >
      {children}
    </button>
  );
}
