import React, { useState, useEffect } from "react";
import "./Tracker.scss";

const Tracker = ({ amount, size, foodText, item }) => {
  const kcal = item.ENERC_KCAL; // total calories
  const protein = item.PROCNT_KCAL; // protein calories
  const fat = item.FAT_KCAL; // fat calories
  const carbs = item.CHOCDF_KCAL; // carbohydrates calories

  //Overvej at smide nedenstående ind i component "Tracker" og omdøb denne fil til "TrackerList"
  return (
    <div className="tracker">
      <h1>CALORIE TRACKER 101</h1>
      <h3>{`Food: ${foodText} - ${amount}${
        size !== "0" ? " - size: " + size : " "
      }`}</h3>
      {/* FIX LOADING ... */}
      <table className="tracker-search-data">
        {typeof kcal.quantity !== "number" ? (
          <p>Loading...</p> // TODO: virker ikke.
        ) : (
          <tbody>
            <tr>
              <td className="label">protein </td>
              <td>{(protein.quantity / 4).toFixed(1)} g</td>
            </tr>

            <tr>
              <td className="label">fat </td>
              <td>{(fat.quantity / 9).toFixed(1)} g</td>
            </tr>

            <tr>
              <td className="label">carbs </td>
              <td>{(carbs.quantity / 4).toFixed(1)} g</td>
            </tr>

            <tr>
              <td className="label">Total</td>

              <td>
                {kcal.quantity} {kcal.unit}
              </td>
            </tr>
            {console.log("item.kcal" + kcal.quantity)}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Tracker;
