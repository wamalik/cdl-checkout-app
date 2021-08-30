import React from "react";


const Cart = ({ total, quantities, clearCart }) => {
    return (
      <div style={{"display": "flex", "justify-content": "center", "align-items": "center","margin": "1rem"}}>
        <div style ={{"display": "flex", "flex-direction": "column", "justify-content": "center","align-items": "center",
  "width": "500px",
  "border-radius": "5px"}}>
          <h2><ul>Cart Items</ul></h2>
          <div>
            {Object.entries(quantities).map((item) =>
              item[1] > 0 ? (
                <div style={{"text-align": "left","font-size": "0.8rem;"}} key={item}>
                  <p >
                    <ul><bold>Product</bold>: {item[0]} </ul> 
                    <ul> Items: {item[1]} </ul>
                    <ul> ---------------- </ul>
                  </p>
                </div>
              ) : null
            )}
            <div>
              <h3>Total Amount: {total}</h3>
            </div>
          </div>
          <div>
          <button className="btn btn-outline-primary" onClick={clearCart}>
              Clear Cart
            </button>
            </div>
        </div>
      </div>
    );
  };
  
  export default Cart;