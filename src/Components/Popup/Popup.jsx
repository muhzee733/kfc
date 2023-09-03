import React from "react";
import "./Popup.css";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../Redux/Slices/Cart";

const Popup = ({ item, onClose }) => {
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };
  return (
    <div className="full-page-popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="d-flex align-items-center">
          <div style={{ flex: "1" }}>
            <div>
              <h4>Add a soft drink (Optional)</h4>{" "}
              <ul>
                <li>
                  1. Pepsi Regular ( Rs. 100)<span className="btnn">ADD</span>
                </li>
                <li>
                  2. 7UP Regular ( Rs. 100)<span className="btnn">ADD</span>
                </li>
                <li>
                  3. Mirinda Regular( Rs. 100) <span className="btnn">ADD</span>
                </li>
                <li>
                  4. Mountain Dew Regular ( Rs. 100){" "}
                  <span className="btnn">ADD</span>
                </li>
              </ul>
            </div>
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
                <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                <span className="cont-item">1</span>
                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
              </div>{" "}
              <div className="motal-cart-btn">
                <span>Total Price: </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
