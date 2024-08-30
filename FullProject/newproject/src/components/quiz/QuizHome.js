import React, { Fragment } from "react";
import classes from "./QuizHome.module.css";
function QuizHome(props) {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={`${classes["quiz"]} ${classes["quiz-small"]}`}>
          <h1 className={classes.setUpQuizHeading}>SetUp Quiz</h1>
          <div className={classes.formControl}>
            <label>Number Of Questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="form-input"
              min={1}
              max={50}
            ></input>
          </div>
          <div className={classes.formControl}>
            <label>Category</label>
            <select>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div className={classes.formControl}>
            <label>Select Difficulty</label>
            <select>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <button>Start </button>
        </div>
      </div>
    </Fragment>
  );
}

export default QuizHome;
