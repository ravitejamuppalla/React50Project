import React, { Fragment, useContext, useEffect } from "react";
import classes from "./Budget.module.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import budgetStore from "../../store/store-budget";
import { getIDWithName } from "./BudgetUtils";
import { getObjectWithID } from "./BudgetUtils";
import useHttp from "../../hooks/useHttp";
import {
  SucessMessageTroster,
  ErrorMessageTroster,
} from "../utils/ApplicationUtils";

import { ToastContainer, toast } from "react-toastify";

function ViewExpenses(props) {
  let addexpensesTostify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  let paramsdetails = useParams();
  let budgetStoreDetails = useContext(budgetStore);
  let listOFAmount = [];
  let { isLoading, iserror: error, sendRequest } = useHttp();
  let navigator = useNavigate();
  let keyOfObject = getIDWithName(
    budgetStoreDetails.budgetList,
    paramsdetails.viewExpenses
  );
  let BudgetObject = getObjectWithID(
    budgetStoreDetails.budgetList,
    keyOfObject
  );

  function responseOfBudget(datadetails) {
    SucessMessageTroster("Deleted the Expenses Sucessfully");
    setTimeout(() => {
      budgetStoreDetails.addBudget(datadetails);
    }, 1000);
  }

  function deleteExpenses(data) {
    let newTargetValue = BudgetObject.newBudget.amount.filter((details) => {
      return !(details.id == data.target.id);
    });

    const remainingAmount = newTargetValue.map((data) => data.amount);
    let finalRemainngamount = remainingAmount.reduce(getSum, 0);

    function getSum(total, num) {
      return total + Math.round(num);
    }
    BudgetObject.newBudget["amount"] = newTargetValue;
    BudgetObject.newBudget["totalAmountUsed"] = finalRemainngamount;
    let requestconfig = {
      url:
        "https://learningreact-f5a3c-default-rtdb.firebaseio.com/budgets/" +
        keyOfObject +
        ".json",
      method: "PUT",
      body: JSON.stringify(BudgetObject),
      headers: {
        "Content-Type": "application/json",
      },
    };
    sendRequest(requestconfig, responseOfBudget);
  }

  function deleteBudgetHandler(data) {
    SucessMessageTroster("Deleted the Budget Sucessfully");
    setTimeout(() => {
      budgetStoreDetails.addBudget(data);
    }, 1000);
    navigator("..");
  }

  function HandleDeleteBudget() {
    let requestconfig = {
      url:
        "https://learningreact-f5a3c-default-rtdb.firebaseio.com/budgets/" +
        keyOfObject +
        ".json",
      method: "DELETE",
    };
    sendRequest(requestconfig, deleteBudgetHandler);
  }

  return (
    <Fragment>
      <div className={classes.model}>
        <div className={classes.modelOverlay}>
          <div className={classes.viewExpensesContainer}>
            <div className={classes.addExpHeaders}>
              <div
                className={`${classes["Headers"]} ${classes["deleteButton"]}`}
              >
                <span>View Expenses </span>
                <span className={classes.BudgetNameHeading}>
                  -- {paramsdetails.viewExpenses}
                </span>
                <button onClick={HandleDeleteBudget}>Delete</button>
              </div>

              <Link to="..">
                <HiOutlineX className={classes.crossButtonAddExp}></HiOutlineX>
              </Link>
            </div>
            <div className={classes.tablepadding}>
              <table className={classes.expensesList}>
                <thead>
                  <tr className={classes.expensesItem}>
                    <th>Date</th>
                    <th>Expense Name</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetStoreDetails.budgetList &&
                    budgetStoreDetails.budgetList.length > 0 &&
                    BudgetObject &&
                    BudgetObject.newBudget.amount &&
                    BudgetObject.newBudget.amount.length > 0 &&
                    BudgetObject.newBudget.amount.map((dataDetails) => {
                      return (
                        <tr
                          className={classes.expensesItem}
                          key={dataDetails.id}
                        >
                          <td>{dataDetails.currentTime}</td>
                          <td>{dataDetails.description}</td>
                          <td>{dataDetails.amount}</td>
                          <td className={classes.deleteButton}>
                            <button
                              onClick={deleteExpenses}
                              id={dataDetails.id}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </Fragment>
  );
}

export default ViewExpenses;
