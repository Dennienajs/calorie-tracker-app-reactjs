import React from "react";
import "./FoodDiaryContent.scss";
import FoodDiaryRenderMeals from "./FoodDiaryRenderMeals";
import FoodDiaryRenderDailyTotal from "./FoodDiaryRenderDailyTotal";

const FoodDiaryContent = ({ date, mealName }) => {
  // Renders all the meals by mapping through.
  return (
    <>
      <tbody className="food-diary-content">
        {mealName.map(meal => (
          <FoodDiaryRenderMeals date={date} mealName={meal} key={meal} />
        ))}
      </tbody>
      <tfoot className="food-diary-totals">
        <FoodDiaryRenderDailyTotal
          date={date}
          mealName={mealName}
          key={mealName}
        />
      </tfoot>
    </>
  );
};

// TODO: ADD FOOD + BUTTOM "TOTAL"-BAR.

export default FoodDiaryContent;
