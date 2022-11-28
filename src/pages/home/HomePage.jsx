import MainAside from "../../components/main/MainAside";
import MainPost from "../../components/main/MainPost";
import Flex from "../../components/UI/Flex";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <Flex>
      <MainPost />
      <MainAside />
    </Flex>
  );
};

export default HomePage;
