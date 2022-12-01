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
  //아이콘 변경을 위한 state
  //현재 로그인한 유저의 정보를 통해 '좋아요' 및 '마크' 여부 확인 후 초기값 설정

  const toggleLikeHandler = () => {
    dispatch(USER_LIKE_POSTING({ pid: props.posting.pid }));
    //현재 로그인한 user의 likedPosting 변경

    dispatch(
      POSTING_LIKE_POSTING({ pid: props.posting.pid, uid: props.user.uid })
    );
    //현재 포스팅을 좋아하는 유저리스트 변경

    setIsLiked((prev) => !prev);
    //아이콘 변경
  };

  const toggleMarkHandler = () => {
    dispatch(USER_MARK_POSTING({ pid: props.posting.pid }));
    //현재 로그인한 user의 markedPosting 변경

    setIsMarked((prev) => !prev);
    //아이콘 변경
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
        <button onClick={props.onToggleComments}>
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
