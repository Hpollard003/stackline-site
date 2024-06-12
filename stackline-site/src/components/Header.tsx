import React from "react";
import StacklineLogo from "../assets/stackline_logo.svg";

export const Header = () => {
  return (
    <div
      style={{
        background: "#052849",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        minHeight: "6%",
      }}
    >
      <a
        href="https://www.stackline.com"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src={StacklineLogo}
          alt="Image"
          style={{ height: "22px", marginLeft: "10px" }}
        />
      </a>
    </div>
  );
};
