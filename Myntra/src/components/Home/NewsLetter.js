import React from "react";
import classes from "./NewsLetter.module.css";

export default function NewsLetter() {
  return (
    <div className={classes.newLetter}>
      <div className={classes.newLetterDetails}>
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-mail updates about our latest shop and
          <span> special offers.</span>
        </p>
      </div>
      <div className={classes.signUp}>
        <input type="text" placeholder="Your Email Address"></input>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
