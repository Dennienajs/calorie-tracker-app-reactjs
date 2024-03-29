import React from "react";
import "./FoodDiaryHeaderDummie.scss";

const FoodDiaryHeaderDummie = ({ header }) => {
   return (
      <thead>
         <tr className="meal-header">
            <td className="alt meal-name"></td>

            <td className="alt nutrient-column">
               Calories
               <div className="subtitle">Kcal</div>
            </td>
            <td className="alt nutrient-column">
               Protein
               <div className="subtitle">g</div>
            </td>
            <td className="alt nutrient-column">
               Carbs
               <div className="subtitle">g</div>
            </td>
            <td className="alt nutrient-column">
               Fat
               <div className="subtitle">g</div>
            </td>
            <td className="alt nutrient-column">
               {" "}
               <div className="subtitle"> </div>
            </td>
         </tr>
      </thead>
   );
};

export default FoodDiaryHeaderDummie;
