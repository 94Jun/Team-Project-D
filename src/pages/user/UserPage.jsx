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
import { getSingleData, updatePushData, getId } from "../../common";
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
    const followNotice = {
      nid: currentUserInfo.uid,
      text: `${currentUserInfo.name}님이 회원님을 팔로우 하였습니다.`,
    };
    try {
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
      if (currentUserInfo.following.includes(user?.uid)) {
        await updatePushData(
          "userList",
          user.uid,
          "notice",
          followNotice,
          true
        );
      }
      window.location.reload("/user");
    } catch (e) {
      alert("팔로우 실패하였습니다");
    }
  };
  /*const ag = user?.notice.find((e) => e);
  console.log(user?.notice[0]?.nid);
  console.log("asds", ag.nid);*/
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
    Following: <Follow user={user} />,
    Follower: <Follower user={user} />,
  };
  const MycontentList = [
    {
      text: "게시글",
      name: "MyPagePost",
      icon: <AppsIcon fontSize="small" />,
    },
    {
      text: "마크",
      name: "MyPagePostTag",
      icon: <BookmarkBorderIcon fontSize="small" />,
    },
    {
      text: "팔로우 목록",
      name: "Following",
      icon: <PersonOutlineOutlinedIcon fontSize="small" />,
    },
    {
      text: "팔로워 목록",
      name: "Follower",
      icon: <PersonOutlineOutlinedIcon fontSize="small" />,
    },
  ];
  const UsercontentList = [
    {
      text: "게시글",
      name: "MyPagePost",
      icon: <AppsIcon fontSize="small"/>,
    },
    {
      text: "팔로우 목록",
      name: "Following",
      icon: <PersonOutlineOutlinedIcon fontSize="small" />,
    },
    {
      text: "팔로워 목록",
      name: "Follower",
      icon: <PersonOutlineOutlinedIcon fontSize="small"/>
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
                  <li className={styles.comment}>
                    <span>게시물</span>
                    <span className={styles.user_data}> {postingCount}</span>
                  </li>
                  <li className={styles.comment}>
                    <span>팔로워</span>
                    <span className={styles.user_data}>
                      {currentUserInfo.follower.length}
                    </span>
                  </li>
                  <li className={styles.comment}>
                    <span>팔로우 </span>
                    <span className={styles.user_data}>
                      {currentUserInfo.following.length}
                    </span>
                  </li>
                </ul>
              )}
              {params.uid !== currentUserInfo.uid && (
                <ul className={styles.user_title}>
                  <li className={styles.comment}>
                    <span>게시물</span>
                    <span className={styles.user_data}> {postingCount}</span>
                    <span>팔로워 </span>
                    <span className={styles.user_data}>
                      {user.follower?.length}
                    </span>
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
                    <span className={styles.user_data}>
                      {" " + user.following?.length}
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <p className={styles.introduction}>{user.introduction}</p>
        </div>
      </div>
      <div className={styles.postmenu} >
        {params.uid === currentUserInfo.uid && (
      // '마크'된 포스트는 로그인 유저 마이페이지에서만 활성화
        <ul>
          {MycontentList.map((list) => (
            <li onClick={handleClickButton} className={styles.content_list}>
              <span onClick={handleClickButton}>{list.icon}</span>
              <button name={list.name} className={styles.nav_btn}>
                {list.text}
              </button>
            </li>
          ))}
        </ul>
        )}
        {params.uid !== currentUserInfo.uid && (
        <ul>
          {UsercontentList.map((list) => (
            <li onClick={handleClickButton} className={styles.content_list}>
              <span>{list.icon}</span>
              <button name={list.name} className={styles.nav_btn}>
                {list.text}
              </button>
            </li>
          ))}
          </ul>
        )}
      </div>
      {content ? <div>{selectComponent[content]}</div> : <div>{<MyPagePost/>}</div>}
    </div>
  );
};

export default UserPage;
