import React from "react";
import Menu from "./Store.json";
import "./Li.css";

const Li = () => {
  return (
    <>
      <ul className="header-list">
        {Menu?.map((item, index) => {
          return (
            <li key={index} className="d-flex align-center p-1">
              <img width="30px" src={item.image} /> {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Li;
