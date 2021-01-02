import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://assets1.risnews.com/styles/content_sm/s3/2018-04/shopping-cart.png?itok=LUk_XbaE"
            height="30"
            alt=""
            loading="lazy"
          />
          <strong>
            {"  "}
            Shopping Cart{" "}
          </strong>
          <span className="badge badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
