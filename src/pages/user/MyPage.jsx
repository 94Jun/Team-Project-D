import PostItem from "../../components/PostItem/PostItem";
import profileimg from "./img/nprofile.png";

const MyPage = () =>{
const postingList = [
  {
    user: {
      userProfile: {profileimg},
    },
    contents: {
      text: ""},
  }];
  return (
    <div>
      {postingList.map((posting) => {
        return <PostItem  posting={posting} />;
      })}
    </div>
  );
};
export default MyPage;