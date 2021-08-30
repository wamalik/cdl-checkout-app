import React, { useState } from "react";

const LineItem = ({ product, quantity }) => {
  
  const { item, unitPrice, offer } = product;

  const [productQuantity, updateProductQuantity] = useState(0);

  return (
    <div style={{ "display": "flex", "justify-content": "space-between", "flex-direction": "column", "width": "200px" }}>
      <h2>{item}</h2>
      <p>Price: {unitPrice} (GBP)</p>

      <div style={{ "display": "block", "align-items": "center", "color": "red", "font-weight": "bold", "width": "200px" }}>
        {offer
          ? `Offer:  ${offer.quantity} for ${offer.specialPrice}` : ""}

        <input type="text" min="0" placeholder={productQuantity}
          onChange={(e) => updateProductQuantity(e.target.value > 0 ? Number(e.target.value) : 0)}
        />


        <div style={{ "display": "flex" }}>
          <button className="btn btn-outline-primary" onClick={() => quantity(item, productQuantity)}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};
export default LineItem;
