import { Fragment, useContext, useEffect, useState } from "react";
import classes from "./CockTailHome.module.css";
import CockTailList from "./CockTailList";
import CockTailSearch from "./CockTailSearch";
import storeContext from "../../store/store-context";
import useHttp from "../../hooks/useHttp";

function CockTailHome() {
  let { isLoading, iserror: error, sendRequest } = useHttp();
  const cocktail = useContext(storeContext);
  let [isInputSearchInput, setInputSearchInput] = useState("");

  function serachingTextFunc(data) {
    setInputSearchInput(data);
  }
  useEffect(() => {
    async function fetchData() {
      console.log(isInputSearchInput);
      let requestConfig;
      if (isInputSearchInput == null) {
        requestConfig = {
          url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
        };
      } else {
        requestConfig = {
          url:
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
            isInputSearchInput,
        };
      }
      function responsData(datadetails) {
        console.log(
          Object.keys(datadetails).length === 0 ? null : datadetails.drinks
        );
        cocktail.cocktailList(
          Object.keys(datadetails).length === 0 ? null : datadetails.drinks
        );
      }
      sendRequest(requestConfig, responsData);
    }
    fetchData();
  }, [isInputSearchInput]);
  return (
    <Fragment>
      <div className={classes.Header}>
        <div className={classes.AppHeading}>The Cocktail Hub</div>
        <ul className={classes.sideNavBar}>
          <li>Home</li>
          <li>About </li>
        </ul>
      </div>
      <CockTailSearch cocktailSearch={serachingTextFunc}></CockTailSearch>
      <CockTailList
        isloading={isLoading}
        error={error}
        sendRequest={sendRequest}
      ></CockTailList>
    </Fragment>
  );
}
export default CockTailHome;
