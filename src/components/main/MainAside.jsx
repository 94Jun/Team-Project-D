import FollowList from "../follow/FollowList";
import Notice from "../notice/Notice";
import styles from "./MainAside.module.css";
const MainAside = () => {
  return (
    <div className={styles.container}>
      <Notice />
      <FollowList />
    </div>
  );
};

export default MainAside;
