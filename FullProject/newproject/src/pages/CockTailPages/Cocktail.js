import CockTailHome from "../../components/cockTailComp/CockTailHome";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

function CockTail() {
  return (
    <Fragment>
      <Outlet></Outlet>
    </Fragment>
  );
}
export default CockTail;
