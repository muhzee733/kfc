import React from "react";
import productData from "../../Product.json";
import { useParams } from "react-router-dom";
import "./Menu.css";
import Title from "../../Components/Title/Title";
import categoryData from "../../Category.json";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Basket from "../../Components/Basket/Basket";
const Menu = () => {
  let { id } = useParams();
  let filterProduct = productData.filter(
    (item) => item.cate_id === parseInt(id)
  );
  const category = categoryData.find((cate) => cate.cate_id === parseInt(id));
  let categoryNameResult = category ? category.category_name : "";
  let descActive = true;
  return (
    <div className="category">
      <div className="container">
        <div className="category-wrapepr  ">
          <div style={{ flex: "2" }}>
            <Title title={categoryNameResult} />
            <div
              className="best-seller "
              id="category"
              style={{ flexWrap: "wrap" }}
            >
              {filterProduct.map((item, index) => (
                <ProductBox item={item} index={index} descActive={descActive} />
              ))}
            </div>
          </div>
          <div style={{ flex: "1" }} id="basket">
            {<Basket />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
