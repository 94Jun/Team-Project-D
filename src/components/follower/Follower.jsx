import styles from "./Follower.module.css";
import { getqueryData, getSingleData } from "../../common";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FollowerUser from "./FollowerUser";
import ParamsUserFollower from "./ParamsUserFollower";
import { useParams } from "react-router-dom";
const Follower = ({ followerDisplay }) => {
  const [followerUser, setFollowerUserUser] = useState();
  const [user, setUser] = useState();
  const [followerUserData, setFollowerUserData] = useState();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const params = useParams();

  useEffect(() => {
    getqueryData(
      "userList",
      "uid",
      "in",
      currentUserInfo?.follower,
      setFollowerUserUser
    );
    //console.log("정보", followerUser);
  }, [followerDisplay]);

  useEffect(() => {
    getSingleData("userList", params.uid, setFollowerUserData);
  }, [followerDisplay]);

  useEffect(() => {
    getqueryData("userList", "uid", "in", followerUserData?.follower, setUser);
  }, [followerUserData]);

  return (
    <div className={styles.follw_wraps}>
      <div className={styles.follw_wrap}>
        <ul className={styles.follw_list}>
          {followerUser &&
            user &&
            params.uid === currentUserInfo.uid &&
            followerUser.map((follower) =>
                <FollowerUser
                  follow={follower}
                  key={follower.uid}
                  user={user}
                />
            )}
          {user &&
            params.uid !== currentUserInfo.uid &&
            user.map((user) => (
              <ParamsUserFollower user={user} key={user.uid} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Follower;
