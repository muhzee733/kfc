import React, { useState } from "react";
import "./Header.css";
import { FaBarsStaggered } from "react-icons/fa6";
import Logo from "../../Images/kfc.png";
import delivery from "../../Images/delivery.png";
import Pickup from "../../Images/pickup.png";
import Button from "../Buttons/Button";
import SideCart from "../SideCart/SideCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
const Header = () => {
  let count = useSelector((state) => state.cart.items);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const showHandle = () => {
    setOpenCart(!openCart);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="main-header header-color position-relative">
      <div className="header-wrapper">
        <div className="container">
          <div className="d-flex align-center justify-content-between">
            <div className="left-box align-center d-flex">
              <FaBarsStaggered onClick={toggleSidebar} />
              <Link to="/">
                <img src={Logo} alt="kfc" className="kfc-logo" />
              </Link>
              <SideCart
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
              />
              <Button
                logo={delivery}
                text="Delivery"
                alt="delivery"
                className="delivery"
                order="order"
                btn="btn"
              />
              <Button
                logo={Pickup}
                text="PickUp"
                alt="PickUp"
                className="delivery"
                order="order"
                btn="btn2"
              />
            </div>
            <div className="right-box d-flex align-items-center">
              <button className="fly-cart-btn d-flex" onClick={showHandle}>
                {count.length}
              </button>
              {openCart ? <CartMenu setOpenCart={setOpenCart} /> : ""}
              <Button
                text="Login"
                className="delivery "
                order="order "
                btn="btn login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
