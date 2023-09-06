import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-wrapper d-flex">
          <div className="flex-2">flex2</div>
          <div className="flex-1">
            <div className="cart-items">
              <h4>Items From Your Cart</h4>
              <div className="cart-menu">
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((item, index) => {
                      return { item };
                    })}
                  </>
                ) : (
                  <h2>No Product Into Cart</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
