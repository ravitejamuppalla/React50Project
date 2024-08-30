import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./CockTailHome.module.css";
import storeContext from "../../store/store-context";
import useHttp from "../../hooks/useHttp";
import Loader from "../../hooks/Loader";
import CockTailListData from "./CockTailListData";

function CockTailList(props) {
  console.log(props);
  const cocktail = useContext(storeContext);
  let isLoading = props.isloading;
  let error = props.error;
  let sendRequest = props.sendRequest;

  console.log(!isLoading);
  console.log(cocktail.items.items[0] == null);
  console.log(!error);

  return (
    <Fragment>
      <h1 className={classes.cocktailHeadingList}>Cocktails</h1>
      {isLoading && (
        <div className={classes.cocktailListContainerLoader}>
          <Loader></Loader>
        </div>
      )}
      {!isLoading && error && (
        <div className={classes.cocktailListContainerLoader}>
          <h1>{error}</h1>
        </div>
      )}
      {!isLoading && cocktail.items.items[0] == null && !error && (
        <div className={classes.cocktailListContainerLoader}>
          <h1>Couldn't Find the Cocktails You are searching for!</h1>
        </div>
      )}
      {!isLoading && !(cocktail.items.items[0] == null) && !error && (
        <div className={classes.cocktailListContainer}>
          {cocktail.items.items.map((data, index) => {
            return (
              <Fragment>
                <CockTailListData
                  key={index}
                  cocktailsDetails={{ data }}
                ></CockTailListData>
              </Fragment>
            );
          })}
        </div>
      )}
    </Fragment>
  );
}
export default CockTailList;
