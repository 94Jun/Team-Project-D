import styles from "./PostItem.module.css";
import { useSelector } from "react-redux";
import PostItemProfile from "./PostItemProfile";
import PostItemInfo from "./PostItemInfo";
import PostItemContent from "./PostItemContent";
import PostItemActivity from "./PostItemActivity";
import PostItemComments from "./comments/PostItemComments";
import { useState } from "react";

const PostItem = (props) => {
  const userList = useSelector((state) => state.user.userList);
  const commentList = useSelector((state) => state.comment.commentList);
  const curruentUser = useSelector((state) => state.user.currentUser);

  const writer = userList.find((user) => user.uid === props.posting.writer);
  //해당 포스팅의 작성자정보 : writer

  const user = userList.find((user) => {
    return user.uid === curruentUser;
  });
  //현재 로그인한 유저정보 : user

  const comments = commentList.filter((comment) => {
    return comment.posting === props.posting.pid;
  });
  // 현재 포스팅의 코멘트 리스트 : comments

  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const toggleCommentsHandler = () => {
    setIsCommentsShown((prev) => !prev);
  };
  // 댓글창 on/off 기능

  return (
    <div className={`${styles.post_container} ${props.className}`}>
      <PostItemProfile profile={writer.profile} />
      <div className={styles.post}>
        <PostItemInfo name={writer.name} timestamp={props.posting.timestamp} />
        <PostItemContent posting={props.posting} />
        <PostItemActivity
          posting={props.posting}
          user={user}
          comments={comments}
          onToggleComments={toggleCommentsHandler}
        />
        {isCommentsShown && (
          <PostItemComments
            comments={comments}
            userList={userList}
            profile={user.profile}
            currentUser={curruentUser}
            pid={props.posting.pid}
          />
        )}
      </div>
    </div>
  );
};

export default PostItem;
