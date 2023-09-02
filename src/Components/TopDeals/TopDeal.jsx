import React from "react";
import Title from "../Title/Title";
import Product from "../../Product.json";
import ProductBox from "../ProductBox/ProductBox";

const TopDeal = () => {
  const GetProducts = Product?.filter(checkCategory);
  function checkCategory(cat) {
    return cat.cate_id === 122;
  }
  let descActive = true;
  return (
    <div className="Topdeals">
      <div className="topdeal-wrapper">
        <div className="container">
          <Title title="TOP DEALS" />
          <div className="best-seller mt-4">
            {GetProducts?.slice(0, 4).map((item, index) => {
              return (
                <ProductBox item={item} index={index} descActive={descActive} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeal;
