import styles from "./PostItem.module.css";
import { useSelector } from "react-redux";
import PostItemProfile from "./PostItemProfile";
import PostItemInfo from "./PostItemInfo";
import PostItemContent from "./PostItemContent";
import PostItemActivity from "./PostItemActivity";
import PostItemComments from "./comments/PostItemComments";
import { useState, useEffect } from "react";
import { getqueryData, getSingleData } from "../../common";
import { query, collection, where, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import useToggle from "../../hooks/useToggle";

const PostItem = (props) => {
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const [writerInfo, setWriterInfo] = useState("");
  const [commentList, setCommentList] = useState("");
  const [commentsLength, setCommentLength] = useState(props.posting?.comments.length);

  // 댓글창 on/off
  const [isCommentsShown, toggleCommentsHandler] = useToggle(false);

  // 화면에 보여지는 댓글 및 댓글 수 추가
  const addCommentList = (addedcomment) => {
    setCommentList((prev) => {
      return [addedcomment, ...prev];
    });
    setCommentLength((prev) => prev + 1);
  };
  const getCommentList = async () => {
    const q = query(collection(db, "commentList"), where("posting", "==", props.posting.pid), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const loadedData = querySnapshot.docs.map((doc) => doc.data());
    setCommentList(loadedData);
  };
  useEffect(() => {
    try {
      //해당 포스팅의 작성자 정보 불러오기
      getSingleData("userList", props.posting.writer, setWriterInfo);

      //해당 포스팅에 해당하는 코멘트 리스트 불러오기
      // getqueryData("commentList", "posting", "==", props.posting.pid, setCommentList);
      getCommentList();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <div className={`${styles.post_container} ${props.className}`}>
      <PostItemProfile profile={writerInfo.profile} />
      <div className={styles.post}>
        <PostItemInfo name={writerInfo.name} writeDate={props.posting.writeDate} />
        <PostItemContent contents={props.posting.contents} />
        <PostItemActivity posting={props.posting} currentUserInfo={currentUserInfo} commentsLength={commentsLength} onToggleComments={toggleCommentsHandler} />
        {isCommentsShown && (
          <PostItemComments
            commentList={commentList}
            currentUserInfo={currentUserInfo}
            pid={props.posting.pid}
            writer={props.posting.writer}
            addCommentList={addCommentList}
          />
        )}
      </div>
    </div>
  );
};

export default PostItem;
