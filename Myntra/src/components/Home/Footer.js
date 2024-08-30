import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import logoImage from "../../img/logo.png";
import AppleStoreImage from "../../img/pay/app.jpg";
import GooglePlayStore from "../../img/pay/play.jpg";
import paymentsGateway from "../../img/pay/pay.png";

export default function Footer() {
  return (
    <Fragment>
      <div className={classes.footerDetails}>
        <div className={classes.container1}>
          <img src={logoImage} alt="Logo Image"></img>
          <div>
            <h6>Contact </h6>
            <div className={classes.addressDetails}>
              <span className={classes.addressHeading}>Address:</span>
              <span className={classes.addressDetailsData}>
                {" "}
                562 Wellington Road Street 32,San Francisco
              </span>
            </div>
            <div className={classes.addressDetails}>
              <span className={classes.addressHeading}>Phone:</span>
              <span className={classes.addressDetailsData}>
                {" "}
                +01 22222 365/(+91) 01 2345 6789
              </span>
            </div>
            <div className={classes.addressDetails}>
              <span className={classes.addressHeading}>Hours:</span>
              <span className={classes.addressDetailsData}>
                {" "}
                10:00-18:00.Mon-Sat
              </span>
            </div>
          </div>

          <div className={classes.followus}>
            <p>
              <strong>Follow Us</strong>
            </p>
            <i className="fa fa-facebook-f"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa  fa-instagram"></i>
            <i className="fa fa-github"></i>
            <i className="fa fa-youtube-play"></i>
          </div>
        </div>
        <div className={classes.container2}>
          <p>
            <strong>About</strong>
          </p>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms&Conditions</p>
          <p>Contact Us</p>
        </div>

        <div className={classes.container2}>
          <p>
            <strong>My Account</strong>
          </p>
          <p>Sign In</p>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help</p>
        </div>
        <div className={classes.container3}>
          <p>
            <strong>Install App </strong>
          </p>
          <p>From App Store or Google Play</p>
          <img src={AppleStoreImage}></img>
          <img src={GooglePlayStore}></img>
          <p>Secured Payment Gateways</p>
          <img src={paymentsGateway}></img>
        </div>
      </div>
      <div className={classes.copyRights}>
        @2022,Tech2 etc- HTML CSS Ecommerce Template
      </div>
    </Fragment>
  );
}
