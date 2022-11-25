import "./App.css";
import Example from "./components/example/Example";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Flex from "./components/UI/Flex";
import TopHeader from "./components/Header/TopHeader";
import LoginPage from "./pages/login/LoginPage";
import PostingPage from "./pages/posting/PostingPage";
import UserPage from "./pages/user/UserPage";
import SearchPage from "./pages/search/SearchPage";

const App = () => {
  return (
    <div className="App">
      <TopHeader />
      {/* 모바일 환경에서 보여지는 헤더 */}

      <Flex>
        <NavBar />
        {/* 테블릿 및 pc에서 보여지는 헤더 및 네브 바 */}

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/posting" element={<PostingPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
        {/* 네브 바를 통해 해당 페이지로 이동 가능 */}
      </Flex>
    </div>
  );
};

export default App;
