import React, { useState, useEffect } from "react";
import { useDiary, useAllMealsTotals } from "../../hooks";
import { Link } from "react-router-dom";

// This is a fucking mess - please fix
const FoodDiaryRenderMeals = ({ date, mealName, meal }) => {
  const { diary } = useDiary(date); // custom hook til at hente alt diary

  let kcal = 0,
    totalKcal = 0,
    protein = 0,
    totalProtein = 0,
    carbs = 0,
    totalCarbs = 0,
    fat = 0,
    totalFat = 0;

  const setAllMealTotals = food => {
    // Protein and Carbs has 4 Kcal per gram. Fat has 9 Kcal per gram.
    kcal = (
      ((protein = Number(food.protein)) + (carbs = Number(food.carbs))) * 4 +
      (fat = Number(food.fat)) * 9
    ).toFixed(0);

    totalKcal += Number(kcal);
    totalProtein += protein;
    totalCarbs += carbs;
    totalFat += fat;

    console.log(typeof totalKcal);

    return { kcal, totalKcal, totalProtein, totalCarbs, totalFat };
  };

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
                  ${
                    food.size !== "" && food.size !== "0" ? " " + food.size : ""
                  }`}
              </td>
              <td>{setAllMealTotals(food).kcal}</td>
              <td>{protein.toFixed(0)}</td>
              <td>{carbs.toFixed(0)}</td>
              <td>{fat.toFixed(0)}</td>
              <td className="delete">x</td>
            </>
          ) : null}
        </tr>
      ))}

      <tr className="bottom-bar">
        <td className="add-food">
          <Link to="/addfood">Add food</Link>
        </td>
        <td className="totals">{totalKcal.toFixed(0)}</td>
        <td className="totals">{totalProtein.toFixed(0)}</td>
        <td className="totals">{totalCarbs.toFixed(0)}</td>
        <td className="totals">{totalFat.toFixed(0)}</td>
      </tr>
    </>
  );
};

export default FoodDiaryRenderMeals;
