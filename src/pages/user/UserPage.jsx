import styles from "./UserPage.module.css";

import { UserProfile } from "./ProfileImg";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileEdit from "./ProfileEdit";
import { GET_CURRENT_USER_PROFILE } from "../../modules/user";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useDispatch } from "react-redux";
import MyPagePost from "./MyPagePost";
import MyPagePostTag from "./MyPagePostTag";


const UserPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const profile = useSelector((state) => state.user.profile);


  const getProfile = async () => {
    const profileRef = ref(storage, `images/${currentUserInfo.profile}`);
    const url = await getDownloadURL(profileRef);
    dispatch(GET_CURRENT_USER_PROFILE(url));
  };
  useEffect(() => {

    getProfile();
  }, [currentUserInfo.profile]);

  //게시물,태그 클릭 시 서로 다른 포스트 보여주기
  const [viewPost,setviewPost] = useState(true)
  const [isMarked,setisMarked] = useState(true)

  return (
    <div className={styles.user}>
      <div className={styles.title}>
        <UserProfile profile={profile} />
        <div className={styles.main_title}>
          <div className={styles.name_title}>
            <div className={styles.name}>
              <p>{currentUserInfo.name}</p>
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
          <p className={styles.comment}>{currentUserInfo.introduction}</p>
        </div>
      </div>
      <div className={styles.postmenu}>
        <ul>
          <li onClick={() => { setviewPost(true); setisMarked(true); } }>
            <AppsIcon fontSize="small" />
            게시글
          </li>
          <li 
          onClick={()=>{ setviewPost(false); setisMarked(false);}}>
          {isMarked ? <BookmarkBorderIcon fontSize="small" /> : <BookmarkIcon fontSize="small" />}
          마크
        </li>
      </ul>
    </div><div>
        {viewPost ? <MyPagePost /> : <MyPagePostTag />}
      </div>
    </div>
  );
};

export default UserPage;