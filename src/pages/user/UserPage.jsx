import MyPage from "./MyPage";
import styles from "./UserPage.css";
import Profile from "./Profile";

const UserPage = () => {
  return (
    <div className={styles.user}>
      <div className="title">
        <Profile/>
        <div>
          <div className="name">
            <p>닉네임</p>
            <button>프로필 편집</button>
          </div>
          <div className="title1">
            <ul>
            <ul className="comment">게시물</ul>
            <ul className="comment">팔로워</ul>
            <ul className="comment">팔로우</ul>
            </ul>
          </div>
          <ul className="comment1">Hellow World!</ul>
          </div>
      </div>
      <hr/>
      <div className="title2">
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