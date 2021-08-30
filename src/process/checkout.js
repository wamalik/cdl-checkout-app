import React, { useState } from "react";
import ProductCatalog from "../components/products/productCatalog";
import Cart from "../components/cart/cart";
import Products from "../components/products/products";
import CartTotal from "./totalCalculator";


const Checkout = () => {

  let products = {};
  ProductCatalog.forEach(({ item }) => {
    products[item] = 0;
  });

  const [initialCartItemCount, modifiedCartItemCount] = useState(products);

  const [total, updateTotal] = useState(0);

  const updateProductItemCount = (item, quantity) => {
    let newCartQuantities = { ...initialCartItemCount };
    newCartQuantities[item] += quantity;
    updateTotal(CartTotal(ProductCatalog, newCartQuantities));
    modifiedCartItemCount(newCartQuantities);
  };

  const clearCart = () => {
    modifiedCartItemCount(products);
    updateTotal(0);
  };

  return (
    <div>
      <h1 align="center">CDL Checkout Application</h1>
      <Products
        productList={ProductCatalog}
        quantity={updateProductItemCount}
      />
      <Cart
        quantities={initialCartItemCount}
        total={total}
        clearCart={clearCart}
      />
    </div>
  );
};



export default Checkout;
