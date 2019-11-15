import React, { useState, useEffect } from "react";
import "./FoodDiaryContent.scss";
import { Link } from "react-router-dom";

import { useDiary } from "../../hooks/index";

const FoodDiaryContent = ({ date }) => {
  const { diary } = useDiary(date); // custom hook til at hente alt diary

  let kcal;
  let carbs;
  let fat;
  let protein;

  return (
    <tbody className="food-diary-content">
      {diary.map(food => (
        <tr className="macros" key={food.id}>
          <td className="meal">
            {`${food.foodText}, ${food.amount}
            ${food.size !== "" && food.size !== "0" ? " " + food.size : ""}`}
          </td>
          <td>
            {
              (kcal =
                ((protein = Number(food.protein)) +
                  (carbs = Number(food.carbs))) *
                  4 +
                (fat = Number(food.fat)) * 9)
            }
          </td>
          <td>{protein}</td>
          <td>{carbs}</td>
          <td>{fat}</td>
          <td className="delete">x</td>
          {/* DELETE BUTTON. */}
        </tr>
      ))}

      <tr className="bottom-bar">
        <td className="add-food">
          <Link to="/addfood">Add food</Link>
        </td>
      </tr>
    </tbody>
  );
};

// TODO: ADD FOOD + BUTTOM "TOTAL"-BAR.

export default FoodDiaryContent;
