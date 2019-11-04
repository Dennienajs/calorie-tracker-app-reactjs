import { useState, useEffect } from "react";
import { firebase } from "./firebase";

// Custom hook -> useDiary -> henter alle diary indtastninger fra en given dato.
export const useDiary = diaryDate => {
   const [diary, setDiary] = useState([]);

   useEffect(() => {
      let unsubscribe = firebase
         .firestore()
         .collection("diary")
         .where("userId", "==", "1234567890");

      // henter diary ud fra datoen.
      unsubscribe = diaryDate
         ? unsubscribe.where("date", "==", diaryDate)
         : unsubscribe;

      unsubscribe = unsubscribe.onSnapshot(snapshot => {
         const diaryData = snapshot.docs.map(diarySnap => ({
            id: diarySnap.id,
            ...diarySnap.data()
         }));
         setDiary(diaryData);
      });

      return () => unsubscribe();
   }, [diaryDate]);

   return { diary };
};
