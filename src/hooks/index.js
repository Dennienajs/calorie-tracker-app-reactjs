import { useState, useEffect } from "react";
import { firebase } from "../firebase";

// Custom hook -> useDiary -> henter alle diary indtastninger fra en given dato (diaryDate)
export const useDiary = diaryDate => {
   const [diary, setDiary] = useState([]);

   //NOTE: found work around - delete later when sure it works.
   // const [breakfast, setBreakfast] = useState([]);
   // const [lunch, setLunch] = useState([]);
   // const [dinner, setDinner] = useState([]);

   // unsubscribe bliver brugt. Den burde ikke brokke sig.
   useEffect(() => {
      let unsubscribe = firebase
         .firestore()
         .collection("diary")
         .where("userId", "==", "1234567890")
         .where("date", "==", diaryDate);

      unsubscribe = unsubscribe.onSnapshot(snapshot => {
         const diaryData = snapshot.docs.map(diarySnap => ({
            id: diarySnap.id,
            ...diarySnap.data()
         }));

         if (JSON.stringify(diaryData) !== JSON.stringify(diary)) {
            if (diaryData !== undefined) {
               setDiary(diaryData);
               // setBreakfast(
               //    diaryData.filter(diary => diary.mealName !== "Breakfast")
               // );
               // setLunch(diaryData.filter(diary => diary.mealName !== "Lunch"));
               // setDinner(
               //    diaryData.filter(diary => diary.mealName !== "Dinner")
               // );
            }
         }
      });
   }, [diary, diaryDate]);

   return { diary };
};
