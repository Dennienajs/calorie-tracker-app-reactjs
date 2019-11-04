import React from "react";
import Tracker from "./Tracker";
import FoodDiary from "./FoodDiary";

// import { useDiary } from "./hooks/index"; // virker ikke ...
import { useDiary } from "./testDiary";

const App = () => {
   const date = "02-11-2019";
   const { diary } = useDiary(date);

   return (
      <div>
         {/* <Tracker /> */}
         <FoodDiary />
         {console.log(diary)}
      </div>
   );
};

export default App;
