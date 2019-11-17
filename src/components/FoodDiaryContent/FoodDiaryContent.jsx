import React from "react";
import "./FoodDiaryContent.scss";

import FoodDiaryRenderMeals from "./FoodDiaryRenderMeals";

const breakfast = "Breakfast";
const lunch = "Lunch";
const dinner = "Dinner";

const FoodDiaryContent = ({ date, mealName }) => {
   return (
      <tbody className="food-diary-content">
         <FoodDiaryRenderMeals
            date={date}
            mealName={mealName}
            meal={breakfast}
         />
         <FoodDiaryRenderMeals date={date} mealName={mealName} meal={lunch} />
         <FoodDiaryRenderMeals date={date} mealName={mealName} meal={dinner} />
      </tbody>
   );
};

// TODO: ADD FOOD + BUTTOM "TOTAL"-BAR.

export default FoodDiaryContent;
