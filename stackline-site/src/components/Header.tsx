import React from "react";
import StacklineLogo from "../assets/stackline_logo.svg";
import { Nav } from "./styled";

export const Header = () => {
  return (
    <Nav>
      <a
        href="https://www.stackline.com"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src={StacklineLogo}
          alt="Image"
          style={{ height: "24px", marginLeft: "10px" }}
        />
      </a>
    </Nav>
  );
};
