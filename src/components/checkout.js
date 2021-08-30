import React, { useState } from "react";
import TitleBanner from "./title";
import ProductCatalog from "./products/productCatalog";
import Cart from "./cart/cart";
import Products from "./products/products";
import CartTotal from "./totalCalculator";





const Checkout = () => {

  let products = {};

ProductCatalog.forEach(({ item }) => {
  products[item] = 0;
});

  const [cartQuantities, setCartQuantities] = useState(products);
  const [total, updateTotal] = useState(0);

  const setNewProductQuantities = (item, quantity) => {
    let newCartQuantities = { ...cartQuantities };
    newCartQuantities[item] += quantity;
    updateTotal(CartTotal(ProductCatalog, newCartQuantities));
    setCartQuantities(newCartQuantities);
  };

  const clearCart = () => {
    // Set the quantities back to the original empty product list, and total back to zero.
    setCartQuantities(products);
    updateTotal(0);
  };

  return (
    <div>
      <TitleBanner />
      <Products
        productList={ProductCatalog}
        setQuantity={setNewProductQuantities}
      />
      <Cart
        quantities={cartQuantities}
        total={total}
        clearCart={clearCart}
      />
    </div>
  );
};



export default Checkout;
