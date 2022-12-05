import styles from "./PostItem.module.css";
const PostItemContent = (props) => {
  return (
    <div className={styles.post_contents}>
      {props.posting?.contents?.images &&
        props.posting.contents.images.map((img) => {
          return (
            <div className={styles.post_contents_images}>
              <img src={img} />
            </div>
          );
        })}
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
  );
};

export default PostItemContent;
