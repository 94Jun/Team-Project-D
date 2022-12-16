import styles from "./Follow.module.css";
import { getqueryData, getSingleData } from "../../common";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FollowUser from "./FollowUser";
import ParamsUser from "./ParamsUser";
import { useParams } from "react-router-dom";
const Follow = () => {
  const [follwUser, setFollwUserUser] = useState();
  const [user, setUser] = useState();
  const [follwUserData, setFollwUserData] = useState();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const params = useParams();
  useEffect(() => {
    getqueryData(
      "userList",
      "uid",
      "in",
      currentUserInfo?.following,
      setFollwUserUser
    );
    getSingleData("userList", params.uid, setFollwUserData);
  }, []);

  useEffect(() => {
    getqueryData("userList", "uid", "in", follwUserData?.following, setUser);
  }, [follwUserData]);

  return (
    <div className={styles.follw_wraps}>
      <div className={styles.follw_wrap}>
        <ul className={styles.follw_list}>
          {follwUser &&
            params.uid === currentUserInfo.uid &&
            follwUser.map((follow) => (
              <FollowUser follow={follow} key={follow.uid} />
            ))}
          {user &&
            params.uid !== currentUserInfo.uid &&
            user.map((user) => <ParamsUser user={user} key={user.uid} />)}
        </ul>
      </div>
    </div>
  );
};

export default Follow;
