import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <Route path="*">
        <Redirect to="/Home"></Redirect>
      </Route>
      <Route path="/Home" exact>
        <Home></Home>
      </Route>
      <Route path="/Shop" exact></Route>
      <Route path="/Blog" exact></Route>
      <Route path="/About" exact></Route>
      <Route path="/Contact" exact></Route>
      <Route path="/Bag" exact></Route>
    </React.Fragment>
  );
}

export default App;
