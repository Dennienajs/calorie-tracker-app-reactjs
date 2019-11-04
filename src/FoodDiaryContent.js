import React from "react";

import { useDiary } from "./hooks/index";

const FoodDiaryContent = () => {
   let date = "02-11-2019";
   const { diary } = useDiary(date);
   let kcal;
   return (
      <>
         {diary.map(food => (
            <tr key={food.id}>
               <td>{food.foodText}</td> {/* foodText */}
               <td>
                  {(kcal = (food.protein + food.carbs) * 4 + food.fat * 9)}
               </td>
               <td>{food.protein}</td> {/* protein */}
               <td>{food.carbs}</td> {/* carbs */}
               <td>{food.fat}</td> {/* fat */}
               <td>x</td>
            </tr>
         ))}
      </>
   );
};

export default FoodDiaryContent;

/*

<tr>
                  <td>5 eggs</td>
                  <td>368</td>
                  <td>32</td>
                  <td>3</td>
                  <td>28</td>
                  <td>x</td>
               </tr>

               */
