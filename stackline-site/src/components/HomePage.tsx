import React, { useEffect, useState } from "react";
import { fetchProductData } from "../api/api";
import { ProductCard } from "./ProductCard";
import { Table } from "./Table";
import { stacklineResT } from "../constants";
import { ProductImg, ProductPageContainer, SelectProductPage } from "./styled";

export const HomePage = () => {
  const [productData, setProductData] = useState<stacklineResT>();
  const [products, setProducts] = useState<stacklineResT[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: "5%" }}>
      {products && !productData ? (
        <div>
          {products.map((product) => {
            return (
              <SelectProductPage
                key={product.id}
                onClick={() => setProductData(product)}
              >
                <ProductImg src={product.image} />
                <div style={{ fontWeight: "bold", textAlign: "center" }}>
                  {product.title}
                </div>
                <div style={{ fontStyle: "italic", textAlign: "center" }}>
                  {product.brand}
                </div>
                <div style={{ fontStyle: "italic", textAlign: "center" }}>
                  {product.retailer}
                </div>
                <div style={{ textAlign: "center" }}>
                  {product.details.map((detail, ind) => (
                    <li key={ind}>{detail}</li>
                  ))}
                </div>
              </SelectProductPage>
            );
          })}
        </div>
      ) : null}
      {productData ? (
        <>
          <ProductPageContainer>
            <ProductCard
              productData={productData}
              setProductData={setProductData}
            />
            <Table productData={productData} />
          </ProductPageContainer>
        </>
      ) : null}
    </div>
  );
};
