import styles from "./UserPage.module.css";
import ProfileImg from "./ProfileImg";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MyPagePost from "./MyPagePost";
import { $CombinedState } from "@reduxjs/toolkit";


const UserPage = () => {
  return (
    <div className={styles.user}>
      <div className={styles.title}>
        <ProfileImg/>
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
              <a>팔로워</a></li>
            <li className={styles.comment}>
              <a>팔로우</a></li>
            </ul>
          </div>
          <p className={styles.comment}>소개글 작성</p>
          </div>
      </div>
      <div className={styles.postmenu}>
        <ul>
        <li><AppsIcon fontSize="small"/>게시글</li>
        <li><FavoriteBorderIcon fontSize="small"/>태그</li>
        </ul>
      </div>
    </div>
  );
}

export default UserPage;