import React from "react";
import "./Deal.css";
import Data from "./Data.json";

const Deal = () => {
  return (
    <div className="deals">
      <div className="deal-wrapper">
        <div className="container">
          <div className="deal-box d-flex flex-wrap">
            {Data?.map((items, index) => {
              return (
                <>
                  <div key={index}>
                    <a>
                      <img src={items.link} />
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
