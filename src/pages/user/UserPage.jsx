import MyPage from "./MyPage";
import styles from "./UserPage.css";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <div className={styles.user}>
      <div className="title">
        <Profile/>
        <div>
          <div className="name">
            <p>닉네임</p>
            <Link to='/ProfileEdit'><button>프로필 편집</button></Link>
          </div>
          <div className="user_title">
            <ul>
            <ul className="comment">게시물</ul>
            <ul className="comment">팔로워</ul>
            <ul className="comment">팔로우</ul>
            </ul>
          </div>
          <ul className="comment">Hellow World!</ul>
          </div>
      </div>
      <hr/>
      <div className="picture">
        <ul>게시물 </ul>
        <ul>저장됨 </ul>
        <ul>태그됨 </ul>
      </div>
      <div className="pages">
        <MyPage/>
        <MyPage/>
        <MyPage/>
      </div>
    </div>
  );
}

export default UserPage;