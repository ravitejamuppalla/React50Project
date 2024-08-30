import React from "react";
import classes from "./Budget.module.css";
import { Link } from "react-router-dom";
function BudgetTopHeader(props) {
  return (
    <div className={classes.HeadersDetails}>
      <span>Budgets</span>
      <div className={classes.budgetButtons}>
        <button>
          <Link to="addNewBudget">Add Budget</Link>
        </button>
        <button>
          <Link to="addExpenses">Add Expense</Link>
        </button>
      </div>
    </div>
  );
}

export default BudgetTopHeader;
