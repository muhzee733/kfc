import React from "react";
import Title from "../Title/Title";
import Menu from "./Menu";
import "./ExploreMenu.css";

const ExploreMenu = () => {
  return (
    <div className="explorSection ">
      <div className="explore-wrapper">
        <div className="container">
          <Title title="EXPLORE MENU" />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
