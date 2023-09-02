import React from "react";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <h2 className="items-title">
      <span>{title}</span>
    </h2>
  );
};

export default Title;
