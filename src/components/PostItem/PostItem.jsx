import styles from "./PostItem.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const PostItem = (props) => {
  return (
    <div className={`${styles.post_container} ${props.className}`}>
      <div className={styles.profile_img}>
        <img src={props.posting.user.userProfile} />
      </div>
      <div className={styles.post}>
        <div className={styles.post_top}>
          <span className={styles.user_name}>
            {props.posting.user.userName}
          </span>
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
          {props.posting?.contents?.hashtags && (
            <div className={styles.post_contents_hashtags}>
              {props.posting.contents.hashtags}
            </div>
          )}
        </div>
        <div className={styles.post_bottom}>
          <div>
            <FavoriteBorderIcon fontSize="small" />
            <span>{props.posting.likes}</span>
          </div>
          <div>
            <ChatBubbleOutlineIcon fontSize="small" />
            <span>{props.posting.comments}</span>
          </div>
          <div>
            {props?.posting?.isMarked ? (
              <BookmarkIcon fontSize="small" />
            ) : (
              <BookmarkBorderIcon fontSize="small" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
