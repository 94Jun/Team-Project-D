import styles from "./Follow.module.css";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { updatePushData } from "../../common";

const FollowUser = ({ follow, followDisplay }) => {
  const [imgTest, setImgTest] = useState();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);

  const getProfiles = async () => {
    const profileRef = ref(storage, `images/${follow.profile}`);
    const url = await getDownloadURL(profileRef);
    setImgTest(url);
  };

  useEffect(() => {
    getProfiles();
  }, [imgTest]);

  //unfollow 함수
  const unfollow = async () => {
    await updatePushData(
      "userList",
      currentUserInfo.uid,
      "following",
      follow.uid,
      false
    );
    await updatePushData(
      "userList",
      follow.uid,
      "follower",
      currentUserInfo.uid,
      false
    );
    try {
      window.location.reload("/user");
    } catch (e) {}
  };

  return (
    <li className={styles.follow_user_lest}>
      <div className={styles.follow_user}>
        <div className={styles.follow_user_profile}>
          <img src={imgTest} alt="preview-img" width="100%" height="100%" />
        </div>
        <div className={styles.follow_user_data_box}>
          <p className={styles.follow_user_data}>{follow.name}</p>
          <p className={styles.follow_user_data}>{follow.introduction}</p>
        </div>
      </div>
      <div className={styles.title_box}>
        <button className={styles.unfollow_btn} onClick={unfollow}>
          팔로우 취소
        </button>
        <h3 className={styles.title}>travel</h3>
      </div>
    </li>
  );
};

export default FollowUser;
