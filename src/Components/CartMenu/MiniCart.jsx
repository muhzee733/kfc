import React from "react";

const MiniCart = ({
  index,
  item,
  handleIncreaseQuantity,
  handleRemove,
  handleDecreaseQuantity,
}) => {
  return (
    <div key={index} className="main-cart">
      <div className="flex-container">
        <div className="flex-item-small">{index + 1}</div>
        <div className="flex-item-small">
          <img
            src={item.prod_image}
            alt={item.prod_title}
            className="image-size"
          />
        </div>
        <div className="flex-item-large">{item.prod_title}</div>
        <div className="flex-item-small">RS. {item.total_price}</div>
      </div>
      <div className="flex-container">
        <div className="flex-item-actions" onClick={() => handleRemove(item)}>
          Remove
        </div>
        <div className="flex-item-small">{item.qty}</div>
        <div
          className="flex-item-small"
          onClick={() => handleIncreaseQuantity(item)}
        >
          +
        </div>
        <div
          className="flex-item-small"
          onClick={() => handleDecreaseQuantity(item)}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
