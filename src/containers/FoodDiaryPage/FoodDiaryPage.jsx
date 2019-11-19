import React, { useState } from "react";
import "./FoodDiaryPage.scss";
import FoodDiaryContent from "../../components/FoodDiaryContent";
import FoodDiaryHeaderDummie from "../../components/FoodDiaryHeaderDummie";

const FoodDiaryPage = ({ date }) => {
  // const [date, setDate] = useState("02-11-2019");
  const [mealName, setMealName] = useState(["Breakfast", "Lunch", "Dinner"]);
  const [selectedDate, setSelectedDate] = useState(date);

  return (
    <div className="food-diary">
      <span className="food-diary-heading">
        <h1 className="food-diary-heading__text">Your food diary for: </h1>
        <button className="food-diary-heading__button prev" onClick={() => {}}>
          {"<--"}
        </button>
        <h1 className="food-diary-heading__date">{selectedDate}</h1>
        <button className="food-diary-heading__button next" onClick={() => {}}>
          {"-->"}
        </button>
      </span>
      <div className="food-diary-container">
        <FoodDiaryHeaderDummie />
        <table className="food-table" id="food-table">
          <FoodDiaryContent date={selectedDate} mealName={mealName} />
        </table>
        <FoodDiaryHeaderDummie />
      </div>
    </div>
  );
};

export default FoodDiaryPage;
