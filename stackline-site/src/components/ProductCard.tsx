import React from "react";
import { jsonResponse } from "../constants";

export const ProductCard = () => {
  const json = jsonResponse;
  return (
    <div
      style={{
        width: "auto",
        height: "100%",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img
        src={json[0].image}
        style={{
          height: "50%",
          width: "50%",
          objectFit: "contain",
          padding: "12px",
        }}
      />
      <h3 style={{ margin: "10px 0 -10px 10px", fontWeight: "bold" }}>
        {json[0].title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "grey",
          width: "15rem",
          textAlign: "center",
        }}
      >
        {json[0].subtitle}
      </p>
    </div>
  );
};
