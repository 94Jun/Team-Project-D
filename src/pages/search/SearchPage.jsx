import { useLocation } from "react-router-dom";
import SearchResult from "../../components/search/SearchResult";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useMemo } from "react";
import { ADD_RECENT_SEARCH } from "../../modules/user";
const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchContent = location.state;
  console.log(searchContent);
  useEffect(() => {
    dispatch(ADD_RECENT_SEARCH({ searchContent }));
  }, [searchContent]);

  return (
    <div>
      <SearchResult searchContent={searchContent} />
    </div>
  );
};

export default SearchPage;
