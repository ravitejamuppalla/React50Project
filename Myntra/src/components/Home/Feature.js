import React from "react";
import classes from "./Feature.module.css";
import feaImg1 from "../../img/features/f1.png";
import feaImg2 from "../../img/features/f2.png";
import feaImg3 from "../../img/features/f3.png";
import feaImg4 from "../../img/features/f4.png";
import feaImg5 from "../../img/features/f5.png";
import feaImg6 from "../../img/features/f6.png";

export default function Feature() {
  return (
    <div id={classes.features}>
      <div className={classes.featureCard}>
        <img src={feaImg1} alt="featureImage1"></img>
        <h5>Free Shipping</h5>
      </div>
      <div className={classes.featureCard}>
        <img src={feaImg2} alt="featureImage2"></img>
        <h5>Order Online</h5>
      </div>
      <div className={classes.featureCard}>
        <img src={feaImg3} alt="featureImage3"></img>
        <h5>Save Money</h5>
      </div>
      <div className={classes.featureCard}>
        <img src={feaImg4} alt="featureImage4"></img>
        <h5>Promotions</h5>
      </div>
      <div className={classes.featureCard}>
        <img src={feaImg5} alt="featureImage5"></img>
        <h5>Happy Sell</h5>
      </div>
      <div className={classes.featureCard}>
        <img src={feaImg6} alt="featureImage6"></img>
        <h5>F24/7 Support</h5>
      </div>
    </div>
  );
}
