import React from "react";
import "./FoodDiaryContent.scss";
import FoodDiaryRenderMeals from "./FoodDiaryRenderMeals";

const FoodDiaryContent = ({ date, mealName }) => {
  return (
    <tbody className="food-diary-content">
      {mealName.map((meal, index) => (
        <FoodDiaryRenderMeals date={date} mealName={meal} key={index} />
      ))}
    </tbody>
  );
};

// TODO: ADD FOOD + BUTTOM "TOTAL"-BAR.

export default FoodDiaryContent;
