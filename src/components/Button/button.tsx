import React from "react";
import "./button.css";

export const Appbutton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactElement;
}) => {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      {children}
    </button>
  );
};

