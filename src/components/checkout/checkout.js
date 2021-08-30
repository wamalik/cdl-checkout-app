import React, { useState } from "react";
//import ProductList from "../assets/ProductList";
//import toMoney from "../assets/toMoney";
//import Products from "../components/Products";
//import Basket from "../components/Basket";
import TitleBanner from "./title";
import ProductCatalog from "./products/productCatalog";
import LineItem from "./products/lineItems";
import Cart from "./cart/cart";
import Products from "./products/products"


let allProducts = {};

// set the products from the catalog
ProductCatalog.forEach(({ item }) => {
  allProducts[item] = 0;
});



const Checkout = () => {
  const [cartQuantities, setCartQuantities] = useState(allProducts);
  const [total, updateTotal] = useState(0);

  const setNewProductQuantities = (item, quantity) => {
    let newCartQuantities = { ...cartQuantities };
    newCartQuantities[item] += quantity;
    updateTotal(calculateTotal(ProductCatalog, newCartQuantities));
    setCartQuantities(newCartQuantities);
  };

  const calculateTotal = (productList, quantities) => {
    let total = 0;

    productList.forEach(({ item, unitPrice, offer }) => {
      if (quantities[item] === 0) return; // If the current product quantity is zero, move onto the next product
      if (offer) {
        // If the current product has a truthy property of specialOffer, calculate the necessary discount as well as any full priced remaining product quantity
        const { quantity, specialPrice } = offer;

        let deal = quantities[item] / quantity;
        let remainder = quantities[item] % quantity;

        total += Math.floor(deal) * specialPrice + remainder * unitPrice;
        return;
      }
      // If the quantity is above zero but it doesn't have any specialOffers, simply calculate the price
      total += quantities[item] * unitPrice;
    });

    return total;
  };

  const clearCart = () => {
    // Set the quantities back to the original empty product list, and total back to zero.
    setCartQuantities(allProducts);
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
