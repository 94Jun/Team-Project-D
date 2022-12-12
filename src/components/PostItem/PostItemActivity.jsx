import styles from "./PostItem.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
import { getId, updatePushData } from "../../common";
import useToggle from "../../hooks/useToggle";

const PostItemActivity = (props) => {
  //아이콘 변경을 위한 state
  //현재 로그인한 유저의 정보를 통해 '좋아요' 및 '마크' 여부 확인 후 초기값 설정
  const [isMarked, toggleMarked] = useToggle(props.currentUserInfo?.markedPosting.indexOf(props.posting.pid) !== -1);
  const [isLiked, toggleLiked] = useToggle(props.currentUserInfo?.likedPosting.indexOf(props.posting.pid) !== -1);
  const [likeLength, setLikeLength] = useState(props.posting.like.length);

  const toggleLikeHandler = async () => {
    const likeNotice = { nid: getId(), text: `${props.currentUserInfo.name}님이 회원님의 글을 좋아합니다.` };
    try {
      //현재 로그인한 user의 likedPosting 변경 (데이터베이스에 업데이트)
      //현재 포스팅을 좋아하는 유저리스트 변경(데이터베이스에 업데이트)
      //게시글 작성자에게 좋아요 알림
      updatePushData("userList", props.currentUserInfo.uid, "likedPosting", props.posting.pid, !isLiked);
      updatePushData("postingList", props.posting.pid, "like", props.currentUserInfo.uid, !isLiked);
      if (props.currentUserInfo.uid !== props.posting.writer && !isLiked) {
        updatePushData("userList", props.posting.writer, "notice", likeNotice, true);
      }

      //보여지는 좋아요 갯수 변경
      if (isLiked) {
        setLikeLength((prev) => prev - 1);
      } else {
        setLikeLength((prev) => prev + 1);
      }

      //아이콘 변경
      toggleLiked();
    } catch (e) {
      console.log(e.message);
    }
  };

  const toggleMarkHandler = () => {
    try {
      //현재 로그인한 user의 markedPosting 변경(데이터베이스에 업데이트)
      updatePushData("userList", props.currentUserInfo.uid, "markedPosting", props.posting.pid, !isMarked);
      //아이콘 변경
      toggleMarked();
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={styles.post_bottom}>
      <div>
        <button onClick={toggleLikeHandler}>{isLiked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}</button>
        <span>{likeLength}</span>
      </div>
      <div>
        <button onClick={props.onToggleComments}>
          <ChatBubbleOutlineIcon fontSize="small" />
        </button>
        <span>{props.commentsLength}</span>
      </div>
      <div>
        <button onClick={toggleMarkHandler}>{isMarked ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}</button>
      </div>
    </div>
  );
};

export default PostItemActivity;
