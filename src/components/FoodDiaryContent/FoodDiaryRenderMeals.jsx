import React, { useState, useEffect } from "react";
import { useDiary } from "../../hooks";
import { Link } from "react-router-dom";

const FoodDiaryRenderMeals = ({ date, mealName, meal }) => {
   const { diary } = useDiary(date, mealName); // custom hook til at hente alt diary

   const [totals, setTotals] = useState({
      kcal: 0,
      protein: 1,
      carbs: 2,
      fat: 3
   });

   // kcal bliver brugt. Den burde ikke brokke sig.
   let kcal, protein, carbs, fat;

   // TODO: meal totals - (denne virker ikke ...)
   //    function setMealTotals() {
   //       diary.map(food => {
   //          setTotals(
   //             ...totals,
   //             { protein: protein + food.protein },
   //             { carbs: carbs + food.carbs },
   //             { fat: fat + food.fat }
   //          );
   //          console.log("FOOD.PROTEIN: " + food.protein);
   //       });
   //    }
   // //Virker heller ikke lige pt
   //    useEffect(() => {
   //       setMealTotals();
   //       console.log("mealTotals set!");
   //    }, []);

   return (
      <>
         <tr>
            <td className="food-diary-render-meals-header">{meal}</td>
         </tr>
         {diary.map(food => (
            <tr className="macros" key={food.id}>
               {food.mealName === meal ? (
                  <>
                     <td className="meal">
                        {`${food.foodText}, ${food.amount}
            ${food.size !== "" && food.size !== "0" ? " " + food.size : ""}`}
                     </td>
                     <td>
                        {(kcal =
                           ((protein = Number(food.protein)) +
                              (carbs = Number(food.carbs))) *
                              4 +
                           (fat = Number(food.fat)) * 9).toFixed(0)}
                     </td>
                     <td>{protein}</td>
                     <td>{carbs}</td>
                     <td>{fat}</td>
                     <td className="delete">x</td>
                  </>
               ) : null}
            </tr>
         ))}

         <tr className="bottom-bar">
            <td className="add-food">
               <Link to="/addfood">Add food</Link>
            </td>
            <td className="totals">{totals.kcal}</td>
            <td className="totals">{totals.protein}</td>
            <td className="totals">{totals.carbs}</td>
            <td className="totals">{totals.fat}</td>
         </tr>
      </>
   );
};

export default FoodDiaryRenderMeals;
