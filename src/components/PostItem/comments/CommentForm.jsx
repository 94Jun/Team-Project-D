import { useState } from "react";
import styles from "./PostItemComments.module.css";
import { useDispatch } from "react-redux";
import { ADD_COMMENT } from "../../../modules/comment";
import { USER_ADD_COMMENT } from "../../../modules/user";
import { POSTING_ADD_COMMENT } from "../../../modules/posting";
import { db } from "../../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { randomId } from "../../../common";

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState("");
  //댓글 input 양방향 바인딩

  const addCommentHandler = async (e) => {
    e.preventDefault();
    if (commentInput.trim().length > 0) {
      const addedComment = {
        cid: randomId,
        writer: props.currentUser,
        posting: props.pid,
        text: commentInput,
        date: new Date().toLocaleDateString(),
        timestamp: new Date().valueOf(),
      };
      try {
        await setDoc(doc(db, "commentList", addedComment.cid), addedComment);
        dispatch(ADD_COMMENT(addedComment));
        //ADD_COMMENT : commentList에 추가

        dispatch(USER_ADD_COMMENT({ cid: addedComment.cid }));
        //USER_ADD_COMMENT : 현재 로그인한 user의 myComments에 추가

        dispatch(
          POSTING_ADD_COMMENT({ cid: addedComment.cid, pid: props.pid })
        );
        //POSTING_ADD_COMMENT : 현재 포스팅의 comments에 추가

        setCommentInput("");
        //인풋창 초기화
      } catch (e) {}
    }
    return;
  };
  //댓글 추가 기능
  const changeCommentHandler = (e) => {
    setCommentInput(e.target.value);
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.profile_wrap}>
        <img src={props.profile} />
      </div>
      <form className={styles.comment_form} onSubmit={addCommentHandler}>
        <div>
          <input
            type="text"
            placeholder="댓글을 입력하세요"
            value={commentInput}
            onChange={changeCommentHandler}
          />
          <button>등록</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
