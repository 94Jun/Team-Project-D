import MyPage from "./MyPage";
import styles from "./UserPage.module.css";
import ProfileImg from "./ProfileImg";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const UserPage = () => {
  return (
    <div className={styles.user}>
      <div className={styles.title}>
        <ProfileImg/>
        <div>
          <div className={styles.name}>
            <p>닉네임</p>
            <Link to='/ProfileEdit'><button className={styles.button}>프로필 편집</button></Link>
          </div>
          <div className={styles.user_title}>
            <ul>
            <li className={styles.comment}>게시물</li>
            <li className={styles.comment}>팔로워</li>
            <li className={styles.comment}>팔로우</li>
            </ul>
          </div>
          <ul className={styles.comment}>Hellow World!</ul>
          </div>
      </div>
      <div className={styles.picture}>
        <ul><AppsIcon fontSize="small"/>게시물 </ul>
        <ul><FavoriteBorderIcon fontSize="small"/>저장됨 </ul>
      </div>
      <div className="pages">
      </div>
    </div>
  );
}

export default UserPage;