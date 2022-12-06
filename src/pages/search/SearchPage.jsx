import { useLocation } from "react-router-dom";
import SearchResult from "../../components/search/SearchResult";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useMemo } from "react";
import { ADD_RECENT_SEARCH } from "../../modules/user";
const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchContent = location.state;

  // const [data, setDate] = useState();
  // const location = useLocation();
  // console.log(location);
  // console.log(window.history)
  // useEffect(()=>{
  //     window.history.replaceState({usr: ""},"","http://localhost:3001/test/data")
  //     setDate(location.state)
  // })

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
