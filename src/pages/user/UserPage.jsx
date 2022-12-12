import styles from "./UserPage.module.css";
import ProfileImg from "./ProfileImg";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import ProfileEdit from "./ProfileEdit";
const UserPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className={styles.user}>
      <div className={styles.title}>
        <ProfileImg />
        <div className={styles.main_title}>
          <div className={styles.name_title}>
            <div className={styles.name}>
              <p>닉네임</p>
            </div>
            <div className={styles.button1}>
              <button className={styles.button} onClick={handleOpen}>
                프로필 편집
              </button>
            </div>
            <ProfileEdit open={open} setOpen={setOpen} />
          </div>
          <div>
            <ul className={styles.user_title}>
              <li className={styles.comment}>게시물</li>
              <li className={styles.comment}>
                <a>팔로워</a>
              </li>
              <li className={styles.comment}>
                <a>팔로우</a>
              </li>
            </ul>
          </div>
          <p className={styles.comment}>소개글 작성</p>
        </div>
      </div>
      <div className={styles.postmenu}>
        <ul>
          <li>
            <AppsIcon fontSize="small" />
            게시글
          </li>
          <li>
            <FavoriteBorderIcon fontSize="small" />
            태그
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
