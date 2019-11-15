import React from "react";
import "./FoodDiary.scss";
import FoodDiaryHeaderDummie from "../../components/FoodDiaryHeaderDummie/FoodDiaryHeaderDummie";
import FoodDiaryContent from "../../components/FoodDiaryContent/FoodDiaryContent";

const FoodDiary = () => {
  const date = "02-11-2019";
  return (
    <div className="food-diary">
      <h1>Your food diary for: {date}</h1>

      <div className="food-container">
        <table className="food-table" id="food-table">
          <FoodDiaryHeaderDummie />
          <FoodDiaryContent date={date} />
        </table>
      </div>
    </div>
  );
};

export default FoodDiary;
