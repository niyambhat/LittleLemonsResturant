import React from 'react';
import yum from "../../Assets/yum.png"
const MenuItem = ({ title, price, description }) => {
  return (
    <div className="specialsItem card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={yum} alt="restaurant" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{description}</p>
        <button class="btn btn-lg btn-primary" type="button">Order a delivery</button>
      </div>
    </div>
  );
};

export default MenuItem;
