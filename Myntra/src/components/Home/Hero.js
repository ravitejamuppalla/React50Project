import React, { Fragment } from "react";
import classes from "./Hero.module.css";
import heroImage from "../../img/hero4.png";

export default function Hero() {
  return (
    <Fragment>
      <div id={classes.heroSection}>
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </div>
    </Fragment>
  );
}
