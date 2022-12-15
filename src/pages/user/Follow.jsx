import styles from "./Follow.module.css";
import { getqueryData } from "../../common";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FollowUser from "./FollowUser";

const Follow = ({ followDisplay }) => {
  const [user, setUser] = useState();
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);

  useEffect(() => {
    getqueryData("userList", "uid", "in", currentUserInfo?.following, setUser);
  }, [user]);

  return (
    <div className={styles.follw_wraps}>
      <div className={styles.follw_wrap}>
        <ul className={styles.follw_list}>
          {user &&
            user.map((follow) => (
              <FollowUser
                follow={follow}
                followDisplay={followDisplay}
                key={follow.uid}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Follow;
