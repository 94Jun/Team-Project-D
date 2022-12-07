import styles from "./UserPage.module.css";
import ProfileImg from "./ProfileImg";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const UserPage = () => {
  return (
    <div className={styles.user}>
      <div className={styles.title}>
        <ProfileImg className={styles.ProfileImg}/>
        <div className={styles.main_title}>
          <div className={styles.name_title}>
            <div className={styles.name}>
            <p>닉네임</p>
            </div>
            <div className={styles.button1}>
            <Link to='/ProfileEdit'><button className={styles.button}>프로필 편집</button></Link>
            </div>
          </div>
          <div>
            <ul className={styles.user_title}>
            <li className={styles.comment}>게시물</li>
            <li className={styles.comment}>
              <a href="/User">팔로워</a></li>
            <li className={styles.comment}>
              <a href="/User">팔로우</a></li>
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