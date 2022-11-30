import styles from "./NavBar.module.css";
import SideHeader from "../Header/SideHeader";
import Nav from "./Nav";

const NavBar = (props) => {
  // 헤더 및 네브 바
  
  return (
    <>
      <div className={styles.side_container}>
        <SideHeader header={styles.header} icon={styles.header_icon} />
        <Nav showSearch={props.showSearch}/>
      </div>
      {/* 태블릿 및 pc환경에서 렌더되는 헤더 및 네브 바(좌측) */}

      <div className={styles.bottom_container}>
        <Nav />
      </div>
      {/* 모바일 환경에서 렌더되는 네브 바(하단) */}
    </>
  );
};

export default NavBar;
