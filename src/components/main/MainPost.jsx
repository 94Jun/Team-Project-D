import PostItem from "../PostItem/PostItem";
import styles from "./MainPost.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";

const MainPost = () => {
  const [postingList, setPostingList] = useState();
  const getPostingList = async () => {
    const querySnapshot = await getDocs(collection(db, "postingList"));
    const loadedPosting = querySnapshot.docs.map((doc) => doc.data());
    setPostingList(loadedPosting);
  };
  useEffect(() => {
    getPostingList();
  }, []);

  return (
    <div className={styles.main}>
      {postingList?.map((posting) => {
        return <PostItem key={posting.pid} posting={posting} />;
      })}
    </div>
  );
};

export default MainPost;
