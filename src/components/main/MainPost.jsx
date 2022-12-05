import PostItem from "../PostItem/PostItem";
import styles from "./MainPost.module.css";
import { useSelector } from "react-redux";
const MainPost = () => {
  const postingList = useSelector((state) => {
    return state.posting.postingList;
  });
  return (
    <div>
      {postingList.map((posting) => {
        return <PostItem key={posting.pid} posting={posting} />;
      })}
    </div>
  );
};

export default MainPost;
