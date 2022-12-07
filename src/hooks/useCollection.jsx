import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const useCollection = () => {
  const [collectionData, setCollectionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getCollection = async (collectionId) => {
    try {
      setIsLoading(true);
      setError(null);
      const querySnapshot = await getDocs(collection(db, collectionId));
      const result = querySnapshot.docs.map((doc) => doc.data());
      setCollectionData(result);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
    }
  };
  return { getCollection, isLoading, error };
};

export default useCollection;
