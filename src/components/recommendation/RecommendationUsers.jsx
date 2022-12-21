import RecommendationUser from "./RecommendationUser";
import styles from "./RecommendationUsers.module.css";
import { useState } from "react";
const RecommendationUsers = () => {
  const [userList, setUserList] = useState(null);
  const content = userList && userList.length !== 0 ? userList.map((user) => { 
    return <RecommendationUser key={user.uid} />
  }) : <div className={styles.container}> 추천 유저가 없습니다.</div>
  return (
    <div>
      <h2 className={styles.title}>추천 유저 목록</h2>
      {content}
    </div>
  );
};

export default RecommendationUsers;
