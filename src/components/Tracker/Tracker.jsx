import React from "react";
import "./Tracker.scss";

const Tracker = ({ amount, size, foodText, item }) => {
  const kcal = item.ENERC_KCAL; // total calories
  const protein = item.PROCNT_KCAL; // protein calories
  const fat = item.FAT_KCAL; // fat calories
  const carbs = item.CHOCDF_KCAL; // carbohydrates calories

  //Overvej at smide nedenstående ind i component "Tracker" og omdøb denne fil til "TrackerList"
  return (
    <div className="tracker">
      <h1>search result</h1>
      {foodText !== "" ? (
        <h3>{` ${foodText}, ${amount}${size !== "" ? ", " + size : " "}`}</h3>
      ) : null}

      <table className="tracker-search-data">
        {typeof kcal.quantity !== "number" ? (
          <tbody>
            <tr>
              <td>Loading...</td>
            </tr>
          </tbody>
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
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Tracker;
