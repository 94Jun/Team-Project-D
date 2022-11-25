import styles from "./TopHeader.module.css";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import { Link } from "react-router-dom";
const TopHeader = () => {
  //모바일 환경에서의 헤더 + 검색 기능
  return (
    <header className={styles.container}>
      <Link to="/">
        <div className={styles.title}>
          <Diversity2OutlinedIcon />
          <h1>travel</h1>
        </div>
      </Link>
      {/* 헤더 */}

      <input type="text" className={styles.search_input} />
      {/* 검색 기능 추가 필요 */}
    </header>
  );
};

export default TopHeader;
