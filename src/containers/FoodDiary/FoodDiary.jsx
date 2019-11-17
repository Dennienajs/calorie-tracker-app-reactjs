import React, { useState } from "react";
import "./FoodDiary.scss";
import FoodDiaryHeaderDummie from "../../components/FoodDiaryHeaderDummie/FoodDiaryHeaderDummie";
import FoodDiaryContent from "../../components/FoodDiaryContent/FoodDiaryContent";

const FoodDiary = () => {
   const [date, setDate] = useState("02-11-2019");
   const [mealName, setMealName] = useState("Breakfast");

   return (
      <div className="food-diary">
         <h1>Your food diary for: {date}</h1>

         <div className="food-container">
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
