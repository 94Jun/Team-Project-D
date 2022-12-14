import styles from "./TopHeader.module.css";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import { Link } from "react-router-dom";
import SearchInput from "../modal/SearchInput";
//모바일 환경에서의 헤더 + 검색 기능
const TopHeader = () => {
  return (
    <header className={styles.container}>
      <Link to="/">
        <div className={styles.title}>
          <Diversity2OutlinedIcon />
          <h1>travel</h1>
        </div>
      </Link>
      <div className={styles.search_wrap}>
        <SearchInput />
      </div>
    </header>
  );
};

export default TopHeader;
