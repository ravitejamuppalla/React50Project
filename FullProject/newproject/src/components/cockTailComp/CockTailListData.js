import classes from "./CockTailHome.module.css";
import { Link } from "react-router-dom";

function CockTailListData(props) {
  let data = props.cocktailsDetails.data;
  return (
    <div className={classes.clocktailList}>
      <img src={data.strDrinkThumb}></img>
      <div className={classes.cockListDetails}>
        <span className={classes.strDrink}>{data.strDrink}</span>
        <span className={classes.strGlass}>{data.strGlass}</span>
        <span className={classes.strAlcoholic}>{data.strAlcoholic}</span>
        <button>
          <Link to={data.idDrink}>Details</Link>
        </button>
      </div>
    </div>
  );
}
export default CockTailListData;
