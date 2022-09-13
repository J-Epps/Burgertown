import React from "react";
import { Link } from "react-router-dom";

import { Button, Typography } from "@material-ui/core";

import "../css/herobanner.css";

function Banner(props) {
  return (
    <div className="section-center hero-container">
      <Typography className="hero-content box">
        <h1>Why eat at Burgertown?</h1>
        <p>
          Here at Burgertown we pride ourselves in our delicious Burgers. <br />{" "}
          We offer the best prices for the best quality of meals you can afford
          at our establishment.
        </p>
      </Typography>
      <article className="img-container box">
        <img
          width="300"
          height="300"
          src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Eating"
          className="main-img"
        />
      </article>
    </div>
  );
}

export default Banner;
