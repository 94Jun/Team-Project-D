import styles from "./MyPagePost.module.css";
import {
  query,
  collection,
  where,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostItem from "../../components/PostItem/PostItem";
import { useParams } from "react-router-dom";
import { getSingleData} from "../../common";
import UserPage from "./UserPage";

const MyPagePost = () => {
  const [postingList, setPostingList] = useState();
  const [lastVisible, setLastVisible] = useState();
  const [postuser,setpostUser] = useState();
  const params = useParams();
  //리덕스 user정보 가져오기
  const user = useSelector((state) => state.user.currentUserInfo);
  //console.log(user);
  useEffect(() => {
  //다른사람 페이지 들어갔을때 그사람 userList 데이터 받아오는 함수
  getSingleData("userList", params.uid, setpostUser);
  }, [params]); 

  const getPostingList = async () => {
    if(params.uid == user.uid){
      if (!lastVisible) {
        const first = query(
          collection(db, "postingList"), 
          where("writer", "==", postuser.uid ), 
          orderBy("timestamp", "desc"), 
          limit(5));
        const querySnapshot = await getDocs(first);
        setLastVisible(querySnapshot.docs[querySnapshot?.docs?.length - 1]);
        const loadedData = querySnapshot.docs.map((doc) => doc.data());
        setPostingList(loadedData);
      } else { 
        const next = query(
          collection(db, "postingList"), 
          where("writer", "==", postuser.uid ), 
          orderBy("timestamp", "desc"), 
          startAfter(lastVisible), 
          limit(5));
        const querySnapshot = await getDocs(next);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        const loadedData = querySnapshot.docs.map((doc) => doc.data());
        setPostingList((prev) => { 
          return [...prev, ...loadedData];
        });
      }
    } else {
    if (!lastVisible) {
      const first = query(
        collection(db, "postingList"), 
        where("isPublic", "==", true ), 
        where("writer", "==", postuser.uid ), 
        orderBy("timestamp", "desc"), 
        limit(5));
      const querySnapshot = await getDocs(first);
      setLastVisible(querySnapshot.docs[querySnapshot?.docs?.length - 1]);
      const loadedData = querySnapshot.docs.map((doc) => doc.data());
      setPostingList(loadedData);
    } else { 
      const next = query(
        collection(db, "postingList"),
        where("isPublic", "==", true ), 
        where("writer", "==", postuser.uid ), 
        orderBy("timestamp", "desc"), 
        startAfter(lastVisible), 
        limit(5));
      const querySnapshot = await getDocs(next);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      const loadedData = querySnapshot.docs.map((doc) => doc.data());
      setPostingList((prev) => {
        return [...prev, ...loadedData];
      });
    }
  }
};
  useEffect(() => {
    getPostingList();
  },[postuser]);

  //화면에 보여지는 postingList 삭제
  const removePostingListHandler = (pid) => {
    const filteredPostingList = postingList.filter((posting) => {
      return posting.pid !== pid;
    });
    setPostingList(filteredPostingList);
  };

  return (
    <div className={styles.main}>
      {postingList?.map((posting) => {
        return (
          <PostItem
            key={posting.pid}
            posting={posting}
            onRemovePosting={removePostingListHandler}
          />
        );
      })}
      <button onClick={getPostingList} className={styles.more_btn}>
        더 보기
      </button>
    </div>
  );
};

export default MyPagePost;
