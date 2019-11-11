import React, { useState, useEffect } from "react";
import "./Tracker.scss";
import { app_id, app_key } from "./edamam";

const Tracker = ({ amount, size, foodText }) => {
  const [itemData, setItemData] = useState({
    calories: 0,
    totalNutrients: {},
    totalNutrientsKCal: {
      ENERC_KCAL: {},
      PROCNT_KCAL: {},
      FAT_KCAL: {},
      CHOCDF_KCAL: {}
    }
  });

  useEffect(() => {
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${amount}%20${size}%20${foodText}`;
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
  }, [foodText, amount, size]);

  const item = itemData.totalNutrientsKCal;

  const kcal = item.ENERC_KCAL; // total calories
  const p = item.PROCNT_KCAL; // protein calories
  const f = item.FAT_KCAL; // fat calories
  const c = item.CHOCDF_KCAL; // carbohydrates calories

  //Overvej at smide nedenstående ind i component "Tracker" og omdøb denne fil til "TrackerList"
  return (
    <div className="tracker">
      <h1>CALORIE TRACKER 101</h1>
      <h3>
        {foodText}__{amount}__{size}
      </h3>

      <div className="tracker-search-data">
        {itemData.calories === 0 ? (
          <p>Loading...</p>
        ) : (
          <tbody>
            <tr>
              <td className="label">protein </td>
              <td>{(p.quantity / 4).toFixed(1)} g</td>
            </tr>

            <tr>
              <td className="label">fat </td>
              <td>{(f.quantity / 9).toFixed(1)} g</td>
            </tr>

            <tr>
              <td className="label">carbs </td>
              <td>{(c.quantity / 4).toFixed(1)} g</td>
            </tr>

            <tr>
              <td className="label">Total</td>

              <td>
                {kcal.quantity} {kcal.unit}
              </td>
            </tr>
          </tbody>
        )}
      </div>
    </div>
  );
};

export default Tracker;
