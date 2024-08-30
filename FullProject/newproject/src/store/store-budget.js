import React, { createContext, useState } from "react";

let budgetStore = createContext({
  budgetList: [],
  budgetListSet: [],
});

export let BudgetStoreProvider = (props) => {
  const [isBudgetList, setBudgetList] = useState([]);
  const [isAddBudget, setAddBudget] = useState();

  function isBudgetListFunction(listdetails) {
    setBudgetList(listdetails);
  }

  function addBudgetFunction(data) {
    setAddBudget(data);
  }

  return (
    <budgetStore.Provider
      value={{
        budgetListSet: isBudgetListFunction,
        budgetList: isBudgetList,
        addBudget: addBudgetFunction,
        getaddedBudget: isAddBudget,
      }}
    >
      {props.children}
    </budgetStore.Provider>
  );
};

export default budgetStore;
