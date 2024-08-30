import React, { useEffect, useState, useContext } from "react";
import AddNewBudget from "./AddNewBudget";
import classes from "./Budget.module.css";
import BudgetList from "./BudgetList";
import BudgetTopHeader from "./BudgetTopHeader";
import { ToastContainer, toast } from "react-toastify";
import useHttp from "../../hooks/useHttp";
import budgetStore from "../../store/store-budget";
function BudgetHome(props) {
  let contextBudget = useContext(budgetStore);
  let { isLoading, iserror: error, sendRequest } = useHttp();
  const [isOpenBudget, setOpenBudget] = useState(false);
  function addBudgetFunction(props) {
    setOpenBudget(!isOpenBudget);
  }

  function responseOfBudget(responseData) {
    let responsedetails = [];
    responsedetails.push(responseData);
    contextBudget.budgetListSet(responsedetails);
  }
  useEffect(() => {
    let requestconfigGetCall = {
      url: "https://learningreact-f5a3c-default-rtdb.firebaseio.com/budgets.json",
    };
    sendRequest(requestconfigGetCall, responseOfBudget);
  }, [contextBudget.getaddedBudget]);

  return (
    <div className={classes.MainContainer}>
      <div className={classes.Container}>
        <BudgetTopHeader addBudgetHandler={addBudgetFunction}></BudgetTopHeader>
        <BudgetList></BudgetList>
      </div>
      <ToastContainer />
    </div>
  );
}

export default BudgetHome;
