import React from "react";
import "./FoodDiary.scss";
import FoodDiaryHeaderDummie from "../../components/FoodDiaryHeaderDummie/FoodDiaryHeaderDummie";
import FoodDiaryContent from "../../components/FoodDiaryContent/FoodDiaryContent";

const FoodDiary = () => {
  const date = "02-11-2019";
  return (
    <div className="food-diary">
      <h1>Your food diary for: {date}</h1>

      <div className="food-container">
        <table className="food-table" id="food-table">
          {/* KOLONNER MED måltider og makrofordeling */}
          {/* HVAD FANDEN VAR DET JEG SKULLE BRUGE DETTE TIL */}

          {/* <colgroup>
                  <col className="col-1 meal" />
                  <col className="col-2 kcal" />
                  <col className="col-2 protein" />
                  <col className="col-2 carbs" />
                  <col className="col-2 fat" />
                  <col className="col 6 remove" />
               </colgroup> */}

          {/* TABLE CONTENT... */}
          <tbody>
            <FoodDiaryHeaderDummie />

            {/* **** BREAKFAST CONTENT **** */}
            <FoodDiaryContent date={date} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodDiary;
