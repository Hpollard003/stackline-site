import React from "react";
import { jsonResponse } from "../constants";
import {
  Container,
  ProductImg,
  Subtitle,
  Tags,
  TagsContainer,
  Title,
} from "./styled";

export const ProductCard = () => {
  const json = jsonResponse;
  return (
    <Container>
      <ProductImg src={json[0].image} />
      <Title>{json[0].title}</Title>
      <Subtitle>{json[0].subtitle}</Subtitle>
      <div
        style={{
          borderTop: "1px solid #b3b5bd",
          width: "90%",
        }}
      />
      <TagsContainer>
        {json[0].tags.map((tag, index) => (
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
