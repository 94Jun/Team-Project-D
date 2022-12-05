import { useSelector } from "react-redux";
import PostItem from "../PostItem/PostItem";
const SearchResult = ({ searchContent }) => {
  const postingList = useSelector((state) => {
    return state.posting.postingList;
  });
  const filteredPostingList = postingList.filter((posting) => {
    return posting.contents.hashtags.includes(searchContent);
  });
  return (
    <div>
      {filteredPostingList.map((posting) => {
        return <PostItem key={posting.pid} posting={posting} />;
      })}
    </div>
  );
};

export default SearchResult;
