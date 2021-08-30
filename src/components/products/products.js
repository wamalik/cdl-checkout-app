import React from "react";
import LineItem from "./lineItems";



const Products = ({ productList, setQuantity }) => {
  return (
    <div style={{"width": "100%"}}>
      <div style={{"display": "flex", "justify-content": "center", "flex-wrap": "wrap"}}>
        {productList.map((product) => (
          <LineItem
            product={product}
            key={product.item}
            setQuantity={setQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
