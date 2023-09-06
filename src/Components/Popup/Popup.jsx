import React, { useState } from "react";
import "./Popup.css";
import Button from "../Buttons/Button";

const Popup = ({ item, onClose }) => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [quantity, setQuantity] = useState(item.qty || 1);

  const checkBoxExtra = (e) => {
    let checkValue = e.target.defaultValue;
    let check_value_state = selectedDrinks.some(
      (items) => items.extraDrink_name === checkValue
    );
    if (check_value_state) {
      setSelectedDrinks(
        selectedDrinks.filter((drink) => drink.extraDrink_name !== checkValue)
      );
    } else {
      setSelectedDrinks([
        ...selectedDrinks,
        { extraDrink_name: checkValue, price: 100 },
      ]);
    }
  };

  let increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  let decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  let totalPrice = item.prod_price * quantity;

  return (
    <div className="full-page-popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="d-flex align-items-center">
          <div style={{ flex: "1" }}>
            <h5 style={{ marginBottom: "20px" }}>
              Add a soft drink (Optional)
            </h5>
            <ul className="d-flex extra">
              {item.drink.map((product, index) => {
                return (
                  <>
                    <div>
                      <input
                        style={{ marginRight: "15px" }}
                        type="checkbox"
                        id={`drink-${index}`}
                        value={product}
                        onChange={(e) => checkBoxExtra(e)}
                      />
                      <label htmlFor={`drink-${index}`}>{product}</label>
                    </div>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="items-prices">
            <div className="item-img">
              <img src={item?.prod_image} alt={item.prod_title} />
            </div>
            <div className="shadow-img"></div>{" "}
            <div className="main-heading">
              <h2>{item.prod_title}</h2>
              <p>{item?.prod_desc.slice(0, 35)}</p>{" "}
              <div className="menu-add-more">
                <button onClick={increment}>+</button>
                <span className="cont-item">{quantity}</span>
                <button onClick={decrement}>-</button>
              </div>{" "}
              <div className="motal-cart-btn">
                <span>Price: {totalPrice} </span>
              </div>
              <Button
                items={item}
                text="Add to bucket"
                btn="ri-add-line rgeister-btn"
                selectedDrinks={selectedDrinks}
                quantity={quantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
