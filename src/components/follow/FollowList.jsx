import FollowItem from "./FollowItem";
import styles from "./FollowList.module.css";
const FollowList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>팔로우 목록</h2>
      <div className={styles.follow_wrap}>
        <FollowItem />
        <FollowItem />
        <FollowItem />
        <FollowItem />
        <FollowItem />
      </div>
    </div>
  );
};

export default FollowList;
