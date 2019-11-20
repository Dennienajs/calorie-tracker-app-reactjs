import React, { useState, useEffect } from "react";
import "./AddFoodPage.scss";
import { app_id, app_key } from "../../edamam";
import Tracker from "../../components/Tracker/Tracker";
import AddFoodItemToDiary from "../../components/AddFoodItemToDiary/AddFoodItemToDiary";

const AddFoodPage = ({ date }) => {
  const [food, setFood] = useState({
    amount: "",
    size: "",
    foodText: ""
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

  const handleSubmit = e => {
    e.preventDefault();
    setFood(newFood);
  };

  const item = itemData.totalNutrientsKCal;
  const selectedUserId = "1234567890";

  return (
    <div className="add-food-page">
      <h1>add food to diary</h1>
      <form action="Search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="FOOD - oats, eggs"
          value={newFood.foodText}
          onChange={e => {
            setNewFood({ ...newFood, foodText: e.target.value });
          }}
          required
        />
        <input
          type="text"
          placeholder="AMOUNT - 100g, 5, 1l"
          value={newFood.amount}
          onChange={e => {
            setNewFood({ ...newFood, amount: e.target.value });
          }}
          required
        />
        <input
          type="text"
          placeholder="SIZE - (optional) large"
          value={newFood.size}
          onChange={e => {
            setNewFood({ ...newFood, size: e.target.value });
          }}
        />

        <button className="add-food-page__search">Search</button>
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
      />
    </div>
  );
};

export default AddFoodPage;
