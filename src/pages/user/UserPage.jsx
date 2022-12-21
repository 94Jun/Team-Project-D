import styles from "./UserPage.module.css";
import { UserProfile } from "./ProfileImg";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileEdit from "./ProfileEdit";
import { GET_CURRENT_USER_PROFILE } from "../../modules/user";
import { ref, getDownloadURL } from "firebase/storage";
import { useDispatch } from "react-redux";
import MyPagePost from "./MyPagePost";
import MyPagePostTag from "./MyPagePostTag";
import { useParams } from "react-router-dom";
import { getSingleData, updatePushData } from "../../common";
import { storage } from "../../config/firebase";
import Follow from "../../components/follow/Follow";
import Follower from "../../components/follower/Follower";
import { db } from "../../config/firebase";
import {
  collection,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";
const UserPage = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [postingCount, setPostingCount] = useState("");
  const [content, setContent] = useState();
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const profile = useSelector((state) => state.user.profile);
  const params = useParams();

  useEffect(() => {
    //다른사람 페이지 들어갔을때 그사람 userList 데이터 받아오는 함수
    getSingleData("userList", params.uid, setUser);
  }, [params]);

  //프로필 사진 가져오는 함수

  const getProfile = async () => {
    const profileRef = ref(storage, `images/${user.profile}`);
    const url = await getDownloadURL(profileRef);
    dispatch(GET_CURRENT_USER_PROFILE(url));
  };

  const follow = async () => {
    await updatePushData(
      "userList",
      currentUserInfo.uid,
      "following",
      user.uid,
      !currentUserInfo.following.includes(user.uid)
      //currentUserInfo.following배열 안에 user.uid비교
    ); //내가 팔로우 하면 내쪽에 들어가는 함수
    await updatePushData(
      "userList",
      user.uid,
      "follower",
      currentUserInfo.uid,
      !user.follower.includes(currentUserInfo.uid)
    ); //내가 팔로우하면 상대쪽 팔로워에들어가는거
    try {
      //새로고침 빼기 알럿창 빼기
      window.location.reload("/user");
    } catch (e) {
      alert("팔로우 실패하였습니다");
    }
  };
  //개시물 갯수
  const userPostingCount = async () => {
    const coll = collection(db, "postingList");
    const query_ = query(coll, where("writer", "==", user.uid));
    const snapshot = await getCountFromServer(query_);
    try {
      setPostingCount(snapshot.data().count);
    } catch (e) {}
  };

  useEffect(() => {
    //currentUserInfo.profile값이 변하면 함수 실행
    userPostingCount();
    getProfile();
  }, [user.profile]);

  //다른 컴포넌트 불러오는 함수 test
  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };
  const selectComponent = {
    MyPagePost: <MyPagePost />,
    MyPagePostTag: <MyPagePostTag />,
    Following: <Follow />,
    Follower: <Follower />,
  };
  const test = [
    {
      name: "MyPagePost",
    },
    {
      name: "MyPagePostTag",
    },
    {
      name: "Following",
    },
    {
      name: "Follower",
    },
  ];
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
            <div>
              {params.uid === currentUserInfo.uid && (
                <ul className={styles.user_title}>
                  <li className={styles.comment}>{"게시물:" + postingCount}</li>
                  <li className={styles.comment}>
                    <span>{"팔로워:" + currentUserInfo.follower.length}</span>
                  </li>
                  <li className={styles.comment}>
                    <span>{"팔로우:" + currentUserInfo.following.length}</span>
                  </li>
                </ul>
              )}
              {params.uid !== currentUserInfo.uid && (
                <ul className={styles.user_title}>
                  <li className={styles.comment}>{"게시물:" + postingCount}</li>

                  <li className={styles.comment}>
                    <span>{"팔로워:" + user.follower?.length}</span>
                  </li>
                  <li className={styles.comment}>
                    {!currentUserInfo.following?.includes(user.uid) && (
                      <button className={styles.follow_btn} onClick={follow}>
                        팔로우
                      </button>
                    )}
                    {currentUserInfo.following?.includes(user.uid) && (
                      <button className={styles.unfollow_btn} onClick={follow}>
                        팔로우
                      </button>
                    )}
                    <span> {":" + user.following?.length}</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <p className={styles.comment}>{user.introduction}</p>
        </div>
      </div>
      <div className={styles.postmenu} >
        <ul>
          <li onClick={handleClickButton}>
            <button name={test[0].name} className={styles.nav_btn}>
            <AppsIcon fontSize="small" />
              게시글
            </button>
          </li>
          <li onClick={handleClickButton} >
            <button name={test[1].name} className={styles.nav_btn}>
            
            <BookmarkBorderIcon fontSize="small" />마크
            </button>
          </li>
          <li onClick={handleClickButton}>
            <button name={test[2].name} className={styles.nav_btn}>
            <PersonOutlineOutlinedIcon fontSize="small" />
              팔로우 목록
            </button>
          </li>
          <li onClick={handleClickButton}>
            <button name={test[3].name} className={styles.nav_btn} >
            <PersonOutlineOutlinedIcon fontSize="small"/>
              팔로워 목록
            </button>
          </li>
        </ul>
      </div>
      {content ? <div>{selectComponent[content]}</div> : <div>{<MyPagePost/>}</div>}
    </div>
  );
};

export default UserPage;
