import styles from "./Follower.module.css";
import { getqueryData, getSingleData } from "../../common";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FollowerUser from "./FollowerUser";
import ParamsUserFollower from "./ParamsUserFollower";
import { useParams } from "react-router-dom";
const Follower = ({ user }) => {
  const [followerUser, setFollowerUserUser] = useState();
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
    ); //로그인한 유저 follower에 들어있는 아이디와 같은 uid를 가진 유저의 정보를 들고온다
  }, []); //현재 페이지 유저 정보를 들고온다

  useEffect(() => {
    getqueryData("userList", "uid", "in", user?.follower, setFollowerUserData);
  }, [user]);
  console.log("123", followerUserData);
  /*현재 페이지 유저 정보 follower에 들어있는 아이디와 유저
   리스트에 유아이디와 같은 데이터를 들고온다*/

  return (
    <div className={styles.follw_wraps}>
      <div className={styles.follw_wrap}>
        <ul className={styles.follw_list}>
          {followerUser &&
            followerUserData &&
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
            followerUserData.map((user) => (
              <ParamsUserFollower user={user} key={user.uid} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Follower;
