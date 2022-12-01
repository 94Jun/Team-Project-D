import styles from "./PostItem.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_LIKE_POSTING } from "../../modules/user";
import { POSTING_LIKE_POSTING } from "../../modules/posting";

const PostItem = (props) => {
  const dispatch = useDispatch();
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

  const [isMarked, setIsMarked] = useState(
    user.markedPosting.indexOf(props.posting.pid) !== -1
  );
  const [isLiked, setIsLiked] = useState(
    user.likedPosting.indexOf(props.posting.pid) !== -1
  );
  const toggleLikeHandler = () => {
    dispatch(USER_LIKE_POSTING({ pid: props.posting.pid }));
    dispatch(POSTING_LIKE_POSTING({ pid: props.posting.pid, uid: user.uid }));
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={`${styles.post_container} ${props.className}`}>
      <div className={styles.profile_img}>
        <img src={writer.profile} />
      </div>
      <div className={styles.post}>
        <div className={styles.post_top}>
          <span className={styles.user_name}>{writer.name}</span>
          <span className={styles.timestamp}>{props.posting.timestamp}</span>
        </div>
        <div className={styles.post_contents}>
          {props.posting?.contents?.images && (
            <div className={styles.post_contents_images}>
              <img src={props.posting.contents.images} />
            </div>
          )}
          <div className={styles.post_contents_text}>
            {props.posting.contents.text}
          </div>
          <div className={styles.hashtags_wrap}>
            {props.posting?.contents?.hashtags &&
              props.posting.contents.hashtags.map((tag, idx) => {
                return (
                  <span className={styles.post_contents_hashtags} key={idx}>
                    {tag}{" "}
                  </span>
                );
              })}
          </div>
        </div>
        <div className={styles.post_bottom}>
          <div>
            <button onClick={toggleLikeHandler}>
              {isLiked ? (
                <FavoriteIcon fontSize="small" />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
            </button>
            <span>{props.posting.like.length}</span>
          </div>
          <div>
            <button>
              <ChatBubbleOutlineIcon fontSize="small" />
            </button>
            <span>{comments.length}</span>
          </div>
          <div>
            <button>
              {isMarked ? (
                <BookmarkIcon fontSize="small" />
              ) : (
                <BookmarkBorderIcon fontSize="small" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
