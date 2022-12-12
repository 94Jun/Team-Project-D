import styles from "./UserPage.module.css";
import ProfileImg from "./ProfileImg";

import AppsIcon from '@mui/icons-material/Apps';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { storage } from "../../config/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useEffect,useState } from "react";
import {useSelector } from "react-redux";

import ProfileEdit from "./ProfileEdit";

const UserPage = () => {
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);

  // 유저 프로필 불러오기
  const getProfile = async () => {
    const profileRef = ref(storage, `images/${currentUserInfo.profile}`);
    const url = await getDownloadURL(profileRef)
  };
  useEffect(() => {
    getProfile();
  },[currentUserInfo.profile])

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
              <a>팔로워</a></li>
            <li className={styles.comment}>
              <a>팔로우</a></li>
            </ul>
          </div>
          <p className={styles.comment}>{currentUserInfo.introduction}</p>
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
};

export default UserPage;
