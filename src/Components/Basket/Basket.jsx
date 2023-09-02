import React from "react";
import "./Basket.css";
import { useSelector, useDispatch } from "react-redux";
import MiniCart from "../CartMenu/MiniCart";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../../Redux/Slices/Cart";

const Basket = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };
  const handleRemove = (item) => {
    dispatch(removeProduct(item));
  };
  return (
    <div className="basket-conainet-sticky">
      <div className="basket-items">
        <div className="item-add">
          <h3>Order Details</h3>
        </div>
        <div className="main_cart">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              return (
                <MiniCart
                  index={index}
                  item={item}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  handleRemove={handleRemove}
                />
              );
            })
          ) : (
            <div className="add-to-basket">
              <div className="kfc-basket">
                <img
                  src="https://www.kfcpakistan.com/static/media/kfc-meal.afc417f5d19998efd26b.png"
                  alt="kfc"
                />
                <h5>You haven’t added any items in bucket yet</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
