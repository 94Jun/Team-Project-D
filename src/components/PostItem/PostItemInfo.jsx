import styles from "./PostItem.module.css";
const PostItemInfo = (props) => {
  return (
    <div className={styles.post_top}>
      <span className={styles.user_name}>{props.name}</span>
      <span className={styles.timestamp}>{props.writeDate}</span>
    </div>
  );
};

export default PostItemInfo;
