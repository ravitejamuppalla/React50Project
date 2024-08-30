import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AddNewBudget from "../../components/budgetComp/AddNewBudget";
import BudgetHome from "../../components/budgetComp/BudgetHome";

function Budget() {
  return (
    <Fragment>
      <BudgetHome></BudgetHome>
      <Outlet></Outlet>
    </Fragment>
  );
}

export default Budget;
