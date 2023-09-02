import React from "react";
import "./Menu.css";
import MenuItems from "./MenuItems.json";
import { Link } from "react-router-dom";

const Menu = ({ closeSidebar }) => {
  return (
    <>
      <ul className="header-list">
        {MenuItems?.map((item, index) => {
          return (
            <li key={index} className="d-flex align-center p-1">
              <Link to={`${item.route}`} onClick={closeSidebar}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
