import { useState, useEffect } from "react";
import { firebase } from "../firebase";

// Custom hook -> useDiary -> henter alle diary indtastninger fra en given dato (diaryDate)
export const useDiary = diaryDate => {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    // unsubscribe bliver brugt. Den burde ikke brokke sig.
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
        }
      }
    });
  }, [diary, diaryDate]);

  return { diary };
};
