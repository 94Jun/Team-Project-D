import { useSelector } from "react-redux";
import PostItem from "../PostItem/PostItem";
import { collection, query, where, getDocs, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";
import styles from "./Search.module.css";

const SearchResult = () => {
  const currentSearch = useSelector((state) => state.search.currentSearch);
  const [filteredPosting, setFilteredPosting] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);

  const getPostingList = async () => {
    if (!lastVisible) {
      const first = query(
        collection(db, "postingList"),
        where("hashtags", "array-contains", currentSearch),
        where("isPublic", "==", true),
        orderBy("timestamp", "desc"),
        limit(10)
      );
      const querySnapshot = await getDocs(first);
      setLastVisible(querySnapshot.docs[querySnapshot?.docs?.length - 1]);
      const loadedData = querySnapshot.docs.map((doc) => doc.data());
      setFilteredPosting(loadedData);
    } else {
      const next = query(
        collection(db, "postingList"),
        where("hashtags", "array-contains", currentSearch),
        where("isPublic", "==", true),
        orderBy("timestamp", "desc"),
        startAfter(lastVisible),
        limit(5)
      );
      const querySnapshot = await getDocs(next);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      const loadedData = querySnapshot.docs.map((doc) => doc.data());
      setFilteredPosting((prev) => {
        return [...prev, ...loadedData];
      });
    }
  };
  //currnetSearch 해쉬태그 값을 가지고 있는 postingList 데이터베이스에서 추출

  useEffect(() => {
    try {
      getPostingList();
    } catch (e) {
      console.log(e.message);
    }
  }, [currentSearch]);

  return (
    <div>
      {filteredPosting &&
        filteredPosting.map((posting) => {
          return <PostItem key={posting.pid} posting={posting} />;
        })}
      <button className={styles.more_btn} onClick={getPostingList}>
        더보기
      </button>
    </div>
  );
};

export default SearchResult;
