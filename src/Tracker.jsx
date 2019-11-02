import React, { useState, useEffect } from "react";
import { app_id, app_key } from "./edamam";

const Tracker = () => {
   const [searchItem, setSearchItem] = useState({
      amount: "1",
      size: "large",
      foodText: "egg"
   });
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
      fetch(
         `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${searchItem.amount}%20${searchItem.size}%20${searchItem.foodText}`
      )
         .then(response => response.json())
         .then(result => {
            console.log(result);

            setItemData({
               calories: result.calories,
               totalNutrients: result.totalNutrients,
               totalNutrientsKCal: result.totalNutrientsKCal
            });
         })
         .catch(error => console.log("Fetch error: ", error.message));
   }, []);
   const kcal = itemData.totalNutrientsKCal.ENERC_KCAL;
   const p = itemData.totalNutrientsKCal.PROCNT_KCAL;
   const f = itemData.totalNutrientsKCal.FAT_KCAL;
   const c = itemData.totalNutrientsKCal.CHOCDF_KCAL;
   return (
      <div>
         <h1>CALORIE TRACKER 101</h1>
         <form action="Search">
            <input type="text" value={searchItem.foodText} />
            <button>Search</button>
         </form>
         <div className="tracker">
            {itemData.calories === 0 ? (
               <p>Loading...</p>
            ) : (
               <>
                  <h3>{kcal.label}</h3>
                  <p>{kcal.quantity}</p>
                  <p>{kcal.unit}</p>
                  <h3>{p.label}</h3>
                  <p>{p.quantity}</p>
                  <p>{p.unit}</p>
                  <h3>{f.label}</h3>
                  <p>{f.quantity}</p>
                  <p>{f.unit}</p>
                  <h3>{c.label}</h3>
                  <p>{c.quantity}</p>
                  <p>{c.unit}</p>
               </>
            )}
         </div>
      </div>
   );
};

export default Tracker;
