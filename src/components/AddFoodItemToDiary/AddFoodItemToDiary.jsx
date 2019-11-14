import React from "react";
import "./AddFoodItemToDiary.scss";
/* BRUGES TIL DB:
userId, mealName, date, foodText, amount, size, protein, carbs, fat

*/

const AddFoodItemToDiary = ({
  userId = "1234567890",
  mealName = "Breakfast",
  date,
  foodText,
  amount,
  size,
  protein,
  carbs,
  fat
}) => {
  const handleAddToDiaryClick = () => {
    console.log(`handleAddToDiaryClicked..Data: userId = ${userId},
  mealName = ${mealName},
          date = ${date},
          foodText = ${foodText},
          amount = ${amount},
          size = ${size},
          protein = ${protein},
          carbs = ${carbs},
          fat = ${fat}`);
  };

  return (
    <div className="add-food-item-to-diary">
      <p>AddFoodItemToDiary</p>

      <button
        className="add-food-item-to-diary__button"
        onClick={() => handleAddToDiaryClick()}
      >
        Add To Diary
      </button>
    </div>
  );
};

export default AddFoodItemToDiary;
