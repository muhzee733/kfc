import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.total_price, 0);
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-wrapper d-flex">
          <div className="flex-2">
            <CheckoutForm />
          </div>
          <div className="flex-1">
            <div className="cart-items">
              <div className="d-flex align-items-center justify-content-between">
                <h4>Items From Your Cart </h4>
                <h6>TotalPrice: Rs.{total}</h6>
              </div>
              <div className="cart-menu">
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((item, index) => {
                      return (
                        <div key={index} className="d-flex align-items-center">
                          <img width={100} src={item.prod_image}></img>
                          <div>
                            <h5>{item.prod_title}</h5>
                            <p>Rs. {item.total_price}</p>
                            <p>Qty. {item.qty}</p>
                          </div>
                        </div>
                      );
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
