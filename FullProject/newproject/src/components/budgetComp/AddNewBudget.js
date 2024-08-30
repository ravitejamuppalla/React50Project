import React, {
  Fragment,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import classes from "./Budget.module.css";
import { Form, Link, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { customAlphabet } from "nanoid";

import { ToastContainer, toast } from "react-toastify";

import { HiOutlineX } from "react-icons/hi";
import budgetStore from "../../store/store-budget";
import UseInput from "../../hooks/use-Input";
import {
  SucessMessageTroster,
  ErrorMessageTroster,
} from "../utils/ApplicationUtils";

function AddNewBudget(props) {
  let contextDetails = useContext(budgetStore);

  let routeNavigate = useNavigate();
  let { isLoading, iserror: error, sendRequest } = useHttp();
  const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);
  let nanoIDData = nanoid();

  let {
    inputValue: BudgetNameInputValue,
    blurIsValid: BudgetNameBlurIsValid,
    inputValueIsValid: BudgetNameInputValueisValid,
    textInputHandler: BudgetNameTextInputHandler,
    tochedInputHandler: BudgetNameTochedInputHandler,
    isInputHasError: BudgetNameIsInputValidHasError,
    reset: resetBudgetName,
  } = UseInput((value) => value.trim() !== "");
  let {
    inputValue: AmountInputValue,
    blurIsValid: AmountBlurIsValid,
    inputValueIsValid: AmountInputValueisValid,
    textInputHandler: AmountTextInputHandler,
    tochedInputHandler: AmountTochedInputHandler,
    isInputHasError: AmountIsInputValidHasError,
    reset: resetAmount,
  } = UseInput((value) => value.trim() !== "");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (BudgetNameInputValueisValid && AmountInputValueisValid) {
      setIsFormValid(true);
    } else setIsFormValid(false);
  }, [BudgetNameInputValue, AmountInputValueisValid]);

  function onSubmitHandlerFunction(event) {
    event.preventDefault();
    if (BudgetNameInputValueisValid && AmountInputValueisValid) {
      let duplicate = false;
      let newBudget = {
        id: nanoIDData,
        name: BudgetNameInputValue.toLowerCase(),
        totalAmountUsed: 0,
        budgetAmount: Number(AmountInputValue),
        amount: [],
      };
      for (const notesKey in contextDetails.budgetList[0]) {
        console.log(contextDetails.budgetList[0][notesKey].newBudget.name);
        if (
          contextDetails.budgetList[0][
            notesKey
          ].newBudget.name.toLowerCase() === BudgetNameInputValue.toLowerCase()
        ) {
          ErrorMessageTroster("Duplicate BudgetName");
          duplicate = true;
        }
      }
      console.log("budget name " + newBudget);
      let requestconfig = {
        url: "https://learningreact-f5a3c-default-rtdb.firebaseio.com/budgets.json",
        method: "POST",
        body: JSON.stringify({ newBudget }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (!duplicate) {
        sendRequest(requestconfig, responseNewBudget);
      }
    }
    resetBudgetName();
    resetAmount();
  }
  function responseNewBudget(responseData) {
    if (!error && responseData.name.length > 0) {
      SucessMessageTroster("Sucessfully Added Budget");
      setTimeout(() => {
        contextDetails.addBudget(responseData);
      }, 2000);
      routeNavigate("..");
    }
  }

  let addingTheClasseNameForBudgetName = BudgetNameIsInputValidHasError
    ? classes.InValidInput
    : "";
  let addingTheClasseNameForAmount = AmountIsInputValidHasError
    ? classes.InValidInput
    : "";
  return (
    <Fragment>
      <form onSubmit={onSubmitHandlerFunction}>
        <div className={classes.model}>
          <div className={classes.modelOverlay}>
            <div className={classes.Modelcontent}>
              <div className={classes.addnewModelHead}>
                <span>Add Budget</span>
                <Link to="..">
                  <HiOutlineX className={classes.crossbutton}></HiOutlineX>
                </Link>
              </div>
              <div className={classes.addBudgetForm}>
                <div>
                  <label>
                    BudgetName <span className={classes.mandatory}>*</span>
                  </label>
                  <input
                    onChange={BudgetNameTextInputHandler}
                    onBlur={BudgetNameTochedInputHandler}
                    className={addingTheClasseNameForBudgetName}
                    value={BudgetNameInputValue}
                  ></input>
                  {BudgetNameIsInputValidHasError && (
                    <span className={classes.errorHandle}>
                      Please entered valid Budget Name
                    </span>
                  )}
                </div>
                <div>
                  <label>
                    Amount <span className={classes.mandatory}>*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={1000000}
                    onChange={AmountTextInputHandler}
                    onBlur={AmountTochedInputHandler}
                    value={AmountInputValue}
                    className={addingTheClasseNameForAmount}
                  ></input>
                  {AmountIsInputValidHasError && (
                    <span className={classes.errorHandle}>
                      Please entered valid Amount
                    </span>
                  )}
                </div>
                <button
                  className={classes.addbuttonBudget}
                  disabled={!isFormValid}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </form>
    </Fragment>
  );
}

export default AddNewBudget;
