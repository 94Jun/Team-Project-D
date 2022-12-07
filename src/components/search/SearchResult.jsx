import { useSelector } from "react-redux";
import PostItem from "../PostItem/PostItem";
const SearchResult = () => {
  const postingList = useSelector((state) => {
    return state.posting.postingList;
  });
  const currentSearch = useSelector((state) => state.search.currentSearch);
  const filteredPostingList = postingList.filter((posting) => {
    return posting.contents.hashtags.includes(currentSearch);
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
