import React, { useState } from "react";
//import ProductList from "../assets/ProductList";
//import toMoney from "../assets/toMoney";
//import Products from "../components/Products";
//import Basket from "../components/Basket";
import TitleBanner from "./title";
/*
let allProducts = {};

// Create a simple object, with properties consisting of all the item names imported from ProductList
ProductList.forEach(({ item }) => {
  allProducts[item] = 0;
});

const MainPage = () => {
  const [basketQuantities, setBasketQuantities] = useState(allProducts);
  const [total, updateTotal] = useState(toMoney(0));

  const setNewProductQuantities = (item, quantity) => {
    // Update the corresponding product in the basketQuantities, and recalculate the new total price
    let newBasketQuantities = { ...basketQuantities };
    newBasketQuantities[item] += quantity;
    updateTotal(calculateTotal(ProductList, newBasketQuantities));
    setBasketQuantities(newBasketQuantities);
  };

  const calculateTotal = (productList, quantities) => {
    let total = 0;

    productList.forEach(({ item, basePrice, specialOffer }) => {
      if (quantities[item] === 0) return; // If the current product quantity is zero, move onto the next product
      if (specialOffer) {
        // If the current product has a truthy property of specialOffer, calculate the necessary discount as well as any full priced remaining product quantity
        const { specialQuantity, specialPrice } = specialOffer;

        let deal = quantities[item] / specialQuantity;
        let remainder = quantities[item] % specialQuantity;

        total += Math.floor(deal) * specialPrice + remainder * basePrice;
        return;
      }
      // If the quantity is above zero but it doesn't have any specialOffers, simply calculate the price
      total += quantities[item] * basePrice;
    });

    return toMoney(total);
  };

  const resetBasket = () => {
    // Set the quantities back to the original empty product list, and total back to zero.
    setBasketQuantities(allProducts);
    updateTotal(toMoney(0));
  };

  return (
    <div>
      <Products
        productList={ProductList}
        setQuantity={setNewProductQuantities}
      />
      <Basket
        quantities={basketQuantities}
        total={total}
        resetBasket={resetBasket}
      />
    </div>
  );
};
*/
const Checkout = () => {
  return (
    <div>
      <TitleBanner />
    </div>
  );
};
export default Checkout;
