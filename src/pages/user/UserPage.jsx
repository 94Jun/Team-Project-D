import MyPage from "./MyPage";
import normal from "./img/nprofile.png";

const UserPage = () => {
  return (
    <div className="user">
      <div className="title">
        <img className="img1" src={normal} style={{width:80}}/>
        <div className="title1">
        <h3>닉네임</h3>
        <ul>게시물 팔로워 팔로우</ul>
        <ul>name</ul>
        </div>
      </div>
      <hr/>
      <div className="title2">
      <ul className="title3">게시물 </ul>
      <ul className="title3">저장됨 </ul>
      <ul className="title3">태그됨 </ul>
      </div>
    <div>
      <MyPage/>
      <MyPage/>
      <MyPage/>
    </div>
    </div>
    );
}

export default UserPage;