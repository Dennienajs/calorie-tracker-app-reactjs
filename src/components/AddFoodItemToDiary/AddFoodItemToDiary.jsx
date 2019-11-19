import React, { useState } from "react";
import "./AddFoodItemToDiary.scss";
import { firebase } from "../../firebase";

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
    addFoodItemToDiary();
    // TODO: some success message
  };

  const addFoodItemToDiary = () => {
    firebase
      .firestore()
      .collection("diary")
      .add({
        userId,
        mealName: selectedMealName,
        date,
        foodText,
        amount,
        size,
        protein,
        carbs,
        fat
      });
  };
  const [meals, setMeals] = useState(["Breakfast", "Lunch", "Dinner"]);
  const [selectedMealName, setSelectedMealName] = useState("Breakfast");

  return (
    <div className="add-food-item-to-diary">
      <button
        className="add-food-item-to-diary__button"
        onClick={() => handleAddToDiaryClick()}
      >
        {`Add to ${selectedMealName}`}
      </button>
      <select
        className="add-food-item-to-diary__select"
        value={selectedMealName}
        onChange={e => setSelectedMealName(e.target.value)}
      >
        {meals.map(meal => (
          <option value={meal}>{meal}</option>
        ))}
      </select>
    </div>
  );
};

export default AddFoodItemToDiary;
