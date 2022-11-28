import styles from "./Notice.module.css";
import NoticeItem from "./NoticeItem";
const Notice = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>알림</h2>
      <NoticeItem />
      <NoticeItem />
      <NoticeItem />
    </div>
  );
};

export default Notice;
