import React, { useState } from "react";
import Tracker from "./Tracker";

const AddFoodPage = () => {
  const [food, setFood] = useState({
    amount: "100g",
    size: "0",
    foodText: "oats"
  });

  const [newFood, setNewFood] = useState(food);
  console.log("NEW FOOD: ", newFood);

  const handleSubmit = e => {
    e.preventDefault();
    setFood(newFood);
  };

  return (
    <div>
      <h1>Add Food Page</h1>
      <form action="Search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newFood.foodText}
          onChange={e => {
            setNewFood({ ...food, foodText: e.target.value });
          }}
        />
        <button>Search</button>
      </form>

      <Tracker amount={food.amount} size={food.size} foodText={food.foodText} />
    </div>
  );
};

export default AddFoodPage;
