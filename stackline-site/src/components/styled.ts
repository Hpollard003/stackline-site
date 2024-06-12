import { styled } from "@mui/material";

export const Nav = styled("div")`
  background: #052849;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  min-height: 6%;
`;

export const Container = styled("div")`
  width: auto;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const Title = styled("h3")`
  margin: -12px;
  font-weight: bold;
`;

export const Subtitle = styled("p")`
  font-size: 14px;
  color: grey;
  width: 15rem;
  text-align: center;
`;

export const ProductImg = styled("img")`
  height: 50%;
  width: 50%;
  object-fit: contain;
  padding: 24px;
`;

export const TableHeader = styled("div")`
  color: #364957;
`;

export const TagsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
`;

export const Tags = styled("div")`
  flex: 0 0 auto;
  text-align: center;
  border: 1px solid #b3b5bd;
  color: #757a89;
  margin: 10px;
  padding: 0 7px;
`;

export const Divider = styled("div")`
  bordertop: 1px solid #b3b5bd;
  width: 90%;
`;

export const TableContainer = styled("div")`
  width: 100%;
  height: 50%;
  background: white;
  margin: 0 14px;
`;
