import React from "react";
import { addToCart } from "../../Redux/Slices/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Button = ({ logo, text, alt, className, order, btn, items }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  let addToCard = (item) => {
    let filterCart = cartItems.find((product) => product.id === item.id);
    if (filterCart) {
      toast.warning("Item Already In Cart");
    } else {
      dispatch(addToCart(item));
      toast.success("Item added to cart!");
    }
  };
  return (
    <button className={btn} onClick={() => addToCard(items)}>
      {logo ? <img src={logo} alt={alt} className={className} /> : ""}
      <span className={`${order} `}>{text}</span>
    </button>
  );
};

export default Button;
