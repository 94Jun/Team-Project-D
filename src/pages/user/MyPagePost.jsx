import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import MyPagePostImg from "./MyPagePostImg";
import styles from "./UserPage.module.css";

const MyPagePost = () => {
  
  const [postingList, setPostingList] = useState();
  const getPostingList = async () => {
    const querySnapshot = await getDocs(collection(db, "postingList"));
    const loadedPosting = querySnapshot.docs.map((doc) => doc.data());
    setPostingList(loadedPosting);
  };
  useEffect(() => {
    getPostingList();
  }, [postingList.images]);

  
  return (
    <div>
      {postingList.images}
    </div>
  );
};

export default MyPagePost;