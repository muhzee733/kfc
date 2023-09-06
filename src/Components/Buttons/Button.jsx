import React, { useState } from "react";
import { addToCart } from "../../Redux/Slices/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Button = ({
  logo,
  text,
  alt,
  className,
  order,
  btn,
  items,
  selectedDrinks,
  quantity,
}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [textButton, setTextButton] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let addToCard = (item) => {
    let filterCart = cartItems.find((product) => product.id === item.id);
    if (filterCart) {
      toast.warning("Item Already In Cart");
    } else {
      dispatch(
        addToCart({
          ...item,
          qty: quantity,
          selectedDrinks: selectedDrinks,
        })
      );
      setTextButton(true);
      toast.success("Item added to cart!");
    }
  };
  const handleButtonClick = () => {
    if (textButton) {
      navigate("/checkout");
    } else {
      addToCard(items);
    }
  };
  const buttonText = textButton ? "Checkout" : "ADD TO BUCKET";
  return (
    <button
      className={btn}
      onClick={() => {
        handleButtonClick();
      }}
    >
      {logo ? <img src={logo} alt={alt} className={className} /> : ""}
      <span className={`${order} `}>{buttonText}</span>
    </button>
  );
};

export default Button;
