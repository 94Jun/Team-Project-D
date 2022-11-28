import styles from "./NoticeItem.module.css";
const NoticeItem = () => {
  return (
    <div className={styles.container}>
      <span>dog님이 팔로우 하셨습니다</span>
      <span>x</span>
    </div>
  );
};

export default NoticeItem;
