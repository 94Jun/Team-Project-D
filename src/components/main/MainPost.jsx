import PostItem from "../PostItem/PostItem";
import styles from "./MainPost.module.css";
import { query, collection, where, orderBy, limit, getDocs, startAfter } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";

const MainPost = () => {
  const [postingList, setPostingList] = useState();
  const [lastVisible, setLastVisible] = useState()

  const getPostingList = async () => {
    if (!lastVisible) {
      const first = query(collection(db, "postingList"), where("isPublic", "==", true), orderBy("timestamp", "desc"), limit(10));
      const querySnapshot = await getDocs(first);
      setLastVisible(querySnapshot.docs[querySnapshot?.docs?.length - 1]);
      const loadedData = querySnapshot.docs.map((doc) => doc.data());
      setPostingList(loadedData);
    } else { 
      const next = query(collection(db, "postingList"), where("isPublic", "==", true), orderBy("timestamp", "desc"), startAfter(lastVisible), limit(5));
      const querySnapshot = await getDocs(next);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      const loadedData = querySnapshot.docs.map((doc) => doc.data());
      setPostingList((prev) => { 
        return [...prev, ...loadedData];
      });
    }
  };
  console.log(lastVisible)
  useEffect(() => {
    getPostingList();
  }, []);

  return (
    <div className={styles.main}>
      {postingList?.map((posting) => {
        return <PostItem key={posting.pid} posting={posting} />;
      })}
      <button onClick={getPostingList} className={styles.more_btn}>더 보기</button>
    </div>
  );
};

export default MainPost;
