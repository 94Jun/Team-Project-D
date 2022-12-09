import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route , Navigate } from "react-router-dom";
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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "./modules/login";
import FindPassword from "./components/modal/FindPassword";

const App = () => {
  const dispatch = useDispatch();
  const isSearchModalShown = useSelector(
    (state) => state.modal.isSearchModalShown
  );
  const isLogincheck = useSelector(
    (state) => state.login.isLoggedIn
  );
  const currentUser = useSelector(state=>state.login.currentUser)

  
  useEffect(()=>{
    if(currentUser !== "비회원")
    dispatch(LOGIN(currentUser))
  }, [])
  console.log(isLogincheck)
  return (
    <div className="App">
      {!isLogincheck ?
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      :   <>
      <TopHeader />
      {/* 모바일 환경에서 보여지는 헤더 */}
      <Flex>
        <NavBar />
        {/* 테블릿 및 pc에서 보여지는 헤더 및 네브 바 */}
        {isSearchModalShown && <SearchModal />}
   
        <Routes>
         <Route path="/login" element={<LoginPage />} render={() => (!isLogincheck ? <HomePage /> : <LoginPage />)} > </Route>
         <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/findPassword" element={<FindPassword />} />
        </Routes>
        {/* 네브 바를 통해 해당 페이지로 이동 가능 */}
        <Routes>
          <Route path="/ProfileEdit" element={<ProfileEdit />}></Route>
        </Routes>
        {/* 마이페이지에서 프로필편집 페이지로 이동*/}
      </Flex>
      </>}
    </div>
  );
};

export default App;