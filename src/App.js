import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Flex from "./components/UI/Flex";
import TopHeader from "./components/Header/TopHeader";
import LoginPage from "./pages/login/LoginPage";
import UserPage from "./pages/user/UserPage";
import SearchPage from "./pages/search/SearchPage";
import Register from "./pages/login/Register";

import ProfileEdit from "./pages/user/ProfileEdit";

import { useSelector } from "react-redux";
import SearchModal from "./components/modal/SearchModal";

const App = () => {
  const isSearchModalShown = useSelector(
    (state) => state.modal.isSearchModalShown
  );

  const isLogincheck = useSelector(
    (state) => state.login.isLoggedIn
  );

  return (
    <div className="App">
         { !isLogincheck && <LoginPage/> } 
         { !isLogincheck && <Register /> }
      <TopHeader />
      {/* 모바일 환경에서 보여지는 헤더 */}
      <Flex>
        <NavBar />
        {/* 테블릿 및 pc에서 보여지는 헤더 및 네브 바 */}
        {isSearchModalShown && <SearchModal />}

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
        {/* 네브 바를 통해 해당 페이지로 이동 가능 */}
        <Routes>
          <Route path="/ProfileEdit" element={<ProfileEdit />}></Route>
        </Routes>
        {/* 마이페이지에서 프로필편집 페이지로 이동*/}
      </Flex>
    </div>
  );
};

export default App;