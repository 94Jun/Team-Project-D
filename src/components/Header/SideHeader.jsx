import styles from "./SideHeader.module.css";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import { Link } from "react-router-dom";
const SideHeader = (props) => {
  //테블릿 및 pc환경에서의 헤더
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={`${styles.title} ${props.header}`}>travel</h1>
        <div className={props.icon}>
          <Diversity2OutlinedIcon fontSize="large" />
        </div>
      </Link>
    </header>
  );
};

export default SideHeader;
