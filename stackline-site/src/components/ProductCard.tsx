import React, { Dispatch, SetStateAction } from "react";
import { stacklineResT } from "../constants";
import {
  CloseProductButton,
  Container,
  ProductImg,
  Subtitle,
  Tags,
  TagsContainer,
  Title,
} from "./styled";

interface Props {
  productData: stacklineResT;
  setProductData: Dispatch<SetStateAction<stacklineResT | undefined>>;
}

export const ProductCard = ({ productData, setProductData }: Props) => {
  return (
    <Container>
      <CloseProductButton onClick={() => setProductData(undefined)}>
        x
      </CloseProductButton>
      <ProductImg src={productData.image} />
      <Title>{productData.title}</Title>
      <Subtitle>{productData.subtitle}</Subtitle>
      <div
        style={{
          borderTop: "1px solid #b3b5bd",
          width: "90%",
        }}
      />
      <TagsContainer>
        {productData.tags.map((tag, index) => (
          <Tags key={index}>{tag}</Tags>
        ))}
      </TagsContainer>
      <div
        style={{
          borderBottom: "1px solid #b3b5bd",
          width: "90%",
          marginBottom: "100%",
        }}
      />
    </Container>
  );
};
