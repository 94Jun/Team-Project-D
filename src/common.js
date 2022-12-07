import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

export const now = new Date();
// 현재 시간 기준 Date 객체

export const nowDate = now.toLocaleDateString();
// 현재 날짜(2022. 12. 7.) 형식

export const nowValue = now.valueOf();
// 현재 시간 기준 밸류값

export const randomId = Math.random().toString(32).slice(2);
// 랜덤 ID

export const getCollection = async (collectionId) => {
  const querySnapshot = await getDocs(collection(db, collectionId));
  const result = querySnapshot.docs.map((doc) => doc.data());
  return result;
};
