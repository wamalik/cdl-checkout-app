import React, { useState } from "react";

const CartTotal = (productList, quantities) => {
    let total = 0;

    productList.forEach(({ item, unitPrice, offer }) => {
     
        if (quantities[item] === 0) return; 
           
      if (offer) {
        const { quantity, specialPrice } = offer;

        let offerDeal = quantities[item] / quantity;
        let remainder = quantities[item] % quantity;

        total += Math.floor(offerDeal) * specialPrice + remainder * unitPrice;
        return;
      }
      total += quantities[item] * unitPrice;
    });

    return total;
  };

  export default CartTotal;
