import React from "react";
import Title from "../Title/Title";
import Product from "../../Product.json";
import ProductBox from "../ProductBox/ProductBox";

const BSeller = () => {
  const GetProducts = Product?.filter(checkCategory);
  function checkCategory(cat) {
    return cat.cate_id === 121;
  }
  let descActive = false;
  return (
    <div className="best-seller">
      <div className="container">
        <Title title="Best Seller" />
        <div className="best-seller mt-4">
          {GetProducts?.slice(0, 4).map((item, index) => {
            return (
              <ProductBox item={item} index={index} descActive={descActive} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BSeller;
