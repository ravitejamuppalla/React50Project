import { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import menu from "./data.js";
import MenuItem from "./MenuItem.js";
import classes from "./MenuItem.module.css";

function ListOfMenuDetails() {
  let param = useParams();

  let pramsData;
  if (!param.cafeFilter) pramsData = "all";
  else pramsData = param.cafeFilter;
  // pramsData = param.cafeFilter;
  console.log(param.cafeFilter);
  console.log(pramsData);
  let filteredData = menu.filter((DataList) => {
    if (pramsData.toLowerCase() === "all") return DataList;
    return DataList.category.toLowerCase() === pramsData.toLowerCase();
  });
  console.log(filteredData);
  if (filteredData.length == 0)
    return (
      <Fragment>
        <h1 className={classes.filterFailed}>
          Opps we don't have the Category you are searching for !
        </h1>
      </Fragment>
    );

  return (
    <Fragment>
      <div className={classes.container}>
        {filteredData.map((Data) => (
          <MenuItem itemDetails={Data}></MenuItem>
        ))}
      </div>
    </Fragment>
  );
}
export default ListOfMenuDetails;
