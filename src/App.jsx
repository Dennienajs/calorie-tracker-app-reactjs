import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodDiaryPage from "./containers/FoodDiaryPage";
import AddFoodPage from "./containers/AddFoodPage";
import Navbar from "./containers/Navbar";
import moment from "moment";

const App = () => {
  const date = "02-11-2019";
  // const todaysDate = moment().format("MMMM Do YYYY"); // November 18th 2019, 9:10:14 pm
  // const newDate = moment().calendar();
  // console.log(newDate);
  // console.log(todaysDate);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/addfood">
            <AddFoodPage date={date} />
          </Route>
          <Route>
            <FoodDiaryPage date={date} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
