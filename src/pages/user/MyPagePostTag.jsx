import styles from "./MyPagePost.module.css";
import { query, collection, where, orderBy, limit, getDocs, startAfter } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostItem from "../../components/PostItem/PostItem";

const MyPagePost = () => {
  const [postingList, setPostingList] = useState();
  const [lastVisible, setLastVisible] = useState()

  //리덕스 user정보 가져오기
  const user = useSelector((state)=>(state.user.currentUserInfo))
  //console.log(user);

  const getPostingList = async () => {
    if (!lastVisible) {
      const first = query(collection(db, "postingList"), where("pid", "in", user.markedPosting), orderBy("timestamp", "desc"), limit(5));
      const querySnapshot = await getDocs(first);
      setLastVisible(querySnapshot.docs[querySnapshot?.docs?.length - 1]);
      const loadedData = querySnapshot.docs.map((doc) => doc.data());
      setPostingList(loadedData);
    } else { 
      const next = query(collection(db, "postingList"), where("pid", "in", user.markedPosting), orderBy("timestamp", "desc"), startAfter(lastVisible), limit(5));
      const querySnapshot = await getDocs(next);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      const loadedData = querySnapshot.docs.map((doc) => doc.data());
      setPostingList((prev) => { 
        return [...prev, ...loadedData];
      });
    }
  };
  useEffect(() => {
    getPostingList();
  }, []);

  //화면에 보여지는 postingList 삭제
  const removePostingListHandler = (pid) => {
    const filteredPostingList = postingList.filter((posting) => { 
      return posting.pid !== pid
    })
    setPostingList(filteredPostingList);
  }

  return (
    <div className={styles.main}>
      {postingList?.map((posting) => {
        return <PostItem key={posting.pid} posting={posting} onRemovePosting={removePostingListHandler} />;
      })}
      <button onClick={getPostingList} className={styles.more_btn}>더 보기</button>
    </div>
  );
};

export default MyPagePost;
