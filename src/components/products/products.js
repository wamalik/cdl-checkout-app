import React from "react";
import LineItem from "./lineItems";


const Products = ({ productList, quantity }) => {
  return (
    <div style={{ "width": "80%", "display": "flex" }}>
      <div style={{ "width": "20%", "display": "flex" }}></div>
      <div style={{ "width": "360px", "display": "flex" }}></div>

      <div style={{ "display": "block" }}>
        {productList.map((product) => (
          <LineItem
            product={product}
            key={product.item}
            quantity={quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
