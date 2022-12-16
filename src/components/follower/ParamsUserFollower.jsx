import styles from "./Follower.module.css";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { updatePushData } from "../../common";

const ParamsUserFollower = ({ user }) => {
  const [followUserImg, setFollowUserImg] = useState();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);

  const getProfiles = async () => {
    const profileRef = ref(storage, `images/${user.profile}`);
    const url = await getDownloadURL(profileRef);
    setFollowUserImg(url);
  };

  useEffect(() => {
    getProfiles();
  }, [followUserImg]);
  //다른 유저 follower 목록쪽 Follow 함수
  const follow = async () => {
    await updatePushData(
      "userList",
      currentUserInfo.uid,
      "following",
      user.uid,
      !currentUserInfo.following.includes(user.uid)
    );
    await updatePushData(
      "userList",
      user.uid,
      "follower",
      currentUserInfo.uid,
      !user.follower.includes(currentUserInfo.uid)
    );
    try {
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
          <p className={styles.follow_user_data}>{user.name}</p>
          <p className={styles.follow_user_data}>{user.introduction}</p>
        </div>
      </div>
      <div className={styles.title_box}>
        {/*본인이 팔로우 목록에 있으면 팔로운 언팔로우 버튼 안보이게*/}

        {user.uid !== currentUserInfo.uid &&
          !currentUserInfo.following?.includes(user.uid) && (
            <button className={styles.follow_btn} onClick={follow}>
              팔로우
            </button>
          )}
        {user.uid !== currentUserInfo.uid &&
          currentUserInfo.following?.includes(user.uid) && (
            <button className={styles.unfollow_btn} onClick={follow}>
              팔로우 취소
            </button>
          )}
        <h3 className={styles.title}>travel</h3>
      </div>
    </li>
  );
};

export default ParamsUserFollower;
