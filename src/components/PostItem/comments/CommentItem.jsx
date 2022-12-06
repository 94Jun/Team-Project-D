import styles from "./PostItemComments.module.css";
const CommentItem = (props) => {
  const writer = props.userList.find((user) => {
    return user.uid === props.comment.writer;
  });

  return (
    <div className={styles.comment_item}>
      <div className={styles.comment_profile_wrap}>
        <img src={writer.profile} />
      </div>
      <div>
        <span className={styles.comment_writer_name}>{writer.name}</span>
        <span className={styles.comment_date}>{props.comment.date}</span>
        <p className={styles.comment_text}>{props.comment.text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
