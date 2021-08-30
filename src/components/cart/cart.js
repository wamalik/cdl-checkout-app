import React from "react";


const Cart = ({ total, quantities, clearCart }) => {
    return (
      <div style={{"display": "flex", "justify-content": "center", "align-items": "center","margin": "1rem"}}>
        <div style ={{"display": "flex", "flex-direction": "column", "justify-content": "center","align-items": "center",
  "width": "200px",
  "background": "#b8b8b8",
  "border": "3px solid black",
  "border-radius": "5px"}}>
          <h2>Cart</h2>
          <div>
            {Object.entries(quantities).map((item) =>
              item[1] > 0 ? (
                <div style={{"text-align": "right","font-size": "0.8rem;"}} key={item}>
                  <p>
                    {item[0]} x {item[1]}
                  </p>
                </div>
              ) : null
            )}
            <div>
              <h3>Total: {total}</h3>
            </div>
          </div>
          <div>
          <button className="btn btn-outline-primary" onClick={clearCart}>
              show info
            </button>
            </div>
        </div>
      </div>
    );
  };
  
  export default Cart;