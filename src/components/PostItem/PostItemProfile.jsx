import styles from "./PostItem.module.css";
const PostItemProfile = (props) => {
  return (
    <div className={styles.profile_img}>
      <img src={props.profile} />
    </div>
  );
};

export default PostItemProfile;
