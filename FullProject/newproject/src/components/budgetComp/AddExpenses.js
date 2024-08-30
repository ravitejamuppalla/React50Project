import React, {
  Fragment,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";
import classes from "./Budget.module.css";
import { Link, useParams, useNavigate, Form } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import useHttp from "../../hooks/useHttp";
import budgetStore from "../../store/store-budget";
import { getTodayDateTime } from "../utils/ApplicationUtils";
import { customAlphabet } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import { getBudgetNames } from "./BudgetUtils";
import { getIDWithName } from "./BudgetUtils";
import { getObjectWithID } from "./BudgetUtils";
import { isNamePresentInList } from "./BudgetUtils";
import {
  SucessMessageTroster,
  ErrorMessageTroster,
} from "../utils/ApplicationUtils";
import UseInput from "../../hooks/use-Input";

function AddExpenses(props) {
  let { isLoading, iserror: error, sendRequest } = useHttp();
  let budgetStoreDetails = useContext(budgetStore);
  let arrayPush = [];
  let isdescription = useRef();
  let isAmount = useRef();
  let isBudgetName = useRef();
  let contextBudget = useContext(budgetStore);
  let paramsData = useParams();
  let navigate = useNavigate();

  let {
    inputValue: DescriptionInputValue,
    blurIsValid: DescriptionBlurIsValid,
    inputValueIsValid: DescriptionInputValueisValid,
    textInputHandler: DescriptionTextInputHandler,
    tochedInputHandler: DescriptionTochedInputHandler,
    isInputHasError: DescriptionIsInputValidHasError,
    reset: resetDescription,
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
    if (DescriptionInputValueisValid && AmountInputValueisValid) {
      setIsFormValid(true);
    } else setIsFormValid(false);
  }, [DescriptionInputValue, AmountInputValue]);

  function OnSubmitHandlerAddExpenses(event) {
    event.preventDefault();
    if (DescriptionInputValueisValid && AmountInputValueisValid) {
      let amountDetails = [];
      const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);
      let nanoIDData = nanoid();
      let description = DescriptionInputValue;
      let amount = Number(AmountInputValue);

      let budgetName;
      if (!paramsData.budgetName) budgetName = isBudgetName.current.value;
      else budgetName = paramsData.budgetName;

      let getcurrentTime = getTodayDateTime();
      let AddExpenses = {
        id: nanoIDData,
        description: description,
        amount: amount,
        currentTime: getcurrentTime,
      };
      let getnamesarraylist = getBudgetNames(budgetStoreDetails.budgetList);
      let isbudgetName = isNamePresentInList(getnamesarraylist, budgetName);
      if (!isbudgetName.length == 0) {
        let keyID = getIDWithName(budgetStoreDetails.budgetList, budgetName);
        let budgetObject = getObjectWithID(
          budgetStoreDetails.budgetList,
          keyID
        );

        if (
          budgetObject.newBudget["totalAmountUsed"] + Number(amount) <=
          budgetObject.newBudget.budgetAmount
        ) {
          if (budgetObject.newBudget["amount"]) {
            amountDetails.push(...budgetObject.newBudget.amount);
            amountDetails.push(AddExpenses);
          } else amountDetails.push(AddExpenses);

          budgetObject.newBudget["totalAmountUsed"] += Number(amount);
          budgetObject.newBudget["amount"] = amountDetails;
          let requestconfig = {
            url:
              "https://learningreact-f5a3c-default-rtdb.firebaseio.com/budgets/" +
              keyID +
              ".json",
            method: "PUT",
            body: JSON.stringify(budgetObject),
            headers: {
              "Content-Type": "application/json",
            },
          };
          sendRequest(requestconfig, responseOfBudget);
        } else {
          ErrorMessageTroster("You have Exceed Maxmium Budget");
        }
      }
    }
  }

  arrayPush = getBudgetNames(budgetStoreDetails.budgetList);

  function responseOfBudget(responseData) {
    if (!error && responseData.newBudget.amount.length > 0) {
      SucessMessageTroster("Added Expenses Sucessfully");
      resetDescription();
      resetAmount();
      setTimeout(() => {
        budgetStoreDetails.addBudget(responseData);
      }, 1000);
      navigate("..");
    }
  }

  let addingTheClasseNameForDescription = DescriptionIsInputValidHasError
    ? classes.InValidInput
    : "";
  let addingTheClasseNameForAmount = AmountIsInputValidHasError
    ? classes.InValidInput
    : "";
  return (
    <Fragment>
      <form onSubmit={OnSubmitHandlerAddExpenses}>
        <div className={classes.model}>
          <div className={classes.modelOverlay}>
            <div className={classes.addExpensesContainer}>
              <div className={classes.addExpHeaders}>
                <span>New Expenses</span>
                <Link to="..">
                  <HiOutlineX
                    className={classes.crossButtonAddExp}
                  ></HiOutlineX>
                </Link>
              </div>
              <div className={classes.expensesDetails}>
                <div className={classes.textInputs}>
                  <label className={classes.labelDetails}>
                    Description <span className={classes.mandatory}>*</span>
                  </label>
                  <input
                    onChange={DescriptionTextInputHandler}
                    onBlur={DescriptionTochedInputHandler}
                    className={addingTheClasseNameForDescription}
                    value={DescriptionInputValue}
                  ></input>
                  {addingTheClasseNameForDescription && (
                    <span className={classes.errorHandle}>
                      Please entered valid Description
                    </span>
                  )}
                </div>
                <div className={classes.textInputs}>
                  <label className={classes.labelDetails}>
                    Amount <span className={classes.mandatory}>*</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={1000000}
                    onBlur={AmountTochedInputHandler}
                    onChange={AmountTextInputHandler}
                    className={addingTheClasseNameForAmount}
                    value={AmountInputValue}
                  ></input>
                  {addingTheClasseNameForAmount && (
                    <span className={classes.errorHandle}>
                      Please entered valid Amount
                    </span>
                  )}
                </div>
                {!paramsData.budgetName && (
                  <div className={classes.textInputs}>
                    <label className={classes.labelDetails}>
                      Budget <span className={classes.mandatory}>*</span>
                    </label>
                    <select
                      ref={isBudgetName}
                      name="budgetName"
                      id="budgetName"
                    >
                      {arrayPush.map((budgetData, index) => {
                        return (
                          <option key={index} value={budgetData}>
                            {budgetData}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </div>
              <div className={classes.addExpenses}>
                <button
                  className={classes.addbuttonBudget}
                  disabled={!isFormValid}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </form>
    </Fragment>
  );
}

export default AddExpenses;
