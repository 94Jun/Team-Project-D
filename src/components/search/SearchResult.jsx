import { useSelector } from "react-redux";
import PostItem from "../PostItem/PostItem";
const SearchResult = () => {
  const currentSearch = useSelector((state) => state.search.currentSearch);
  console.log(currentSearch)
  return (
    <div>
      {/* {filteredPostingList.map((posting) => {
        return <PostItem key={posting.pid} posting={posting} />;
      })} */}
    </div>
  );
};

export default SearchResult;
