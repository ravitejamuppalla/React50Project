import React from "react";
import classes from "./FeatureProducts.module.css";
import productsimage1 from "../../img/products/n1.jpg";
import productsimage2 from "../../img/products/n2.jpg";
import productsimage3 from "../../img/products/n3.jpg";
import productsimage4 from "../../img/products/n4.jpg";
import productsimage5 from "../../img/products/n5.jpg";
import productsimage6 from "../../img/products/n6.jpg";
import productsimage7 from "../../img/products/n7.jpg";
import productsimage8 from "../../img/products/n8.jpg";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function NewArrivals() {
  return (
    <div id={classes.featureProducts}>
      <div className={classes.headingCenter}>
        <h2>New Arrivals</h2>
        <p>Summer Collections New Modern Design</p>
      </div>
      <div className={classes.MainContainer}>
        <div className={classes.container}>
          <img src={productsimage1} alt="Product Image 1"></img>
          <div className={classes.productDetails}>
            <h6>Adidas</h6>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div className={classes.rating}>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className={classes.price}>
              <span>$75</span>
            </div>
          </div>
          <div className={classes.shoppingCart}>
            <ShoppingCartOutlinedIcon
              className={classes.shoppingIcon}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>

        <div className={classes.container}>
          <img src={productsimage2} alt="Product Image 1"></img>
          <div className={classes.productDetails}>
            <h6>Adidas</h6>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div className={classes.rating}>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className={classes.price}>
              <span>$75</span>
            </div>
          </div>
          <div className={classes.shoppingCart}>
            <ShoppingCartOutlinedIcon
              className={classes.shoppingIcon}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>
        <div className={classes.container}>
          <img src={productsimage3} alt="Product Image 1"></img>
          <div className={classes.productDetails}>
            <h6>Adidas</h6>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div className={classes.rating}>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className={classes.price}>
              <span>$75</span>
            </div>
          </div>
          <div className={classes.shoppingCart}>
            <ShoppingCartOutlinedIcon
              className={classes.shoppingIcon}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>
        <div className={classes.container}>
          <img src={productsimage4} alt="Product Image 1"></img>
          <div className={classes.productDetails}>
            <h6>Adidas</h6>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div className={classes.rating}>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className={classes.price}>
              <span>$75</span>
            </div>
          </div>
          <div className={classes.shoppingCart}>
            <ShoppingCartOutlinedIcon
              className={classes.shoppingIcon}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>
        <div className={classes.container}>
          <img src={productsimage5} alt="Product Image 1"></img>
          <div className={classes.productDetails}>
            <h6>Adidas</h6>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div className={classes.rating}>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className={classes.price}>
              <span>$75</span>
            </div>
          </div>
          <div className={classes.shoppingCart}>
            <ShoppingCartOutlinedIcon
              className={classes.shoppingIcon}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>

        <div className={classes.container}>
          <img src={productsimage6} alt="Product Image 1"></img>
          <div className={classes.productDetails}>
            <h6>Adidas</h6>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div className={classes.rating}>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className={classes.price}>
              <span>$75</span>
            </div>
          </div>
          <div className={classes.shoppingCart}>
            <ShoppingCartOutlinedIcon
              className={classes.shoppingIcon}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>
        <div className={classes.container}>
          <img src={productsimage7} alt="Product Image 1"></img>
          <div className={classes.productDetails}>
            <h6>Adidas</h6>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div className={classes.rating}>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className={classes.price}>
              <span>$75</span>
            </div>
          </div>
          <div className={classes.shoppingCart}>
            <ShoppingCartOutlinedIcon
              className={classes.shoppingIcon}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>
        <div className={classes.container}>
          <img src={productsimage8} alt="Product Image 1"></img>
          <div className={classes.productDetails}>
            <h6>Adidas</h6>
            <h5>Cartoon Astronaut T-shirt</h5>
            <div className={classes.rating}>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </div>
            <div className={classes.price}>
              <span>$75</span>
            </div>
          </div>
          <div className={classes.shoppingCart}>
            <ShoppingCartOutlinedIcon
              className={classes.shoppingIcon}
            ></ShoppingCartOutlinedIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
