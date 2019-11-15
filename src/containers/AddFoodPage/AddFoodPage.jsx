import React, { useState, useEffect } from "react";
import "./AddFoodPage.scss";
import { app_id, app_key } from "../../edamam";
import Tracker from "../../components/Tracker/Tracker";
import AddFoodItemToDiary from "../../components/AddFoodItemToDiary/AddFoodItemToDiary";

const AddFoodPage = ({ date }) => {
  const [food, setFood] = useState({
    amount: "100g",
    size: "0",
    foodText: "oats"
  });
  const [itemData, setItemData] = useState({
    calories: 0,
    // totalNutrients: {},
    totalNutrientsKCal: {
      ENERC_KCAL: {},
      PROCNT_KCAL: {},
      FAT_KCAL: {},
      CHOCDF_KCAL: {}
    }
  });

  useEffect(() => {
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${food.amount}%20${food.size}%20${food.foodText}`;
    fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        console.log(url);

        setItemData({
          calories: result.calories,
          totalNutrients: result.totalNutrients,
          totalNutrientsKCal: result.totalNutrientsKCal
        });
      })
      .catch(error => console.log("Fetch error: ", error.message));
  }, [food.foodText, food.amount, food.size]);

  const [newFood, setNewFood] = useState(food);
  console.log("NEW FOOD: ", newFood);

  const handleSubmit = e => {
    e.preventDefault();
    setFood(newFood);
  };

  const item = itemData.totalNutrientsKCal;
  const selectedUserId = "1234567890";
  const selectedMealName = "Breakfast"; //Options: Breakfast, Lunch, Dinner.

  return (
    <div className="add-food-page">
      <h1>Add Food Page</h1>
      <form action="Search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search for food, eg. oats"
          value={newFood.foodText}
          onChange={e => {
            setNewFood({ ...food, foodText: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="grams, eg. 100g"
          value={newFood.amount}
          onChange={e => {
            setNewFood({ ...food, amount: e.target.value });
          }}
        />
        <button>Search</button>
      </form>

      <Tracker
        amount={food.amount}
        size={food.size}
        foodText={food.foodText}
        item={item}
      />

      <AddFoodItemToDiary
        amount={food.amount}
        size={food.size}
        foodText={food.foodText}
        date={date}
        protein={(item.PROCNT_KCAL.quantity / 4).toFixed(1)}
        carbs={(item.CHOCDF_KCAL.quantity / 4).toFixed(1)}
        fat={(item.FAT_KCAL.quantity / 9).toFixed(1)}
        userId={selectedUserId}
        mealName={selectedMealName}
      />
      {console.log("item test: " + (item.PROCNT_KCAL.quantity / 4).toFixed(1))}
    </div>
  );
};

export default AddFoodPage;
