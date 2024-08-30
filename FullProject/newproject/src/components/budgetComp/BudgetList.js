import React, { Fragment, useContext, useState } from "react";
import classes from "./Budget.module.css";
import budgetStore from "../../store/store-budget";
import { Link } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import { RxSlash } from "react-icons/rx";

function BudgetList(props) {
  let budgetStoreDetails = useContext(budgetStore);
  let arrayPush = [];

  if (
    budgetStoreDetails.budgetList &&
    budgetStoreDetails.budgetList.length > 0
  ) {
    for (const key in budgetStoreDetails.budgetList[0]) {
      let getNewbudget = {
        name: budgetStoreDetails.budgetList[0][key].newBudget.name,
        amount: budgetStoreDetails.budgetList[0][key].newBudget.totalAmountUsed,
        budgetAmount:
          budgetStoreDetails.budgetList[0][key].newBudget.budgetAmount,
        id: budgetStoreDetails.budgetList[0][key].newBudget.id,
      };
      arrayPush.push(getNewbudget);
    }
  }

  let sumOfTotalAmount = arrayPush.reduce(
    (sum, amount) => sum + amount.amount,
    0
  );
  let totalBudgetAmount = arrayPush.reduce(
    (sum, amount) => sum + amount.budgetAmount,
    0
  );

  let totalProgressBar = 0;
  if ((sumOfTotalAmount / totalBudgetAmount) * 100)
    totalProgressBar = (sumOfTotalAmount / totalBudgetAmount) * 100;
  else totalProgressBar = 0;
  return (
    <div className={classes.budgetClasses}>
      {arrayPush && arrayPush.length == 0 && (
        <Fragment>
          <div className={classes.noBudget}>
            <p>There are no Budgets Please add new Budget!</p>
          </div>
        </Fragment>
      )}
      {arrayPush &&
        arrayPush.length > 0 &&
        arrayPush.map((mapDetails, index) => {
          let progressbarPrecentage = 0;
          progressbarPrecentage =
            (Number(mapDetails.amount) / Number(mapDetails.budgetAmount)) * 100;
          // console.log(progressbarPrecentage);
          return (
            <Fragment key={index}>
              <div className={classes.BudgetList}>
                <div className={classes.budgetNameAndMoney}>
                  <span className={classes.budgetHeading}>
                    {mapDetails.name}
                  </span>
                  <div className={classes.currenyLeftAndtotal}>
                    <span>${Number(mapDetails.amount)}</span>
                    {/* <BsSlashLg></BsSlashLg> */}
                    <RxSlash className={classes.barsize}></RxSlash>
                    {/* <span className={classes.barsize}>BsSlashLg</span> */}
                    <span>${Number(mapDetails.budgetAmount)}</span>
                  </div>
                </div>
                <progress
                  className={classes.progressbarList}
                  value={progressbarPrecentage}
                  max="100"
                ></progress>
                <div
                  className={`${classes["budgetButtons"]} ${classes["listButtons"]}`}
                >
                  <button>
                    <Link to={mapDetails.name}>Add expenses</Link>
                  </button>
                  <button>
                    <Link to={"ViewExpenses/" + mapDetails.name}>
                      View expenses
                    </Link>
                  </button>
                </div>
              </div>
            </Fragment>
          );
        })}
      {arrayPush && arrayPush.length > 0 && (
        <div className={classes.BudgetList}>
          <div className={classes.budgetNameAndMoney}>
            <span className={classes.budgetHeading}>Total</span>
            <div className={classes.currenyLeftAndtotal}>
              <span>${sumOfTotalAmount}</span>
              <span>
                <RxSlash className={classes.barsize}></RxSlash>
              </span>
              <span>${totalBudgetAmount}</span>
            </div>
          </div>
          <progress
            className={classes.progressbarList}
            value={totalProgressBar}
            max="100"
          ></progress>
        </div>
      )}
    </div>
  );
}

export default BudgetList;
