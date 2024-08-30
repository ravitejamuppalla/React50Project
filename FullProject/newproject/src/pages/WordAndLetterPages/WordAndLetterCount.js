import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
function WordAndLetterCount(props) {
  return (
    <Fragment>
      <Outlet></Outlet>
    </Fragment>
  );
}

export default WordAndLetterCount;
