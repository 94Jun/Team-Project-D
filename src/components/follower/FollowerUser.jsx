import styles from "./Follower.module.css";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { updatePushData, getId } from "../../common";

const FollowerUser = ({ follower, user }) => {
  const [followUserImg, setFollowUserImg] = useState();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);

  const getProfiles = async () => {
    const profileRef = ref(storage, `images/${follower.profile}`);
    const url = await getDownloadURL(profileRef);
    setFollowUserImg(url);
  };

  useEffect(() => {
    getProfiles();
  }, [followUserImg]);

  //내follower 목록쪽 Follow 함수
  const Follow = async () => {
    const followNotice = {
      nid: getId(),
      text: `${currentUserInfo.name}님이 회원님을 팔로우 하였습니다.`,
    };
    try {
      await updatePushData(
        "userList",
        currentUserInfo.uid,
        "following",
        follower?.uid,
        !currentUserInfo.following.includes(follower?.uid)
        //내 팔로우 리스트에
      );
      await updatePushData(
        "userList",
        follower?.uid,
        "follower",
        currentUserInfo.uid,
        !follower.follower?.includes(currentUserInfo.uid)
      );
      /*if (!currentUserInfo.following.includes(follower?.uid)) {
        updatePushData(
          "userList",
          currentUserInfo.uid, //내아이디에 넣게됨 XX
          "notice",
          followNotice,
          true
        );
      }*/
      window.location.reload("/user");
    } catch (e) {}
  };
  console.log(
    "필터",
    follower.follower.filter((e) => e !== currentUserInfo.uid)
  );
  console.log("노필터", follower.follower);
  return (
    <li className={styles.follow_user_lest}>
      <div className={styles.follow_user}>
        <div className={styles.follow_user_profile}>
          <img
            src={followUserImg}
            alt="preview-img"
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.follow_user_data_box}>
          <p className={styles.follow_user_data}>{follower.name}</p>
          <p className={styles.follow_user_data}>{follower.introduction}</p>
        </div>
      </div>
      <div className={styles.title_box}>
        {user.uid === currentUserInfo.uid &&
          !currentUserInfo.following.includes(follower?.uid) && (
            <button className={styles.follow_btn} onClick={Follow}>
              팔로우
            </button>
          )}
        {user.uid === currentUserInfo.uid &&
          currentUserInfo.following.includes(follower?.uid) && (
            <button className={styles.unfollow_btn} onClick={Follow}>
              팔로우 취소
            </button>
          )}

        {user.uid !== currentUserInfo.uid &&
          !currentUserInfo.following?.includes(follower.uid) && (
            <button className={styles.follow_btn} onClick={Follow}>
              팔로우
            </button>
          )}
        {user.uid !== currentUserInfo.uid &&
          currentUserInfo.following?.includes(follower.uid) && (
            <button className={styles.unfollow_btn} onClick={Follow}>
              팔로우 취소
            </button>
          )}

        <h3 className={styles.title}>travel</h3>
      </div>
    </li>
  );
};

export default FollowerUser;
