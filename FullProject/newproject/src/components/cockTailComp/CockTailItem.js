import { Fragment, useContext } from "react";
import { Link, useNavigation, useParams } from "react-router-dom";
import classes from "./CockTailHome.module.css";
import storeContext from "../../store/store-context";

function CockTailItem() {
  const params = useParams();
  console.log(params.cockTailID);
  console.log("Cocktail Item datails");
  const contextItems = useContext(storeContext);
  console.log(contextItems.items.items);
  const ages = [32, 33, 16, 40];
  const result = ages.filter(checkAdult);

  function checkAdult(age) {
    return age >= 18;
  }
  console.log("The result is " + result);

  const finalListOfCOcktails = contextItems.items.items.filter(
    (dataDetails) => Number(dataDetails.idDrink) === Number(params.cockTailID)
  );
  let listofcocktails = finalListOfCOcktails[0];
  console.log(listofcocktails);

  return (
    <Fragment>
      <div className={classes.cockTailDetails}>
        <div className={classes.cocktailDataItem}>
          <div className={classes.headingDetails}>
            <button className={classes.backToHome}>
              <Link to="..">Back Home</Link>{" "}
            </button>
            <span className={classes.cocktailName}>
              {listofcocktails.strDrink}
            </span>
          </div>
          <div className={classes.cockTailDataValue}>
            <img src={listofcocktails.strDrinkThumb}></img>
            <div className={classes.cocktailItemsData}>
              <pairlist className={classes.pairList}>
                <pair className={classes.pair}>
                  <key>Name:</key>
                  <value>{listofcocktails.strDrink}</value>
                </pair>
                <pair className={classes.pair}>
                  <key>Category:</key>
                  <value>{listofcocktails.strCategory}</value>
                </pair>
                <pair className={classes.pair}>
                  <key>Info:</key>
                  <value>{listofcocktails.strAlcoholic}</value>
                </pair>
                <pair className={classes.pair}>
                  <key>Glass:</key>
                  <value>{listofcocktails.strGlass}</value>
                </pair>
                <pair className={classes.pair}>
                  <key>Instructions:</key>
                  <value>{listofcocktails.strInstructions}</value>
                </pair>
                <pair className={classes.pair}>
                  <key>Ingredients:</key>
                  <value>{listofcocktails.strIngredient1}</value>
                </pair>
              </pairlist>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CockTailItem;
