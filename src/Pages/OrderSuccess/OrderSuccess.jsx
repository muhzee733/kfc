import React from "react";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="order-success">
      <h2>Thank you for your order!</h2>
      <p>Your order has been successfully placed and is being processed.</p>
      <p>We will send a confirmation email shortly with your order details.</p>
    </div>
  );
};

export default OrderSuccess;
