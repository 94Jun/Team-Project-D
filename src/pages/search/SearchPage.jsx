import { useLocation } from "react-router-dom";
import SearchResult from "../../components/search/SearchResult";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ADD_RECENT_SEARCH } from "../../modules/user";
const SearchPage = () => {
  return (
    <div>
      <SearchResult />
    </div>
  );
};

export default SearchPage;
