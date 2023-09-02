import React from "react";
import "./CartMenu.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../../Redux/Slices/Cart";
import MiniCart from "./MiniCart";

const CartMenu = ({ setOpenCart }) => {
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
    <div className="mainSidebarCart">
      <div className="sidebarCart">
        <span
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => setOpenCart(false)}
        >
          X
        </span>
        <div className="cartSideBar">
          <h2 className="mt-3">Cart Items</h2>
          {cartItems.length > 0 ? (
            <div className="CartSideBarMenu">
              <h5>Your order Summary</h5>
              <div className="main_cart">
                {cartItems.map((item, index) => {
                  return (
                    <>
                      <MiniCart
                        index={index}
                        item={item}
                        handleIncreaseQuantity={handleIncreaseQuantity}
                        handleDecreaseQuantity={handleDecreaseQuantity}
                        handleRemove={handleRemove}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          ) : (
            "No Product Into Cart!"
          )}
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
