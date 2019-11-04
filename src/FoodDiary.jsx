import React from "react";
import "./FoodDiary.scss";
import FoodDiaryContent from "./FoodDiaryContent";

const FoodDiary = () => {
   return (
      <div className="food-diary">
         <h1>Your food diary for: DATE HER...(today)</h1>

         <div className="food-container">
            <table className="food-table" id="food-table"></table>

            {/* KOLONNER MED måltider og makrofordeling */}
            <colgroup>
               <col className="col-1 meal" />
               <col className="col-2 kcal" />
               <col className="col-2 protein" />
               <col className="col-2 carbs" />
               <col className="col-2 fat" />
               <col className="col 6 remove" />
            </colgroup>
            {/* TABLE CONTENT... */}
            <tbody>
               <tr className="meal-header">
                  <td className="alt meal-name">Breakfast</td>
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
               <FoodDiaryContent />
               {/* <tr>
                  <td>5 eggs</td>
                  <td>368</td>
                  <td>32</td>
                  <td>3</td>
                  <td>28</td>
                  <td>x</td>
               </tr>
               <tr>
                  <td>5 eggs</td>
                  <td>368</td>
                  <td>32</td>
                  <td>3</td>
                  <td>28</td>
                  <td>x</td>
               </tr> */}

               <tr className="buttom-bar">
                  <td className="add-food">Add Food</td>
                  <td>
                     <span className="macro-value">"total"</span>
                  </td>
                  <td>
                     <span className="macro-value">"total"</span>
                  </td>
                  <td>
                     <span className="macro-value">"total"</span>
                  </td>
                  <td>
                     <span className="macro-value">"total"</span>
                  </td>
               </tr>
            </tbody>
         </div>
      </div>
   );
};

export default FoodDiary;
