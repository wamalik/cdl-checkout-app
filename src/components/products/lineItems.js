import React, { useState } from "react";

const LineItem = ({ product, setQuantity }) => {
    const { item, unitPrice, offer } = product;
  
    const [productQuantity, updateProductQuantity] = useState(0);
  
    return (
        <div className="row form-group">
        <h3>{item}</h3>
        <p>Price: {unitPrice}</p>
        <div  style ={{"color": "red", "font-weight": "bold"}}>
          {offer
            ? `Offer:  ${offer.quantity} for ${
                offer.specialPrice
              }`
            : ""}
        </div>
        <div style={{"display": "flex", "align-items": "center", "justify-content": "space-between", "flex-direction": "column", "width": "50%"}}>
          <input
            type="number"
            min="0"
            placeholder={productQuantity}
            onChange={(e) =>
              updateProductQuantity(
                e.target.value > 0 ? Number(e.target.value) : 0
              )
            }
          />
        

           <div>
          <button className="btn btn-outline-primary" onClick={() => setQuantity(item, productQuantity)}>
              show info
            </button>
            </div>

        </div>
      </div>
    );
  };
  
  export default LineItem;
  