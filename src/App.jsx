import React from "react";
import Tracker from "./Tracker";
import FoodDiary from "./FoodDiary";
import "./app.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { useDiary } from "./hooks/index"; // virker ikke ...
import { useDiary } from "./testDiary";
import AddFoodPage from "./AddFoodPage";
import Navbar from "./Navbar";

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
            {/* <Tracker /> */}
            <FoodDiary />
            {console.log(diary)}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
