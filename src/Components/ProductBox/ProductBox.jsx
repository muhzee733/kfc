import React, { useState } from "react";
import "./ProductBox.css";
import Button from "../Buttons/Button";
import Popup from "../Popup/Popup";
const ProductBox = ({ item, index, descActive }) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <div
        className={`best-seller-img  ${descActive ? "h-420" : ""}`}
        key={index}
      >
        <div className="kfc-box ">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="image-wrapper w-100">
          <img
            onClick={togglePopup}
            className="bestseller-container"
            src={item?.prod_image}
            alt={item.prod_title}
          />
        </div>
        <div
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
          className={`${
            descActive
              ? "d-flex align-top justify-content-center"
              : "d-flex align-center justify-content-between"
          }`}
        >
          <div>
            <h6>{item.prod_title}</h6>

            {descActive === true ? (
              <p class="card-text">{item?.prod_desc.slice(0, 35)}...</p>
            ) : null}
          </div>
          <div className={`${descActive ? " " : "wdp-ribbon wdp-ribbon-two"}`}>
            <div className="d-flex align-items-end">
              <h5 className="rs-title mb-0">Rs:</h5>
              <div className="pkr-title">{item.prod_price}</div>
            </div>
          </div>
        </div>
        {descActive === true ? (
          <div className="price-label">
            <Button
              items={item}
              text="Add to bucket"
              btn="ri-add-line rgeister-btn"
            />
          </div>
        ) : null}
      </div>{" "}
      {showPopup && <Popup item={item} onClose={togglePopup} />}
    </>
  );
};

export default ProductBox;
