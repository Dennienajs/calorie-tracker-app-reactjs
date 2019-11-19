import React from "react";
import { useDiary } from "../../hooks";
import "./FoodDiaryRenderDailyTotal.scss";

// Basically just a copy of FoodDiaryRenderMeal component with a small change.
const FoodDiaryRenderDailyTotal = ({ date, mealName }) => {
  const { diary } = useDiary(date); // custom hook til at hente alt diary
  const goals = { kcal: 2000, protein: 175, carbs: 225, fat: 44 };

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

    // returns = set the variables outside this function.
    return { kcal, totalKcal, totalProtein, totalCarbs, totalFat };
  };
  const calculateRemaining = (kcal, totalKcal) => {
    return (kcal - totalKcal).toFixed(0);
  };
  const isPostive = (kcal, totalKcal) => {
    return kcal > totalKcal ? true : false;
  };

  // Didnt know how to fix this "total daily" problem easily.. this works for now, however im not proud of it.
  return (
    <>
      {diary.map(food => (
        <tr className="macros" key={food.id} style={{ fontSize: 0 }}>
          {food.mealName === mealName[0] ||
          food.mealName === mealName[1] ||
          food.mealName === mealName[2] ? (
            <>{setAllMealTotals(food).kcal}</>
          ) : null}
        </tr>
      ))}

      <tr className="bottom-bar-daily-total">
        <td className="bottom-bar-daily-total text">totals</td>
        <td className="daily-totals">{totalKcal.toFixed(0)}</td>
        <td className="daily-totals">{totalProtein.toFixed(0)}</td>
        <td className="daily-totals">{totalCarbs.toFixed(0)}</td>
        <td className="daily-totals">{totalFat.toFixed(0)}</td>
        <td></td>
      </tr>
      <tr className="bottom-bar-daily-total">
        <td className="bottom-bar-daily-total goal">your daily goal</td>
        <td className="daily-totals">{goals.kcal}</td>
        <td className="daily-totals">{goals.protein}</td>
        <td className="daily-totals">{goals.carbs}</td>
        <td className="daily-totals">{goals.fat}</td>
        <td></td>
      </tr>
      <tr className="bottom-bar-daily-total">
        <td className="bottom-bar-daily-total remaining">remaining</td>
        <td
          className={`daily-totals ${
            isPostive(goals.kcal, totalKcal) ? "green" : "red"
          }`}
        >
          {calculateRemaining(goals.kcal, totalKcal)}
        </td>
        <td
          className={`daily-totals ${
            isPostive(goals.protein, totalProtein) ? "green" : "red"
          }`}
        >
          {calculateRemaining(goals.protein, totalProtein)}
        </td>
        <td
          className={`daily-totals ${
            isPostive(goals.carbs, totalCarbs) ? "green" : "red"
          }`}
        >
          {calculateRemaining(goals.carbs, totalCarbs)}
        </td>
        <td
          className={`daily-totals ${
            isPostive(goals.far, totalFat) ? "green" : "red"
          }`}
        >
          {calculateRemaining(goals.fat, totalFat)}
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default FoodDiaryRenderDailyTotal;
