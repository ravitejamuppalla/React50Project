import { Fragment } from "react";
import Menu from "../../components/cafeMenuComp/Menu";
import { Navigate, Outlet, redirect, useNavigate } from "react-router-dom";
import ListOfMenuDetails from "../../components/cafeMenuComp/ListOfMenuDetails";

function CafeMenu() {
  // function Sample() {
  //   let naviagte = useNavigate();
  //   naviagte("/cafeMenu/All");
  // }

  return (
    <Fragment>
      <Menu></Menu>
      <Outlet></Outlet>
    </Fragment>
  );
}
export default CafeMenu;
