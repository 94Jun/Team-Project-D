import styles from "./UserPage.module.css";
import { UserProfile } from "./ProfileImg";
import AppsIcon from "@mui/icons-material/Apps";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileEdit from "./ProfileEdit";
import { GET_CURRENT_USER_PROFILE } from "../../modules/user";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../common";

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const profile = useSelector((state) => state.user.profile);
  const params = useParams();

  console.log("profile", profile);
  //그사람에 유아이디를 들고온다 params.uid 아이디 저장됨
  // 그사람에 데이터 들고 와야함
  // 유저 프로필 불러오기

  useEffect(() => {
    getSingleData("userList", params.uid, setUser);
  }, []);
  //
  const getProfile = async () => {
    const profileRef = ref(storage, `images/${user.profile}`);
    const url = await getDownloadURL(profileRef);
    dispatch(GET_CURRENT_USER_PROFILE(url));
  };
  useEffect(() => {
    //currentUserInfo.profile값이 변하면 함수 실행
    getProfile();
  }, [user.profile]);

  return (
    <div className={styles.user}>
      <div className={styles.title}>
        <UserProfile profile={profile} />
        <div className={styles.main_title}>
          <div className={styles.name_title}>
            <div className={styles.name}>
              <p>{user.name}</p>
            </div>
            {params.uid === currentUserInfo.uid && (
              //다른사람 마이페이지에 들어갈때 프로필 편집안보이게
              <div className={styles.button1}>
                <button className={styles.button} onClick={handleOpen}>
                  프로필 편집
                </button>
              </div>
            )}
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
          <p className={styles.comment}>{user.introduction}</p>
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
