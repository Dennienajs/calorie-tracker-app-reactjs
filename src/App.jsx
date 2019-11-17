import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import FoodDiary from "./containers/FoodDiary/index";
import AddFoodPage from "./containers/AddFoodPage/AddFoodPage";
import Navbar from "./containers/Navbar/index";

const App = () => {
   // const date = new Date("02-11-2019"); // Giver også (forkert) tidspunkt

   const date = "02-11-2019";

   return (
      <Router>
         <div className="app">
            <Navbar />
            <Switch>
               <Route path="/addfood">
                  <AddFoodPage date={date} />
               </Route>
               <Route>
                  <FoodDiary />
               </Route>
            </Switch>
         </div>
      </Router>
   );
};

export default App;
