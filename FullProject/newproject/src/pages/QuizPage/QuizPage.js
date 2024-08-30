import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

function QuizPage(props) {
  return (
    <Fragment>
      <Outlet></Outlet>
    </Fragment>
  );
}

export default QuizPage;
