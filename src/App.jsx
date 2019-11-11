import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import FoodDiary from "./containers/FoodDiary/index";
import AddFoodPage from "./containers/AddFoodPage/AddFoodPage";
import Navbar from "./containers/Navbar/index";

import { useDiary } from "./hooks"; // virker ikke ...
// import { useDiary } from "./testDiary";

const App = () => {
  const date = "02-11-2019";
  const { diary } = useDiary(date);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/addfood">
            <AddFoodPage />
          </Route>
          <Route>
            <FoodDiary />
            {console.log("diary: ", diary)}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
