import { Outlet } from "react-router-dom";
import { Fragment } from "react";

function ReviewCorner() {
  return (
    <Fragment>
      <Outlet></Outlet>
    </Fragment>
  );
}

export default ReviewCorner;
