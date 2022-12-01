import styles from "./PostItem.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_LIKE_POSTING, USER_MARK_POSTING } from "../../modules/user";
import { POSTING_LIKE_POSTING } from "../../modules/posting";

const PostItemActivity = (props) => {
  const dispatch = useDispatch();
  const [isMarked, setIsMarked] = useState(
    props.user.markedPosting.indexOf(props.posting.pid) !== -1
  );
  const [isLiked, setIsLiked] = useState(
    props.user.likedPosting.indexOf(props.posting.pid) !== -1
  );
  const toggleLikeHandler = () => {
    dispatch(USER_LIKE_POSTING({ pid: props.posting.pid }));
    dispatch(
      POSTING_LIKE_POSTING({ pid: props.posting.pid, uid: props.user.uid })
    );
    setIsLiked((prev) => !prev);
  };
  const toggleMarkHandler = () => {
    dispatch(USER_MARK_POSTING({ pid: props.posting.pid }));
    setIsMarked((prev) => !prev);
  };
  return (
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
        <span>{props.comments.length}</span>
      </div>
      <div>
        <button onClick={toggleMarkHandler}>
          {isMarked ? (
            <BookmarkIcon fontSize="small" />
          ) : (
            <BookmarkBorderIcon fontSize="small" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PostItemActivity;
