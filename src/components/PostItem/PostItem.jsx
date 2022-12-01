import styles from "./PostItem.module.css";
import { useSelector } from "react-redux";
import PostItemProfile from "./PostItemProfile";
import PostItemInfo from "./PostItemInfo";
import PostItemContent from "./PostItemContent";
import PostItemActivity from "./PostItemActivity";

const PostItem = (props) => {
  const userList = useSelector((state) => {
    return state.user.userList;
  });
  const commentList = useSelector((state) => {
    return state.comment.commentList;
  });

  const curruentUser = useSelector((state) => {
    return state.user.currentUser;
  });

  const writer = userList.find((user) => {
    return user.uid === props.posting.writer;
  });
  //해당 포스팅의 작성자정보 : writer

  const user = userList.find((user) => {
    return user.uid === curruentUser;
  });
  //현재 로그인한 유저정보 : user

  const comments = commentList.filter((comment) => {
    return comment.posting === props.posting.pid;
  });
  // 현재 포스팅의 코멘트 리스트 : comments

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
        />
      </div>
    </div>
  );
};

export default PostItem;
