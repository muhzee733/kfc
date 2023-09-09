import React from "react";
import "./SideCart.css";
import Button from "../Buttons/Button";
import Li from "../../Components/Li/Li";
import Menu from "../../Components/Menu/Menu";

const SideCart = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <div className={isSidebarOpen ? "open-sidebar" : ""}>
      <div className="sidebar">
        <div className="d-flex align-center justify-content-between">
          <button className="btn">Login</button>
          <span
            style={{ color: "white", cursor: "pointer" }}
            onClick={closeSidebar}
          >
            X
          </span>
        </div>
        <div>
          <Li />
          <Menu closeSidebar={closeSidebar} />
        </div>
      </div>
    </div>
  );
};

export default SideCart;
