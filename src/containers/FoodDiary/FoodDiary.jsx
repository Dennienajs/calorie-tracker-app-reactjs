import React, { useState } from "react";
import "./FoodDiary.scss";
import FoodDiaryHeaderDummie from "../../components/FoodDiaryHeaderDummie/FoodDiaryHeaderDummie";
import FoodDiaryContent from "../../components/FoodDiaryContent/FoodDiaryContent";

const FoodDiary = () => {
  const [date, setDate] = useState("02-11-2019");
  const [mealName, setMealName] = useState("Breakfast");

  return (
    <div className="food-diary">
      <span className="food-diary-heading">
        <h1 className="food-diary-heading__text">Your food diary for: </h1>
        <button className="food-diary-heading__button prev">{"<--"}</button>
        <h1 className="food-diary-heading__date">{date}</h1>
        <button className="food-diary-heading__button next">{"-->"}</button>
      </span>

      <div className="food-diary-container">
        <table className="food-table" id="food-table">
          <FoodDiaryHeaderDummie />
          <FoodDiaryContent date={date} mealName={mealName} />
          <FoodDiaryHeaderDummie />
        </table>
      </div>
    </div>
  );
};

export default FoodDiary;
