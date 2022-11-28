import styles from "./FollowItem.module.css";
const FollowItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_wrap}>
        <img src="images/sample_profile.jpg" />
      </div>
      <div>cat</div>
    </div>
  );
};

export default FollowItem;
