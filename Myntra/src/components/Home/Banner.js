import React from "react";
import classes from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={classes.Banner}>
      <span>Repair Services</span>
      <h3>Up to 70% off - All t-shirt & Accessories</h3>
      <button>Explore More</button>
    </div>
  );
}
