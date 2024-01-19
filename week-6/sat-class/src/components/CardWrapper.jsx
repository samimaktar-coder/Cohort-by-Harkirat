import React from "react";

function CardWrapper({ children }) {
  return (
    <div
      style={{ background: "#454444", padding: "1rem", borderRadius: ".5rem" }}
    >
      {children}
    </div>
  );
}

export default CardWrapper;
