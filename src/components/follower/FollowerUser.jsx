import styles from "./Follower.module.css";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { updatePushData } from "../../common";

const FollowerUser = ({ follow, followerUserData }) => {
  const [followUserImg, setFollowUserImg] = useState();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const [findTest, setFindTset] = useState();
  const getProfiles = async () => {
    const profileRef = ref(storage, `images/${follow.profile}`);
    const url = await getDownloadURL(profileRef);
    setFollowUserImg(url);
  };

  const isName = (uid) => {
    if (uid.uid === follow.uid) {
      return true;
    }
  };
  const uid = followerUserData.find(isName);
  useEffect(() => {
    getProfiles();
  }, [followUserImg]);
  console.log("13", uid.name);

  //내follower 목록쪽 Follow 함수
  const Follow = async () => {
    try {
      await updatePushData(
        "userList",
        currentUserInfo.uid,
        "following",
        uid?.uid,
        !currentUserInfo.following.includes(uid?.uid)
      );
      await updatePushData(
        "userList",
        uid?.uid,
        "follower",
        currentUserInfo.uid,
        !uid.follower?.includes(currentUserInfo.uid)
      );

      window.location.reload("/user");
    } catch (e) {}
  };

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
          <p className={styles.follow_user_data}>{follow.name}</p>
          <p className={styles.follow_user_data}>{follow.introduction}</p>
        </div>
      </div>
      <div className={styles.title_box}>
        {!currentUserInfo.following.includes(uid?.uid) && (
          <button className={styles.follow_btn} onClick={Follow}>
            팔로우
          </button>
        )}
        {currentUserInfo.following.includes(uid?.uid) && (
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
