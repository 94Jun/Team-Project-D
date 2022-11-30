import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PostingModal from "../modal/PostingModal";
//css 틀어져서 리듀서쓰기전에 잠시 test용
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useState } from "react";
const Nav = () => {
  //css 틀어져서 리듀서쓰기전에 잠시 test / props전달
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  //네브바에 들어가는 리스트 모음
  return (
    <nav className={styles.container}>
      <ul className={styles.nav}>
        <li className={styles.item}>
          <Link to="/user">
            <AccountCircleIcon fontSize="string" />
            <span>User_Name</span>
          </Link>
        </li>
        {/* 클릭 시 유저 페이지로 이동
        아이콘 => 유저 프로필로 변경 필요
        User_Name => 사용자가 입력한 닉네임으로 변경 필요 */}

        <li className={styles.item}>
          <Link to="/">
            <HomeIcon fontSize="string" />
            <span>홈</span>
          </Link>
        </li>
        {/* 클릭 시 홈 페이지로 이동 */}

        <li className={`${styles.item} ${styles.search}`}>
          <Link to="/search">
            <SearchIcon fontSize="string" />
            <span>검색</span>
          </Link>
        </li>
        {/* 클릭 시 검색 결과 페이지로 이동 => 클릭 시 검색 모달 오픈으로 변경 필요 */}

        <li className={styles.item}>
          <div>
            <PostingModal open={open} setOpen={setOpen} />
            {/*props전달*/}
            <AddBoxOutlinedIcon fontSize="string" onClick={handleOpen} />
            <span onClick={handleOpen}>글 작성</span>
          </div>
        </li>
        {/* 클릭 시 게시글 작성 페이지로 이동 */}

        <li className={`${styles.item} ${styles.set}`}>
          <Link to="/">
            <SettingsOutlinedIcon fontSize="string" />
            <span>환경 설정</span>
          </Link>
        </li>
        {/* 클릭 시 환경 설정 페이지로 이동
          환경 설정 페이지 추가 필요 */}
        {/* 환경 설정을 기준으로 상단에 마진 적용 중 */}
        {/* 추가할 네비 목록이 많아지면 토글을 사용해 목록 on/off 기능 추가 */}

        <li className={styles.item}>
          <Link to="/">
            <LogoutOutlinedIcon fontSize="string" />
            <span>로그 아웃</span>
          </Link>
        </li>
        {/* 클릭 시 로그아웃 구현 필요 */}
      </ul>
    </nav>
  );
};

export default Nav;
