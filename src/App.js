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
import MyPlan from "./pages/plan/MyPlan";
import MakePlan from "./pages/plan/MakePlan";

import ProfileEdit from "./pages/user/ProfileEdit";
import { useSelector } from "react-redux";
import SearchModal from "./components/modal/SearchModal";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "./modules/login";
import FindPassword from "./components/modal/FindPassword";
import Plans from "./pages/plan/Plans";


import { db } from "./config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { GET_CURRENT_USER_INFO } from "./modules/user";

const App = () => {
  const dispatch = useDispatch();
  const isSearchModalShown = useSelector(
    (state) => state.modal.isSearchModalShown
  );
  const isLogincheck = useSelector((state) => state.login.isLoggedIn);
  const currentUser = useSelector((state) => state.login.currentUser);

  //현재 유저 정보 저장(state.user.currentUserInfo)
  const getCurrentUserInfo = async () => {
    const docRef = doc(db, "userList", currentUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch(GET_CURRENT_USER_INFO(docSnap.data()));
    }
  };

  //렌더링 시 마다 로컬스토리지에 있는 currentUser를 통해 로그인 여부 판단
  useEffect(() => {
    if (currentUser !== "비회원") {
      dispatch(LOGIN(currentUser));
      getCurrentUserInfo();
    }
  }, [currentUser, dispatch]);
  console.log("");
  return (
    <div className="App">
      {!isLogincheck ? (
        <Routes>

         <Route path="/login" element={<LoginPage />} render={() => (!isLogincheck ? <HomePage /> : <LoginPage />)} > </Route>
         <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/Myplan" element={<MyPlan />}> </Route>
               <Route path="/plans" element={<Plans />}></Route> 
          <Route path="/makeplan" element={<MakePlan />}></Route>

          <Route path="/findPassword" element={<FindPassword />} />

        </Routes>
      ) : (
        <>
          {/* 모바일 환경에서 보여지는 헤더 */}
          <TopHeader />

          <Flex>
            {/* 테블릿 및 pc에서 보여지는 헤더 및 네브 바 */}
            <NavBar />

            {/*검색 모달 on/off*/}
            {isSearchModalShown && <SearchModal />}

            {/* 네브 바를 통해 해당 페이지로 이동 가능 */}
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/user" element={<UserPage />}></Route>
              <Route path="/search" element={<SearchPage />}></Route>
            </Routes>

            {/* 마이페이지에서 프로필편집 페이지로 이동*/}
            <Routes>
              <Route path="/ProfileEdit" element={<ProfileEdit />}></Route>
            </Routes>
          </Flex>
        </>
      )}
    </div>
  );
};

export default App;
