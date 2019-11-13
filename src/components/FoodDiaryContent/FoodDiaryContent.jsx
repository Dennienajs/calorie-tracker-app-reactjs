import React, { useState, useEffect } from "react";
import "./FoodDiaryContent.scss";

import { useDiary } from "../../hooks/index";

const FoodDiaryContent = ({ date }) => {
  const { diary } = useDiary(date); // custom hook til at hente alt diary
  let kcal = 0;

  // FLYT TIL EGEN FIL (hooks/index ...) - skal bruge useDiary(dato) og kcal.
  const useDiaryMacros = () => {
    const [allMacros, setAllMacros] = useState({
      protein: 0,
      carbs: 0,
      fat: 0,
      calories: 0
    });

    useEffect(() => {
      diary.map(food => {
        setAllMacros({
          protein: food.protein + allMacros.protein,
          carbs: food.carbs + allMacros.carbs,
          fat: food.fat + allMacros.fat,
          calories: (food.protein + food.carbs) * 4 + food.fat * 9
        });
      });
    }, [allMacros]);

    return { allMacros, setAllMacros };
  };

  const { allMacros } = useDiaryMacros();
  console.log(
    allMacros.calories,
    allMacros.fat,
    allMacros.protein,
    allMacros.carbs
  );

  console.log("tot protein: ", allMacros.protein);
  return (
    <div className="food-diary-content">
      {diary.map(food => (
        <>
          <tr className="macros" key={food.id}>
            <td className="meal">
              {food.foodText}, {food.amount} {food.size !== "" ? food.size : ""}
            </td>
            <td>{(kcal = (food.protein + food.carbs) * 4 + food.fat * 9)}</td>
            <td>{food.protein}</td>
            <td>{food.carbs}</td>
            <td>{food.fat}</td>
            <td>x</td> {/* DELETE BUTTON. */}
          </tr>
        </>
      ))}
      <tr className="bottom-bar">
        <td className="add-food">Add Food</td>

        {/* Error loading OR empty diary. */}
        {allMacros.calories === 0 ? (
          <td className="macro-value"> </td>
        ) : (
          <>
            <td>
              <span className="macro-value">{allMacros.calories}</span>
            </td>
            <td>
              <span className="macro-value">{allMacros.protein}</span>
            </td>
            <td>
              <span className="macro-value">{allMacros.carbs}</span>
            </td>
            <td>
              <span className="macro-value">{allMacros.fat}</span>
            </td>
          </>
        )}
      </tr>{" "}
    </div>
  );
};

export default FoodDiaryContent;
