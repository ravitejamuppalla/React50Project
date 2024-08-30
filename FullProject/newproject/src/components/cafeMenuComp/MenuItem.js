import { Fragment } from "react";
import classes from "./MenuItem.module.css";
function MenuItem({ itemDetails }) {
  let words = itemDetails.title.split(" ");
  let title = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  return (
    <Fragment>
      <div className={classes.MenuDetails}>
        <img src={itemDetails.img}></img>
        <div className={classes.menuDetailsData}>
          <div className={classes.menuHeading}>
            <div className={classes.title}>{title}</div>
            <div className={classes.price}>${itemDetails.price}</div>
          </div>
          <div className={classes.borderInBetwwen}></div>
          <div className={classes.menuSubHeading}>{itemDetails.desc}</div>
        </div>
      </div>
    </Fragment>
  );
}
export default MenuItem;
