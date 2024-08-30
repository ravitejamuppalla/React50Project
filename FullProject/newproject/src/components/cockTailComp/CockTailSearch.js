import { Fragment } from "react";
import classes from "./CockTailHome.module.css";

function CockTailSearch(props) {
  function searchText(event) {
    setTimeout(() => {
      props.cocktailSearch(event.target.value);
    }, 500);
  }
  return (
    <Fragment>
      <div className={classes.searchBlock}>
        <input placeholder="Search cocktails.." onChange={searchText}></input>
      </div>
    </Fragment>
  );
}
export default CockTailSearch;
