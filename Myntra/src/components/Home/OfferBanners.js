import React from "react";
import classes from "./OfferBanner.module.css";

export default function OfferBanners() {
  return (
    <div className={classes.Banners}>
      <div className={classes.offerBanner1}>
        <div className={`${classes.firstBannner} ${classes.itemsCenter}`}>
          <h6>crazy deals</h6>
          <h3>buy 1 get 1 free</h3>
          <p>The best classic dress in on sale at cara </p>
          <button>Learn More</button>
        </div>

        <div className={`${classes.secondBanner} ${classes.itemsCenter}`}>
          <h6>spring/summer</h6>
          <h3>upcomming season </h3>
          <p>The best classic dress in on sale at cara </p>
          <button>Collection</button>
        </div>
      </div>
      <div className={classes.offerBanner2}>
        <div
          className={`${classes.thirdBannner} ${classes.itemsCenter} ${classes.secondrow}`}
        >
          <span className={classes.bannerHeading}>Seasonal Sale</span>
          <span className={classes.subBannerHeading}>
            Winter Collection-50% Off
          </span>
        </div>

        <div
          className={`${classes.fourthBannner} ${classes.itemsCenter} ${classes.secondrow}`}
        >
          <span className={classes.bannerHeading}>New Footwear Collection</span>
          <span className={classes.subBannerHeading}>Spring / Summer 2022</span>
        </div>
        <div
          className={`${classes.fivthBannner} ${classes.itemsCenter} ${classes.secondrow}`}
        >
          <span className={classes.bannerHeading}>T Shirts</span>
          <span className={classes.subBannerHeading}>New Trendy Prints</span>
        </div>
      </div>
    </div>
  );
}
