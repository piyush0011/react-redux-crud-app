import React from "react";
import "./style.css";

const card = (props) => {
  const { item } = props;
  return (
    <div className="card mb-4 box-shadow">
      <div className="text-left hover-box">
        <div className="">
          <span className="img trending-proj">
            <img src="https://www.prestigeconstructions.com/wp-content/uploads/2017/08/prestige-group-logo.png" width="100%" />
          </span>
          <div className="image-title-disc">
            <p className="mt-3 mb-0 card-title-desc">SNN Raj Etternia</p>
            <p className="mt-0 card-title-by">by SNN Builders</p>
            <p className="mt-0 mb-0 card-title-aprt">2, 3, 4 BHK Apartment, Pen</p>
            <p className="mt-0 mb-0 card-title-add">Haralaur road, Adj HSR, Bang</p>
            <p className="mt-0 mb-0 card-title-price">86.00 L+</p>
          </div>
        </div>
        <div className="on-hover">
          <div className="cent">
            <a href="javascript:void(0)">EDIT</a>
            <a href="javascript:void(0)">DELETE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
