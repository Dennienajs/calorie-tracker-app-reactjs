import React from "react";
import { useDiary } from "../../hooks";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { firebase } from "../../firebase";

// This is a fucking mess - please fix
const FoodDiaryRenderMeals = ({ date, mealName }) => {
  const { diary } = useDiary(date); // custom hook til at hente alt diary

  let kcal = 0,
    totalKcal = 0,
    protein = 0,
    totalProtein = 0,
    carbs = 0,
    totalCarbs = 0,
    fat = 0,
    totalFat = 0;

  const setAllMealTotals = food => {
    // Protein and Carbs has 4 Kcal per gram. Fat has 9 Kcal per gram.
    kcal = (
      ((protein = Number(food.protein)) + (carbs = Number(food.carbs))) * 4 +
      (fat = Number(food.fat)) * 9
    ).toFixed(0);

    totalKcal += Number(kcal);
    totalProtein += protein;
    totalCarbs += carbs;
    totalFat += fat;

    // returns = set the variables outside this function.
    return { kcal, totalKcal, totalProtein, totalCarbs, totalFat };
  };

  const handleOnDeleteClick = id => {
    let confirmation = window.confirm(
      "Are you sure you want to delete this food from your diary?"
    );

    confirmation ? deleteDiaryFoodById(id) : console.log("false");
  };

  const deleteDiaryFoodById = id => {
    firebase
      .firestore()
      .collection("diary")
      .doc(id)
      .delete()
      .then(() => {
        window.alert("Food succesfully deleted!");
      })
      .catch(err => {
        console.error("Error deleting food: ", err);
        window.alert("Ooops, something went wrong. Please try again.");
      });
  };

  return (
    <>
      <tr>
        <td className="food-diary-render-meals-header">{mealName}</td>
      </tr>
      {diary.map(food => (
        <tr className="macros" key={food.id}>
          {food.mealName === mealName ? (
            <>
              <td className="meal">
                {`${food.foodText}, ${food.amount}
                  ${
                    food.size !== "" && food.size !== "0" ? " " + food.size : ""
                  }`}
              </td>
              <td>{setAllMealTotals(food).kcal}</td>
              <td>{protein.toFixed(0)}</td>
              <td>{carbs.toFixed(0)}</td>
              <td>{fat.toFixed(0)}</td>
              <td
                className="delete"
                onClick={() => handleOnDeleteClick(food.id)}
              >
                <FaRegTrashAlt />
              </td>
            </>
          ) : null}
        </tr>
      ))}

      <tr className="bottom-bar">
        <td className="add-food">
          <Link to="/addfood">Add food</Link>
        </td>
        <td className="totals">{totalKcal.toFixed(0)}</td>
        <td className="totals">{totalProtein.toFixed(0)}</td>
        <td className="totals">{totalCarbs.toFixed(0)}</td>
        <td className="totals">{totalFat.toFixed(0)}</td>
      </tr>
    </>
  );
};

export default FoodDiaryRenderMeals;
