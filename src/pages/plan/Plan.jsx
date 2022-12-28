import PlanPlace from "../../components/Plan/PlanPlace";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addData, getId, getNowDate, getNowValue, getSingleData, updatePushData } from "../../common";
import { useSelector } from "react-redux";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import PlaceMap from "../../components/Plan/PlaceMap";
import { Badge } from "@mui/material";
import RequestAccompany from "../../components/Plan/RequestAccompany";
const Plan = () => {
  const [plan, setPlan] = useState();
  const [coordinates, setCoordinates] = useState();
  const [requestIsShonw, setRequestIsShown] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const planId = params.planId;
  const currentUserInfo = useSelector((state) => state.user.currentUserInfo);
  const length = plan?.period === "당일" ? 1 : Number(plan?.period.slice(-2, -1));
  useEffect(() => {
    getSingleData("planList", planId, setPlan);
  }, [planId]);
  useEffect(() => {
    if (plan && !coordinates) setCoordinates(plan?.plan[0].position);
  }, [plan]);
  const deletePosting = async () => {
    const q = query(collection(db, "postingList"), where("planId", "==", planId));
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.docs.map((doc) => {
      data.push(doc.data());
    });
    data.map(async (data) => { 
      await deleteDoc(doc(db, "postingList", data.pid))
    })
  };
  const removePlanHandler = async () => {
    await deleteDoc(doc(db, "planList", planId));
    deletePosting();
    navigate("/myplans");
  };
  const changeCenterHandler = (position) => {
    setCoordinates(position);
  };
  const dateContent = plan?.period === "당일" ? plan?.startDate : `${plan?.startDate} ~ ${plan?.endsDate}`;
  const sharePlanHandler = () => {
    const text = `${currentUserInfo.name}님의 여행 계획 : ${plan.title}\n여행 기간 : ${dateContent}(${plan.period})`;
    const addedPosting = {
      pid: getId(),
      writer: currentUserInfo.uid,
      timestamp: getNowValue(),
      writeDate: getNowDate(),
      isPublic: true,
      isPlan: true,
      planId,
      images: [],
      comments: [],
      hashtags: ["여행계획"],
      like: [],
      text,
    };
    try {
      addData("postingList", addedPosting.pid, addedPosting);
      alert("여행계획을 공유했습니다.");
    } catch (e) {
      alert("업로드 실패");
    }
  };
  const requestAccompanyHandler = () => {
    try {
      updatePushData("planList", planId, "request", currentUserInfo.uid, true);
      console.log(currentUserInfo.uid);
      alert("동행요청 완료");
    } catch (e) {
      alert("동행요청 실패");
    }
  };
  const toggleRequestHandler = () => {
    setRequestIsShown((prev) => !prev);
  };
  const btn =
    currentUserInfo.uid === plan?.uid ? (
      <div style={{ display: "flex" }}>
        <button onClick={sharePlanHandler}>공유</button>
        <button onClick={removePlanHandler}>삭제</button>
        {plan?.request && plan.request.length !== 0 && (
          <div style={{ position: "relative" }}>
            <Badge badgeContent={plan.request.length} color="primary">
              <button onClick={toggleRequestHandler}>동행요청 확인</button>
            </Badge>
            {requestIsShonw && <RequestAccompany request={plan.request} planId={planId} onToggleRequest={toggleRequestHandler} />}
          </div>
        )}
      </div>
    ) : (
      <div>
        <button onClick={requestAccompanyHandler}>동행 요청</button>
      </div>
    );
  return (
    <div>
      <h2>{plan?.title}</h2>
      {btn}
      <h3>{dateContent}</h3>
      <p> {plan?.period}</p>
      <p>참여인원 : {plan?.companion?.length}명</p>
      <hr />
      {coordinates && <PlaceMap plan={plan} coordinates={coordinates} />}
      {length &&
        Array(length)
          .fill()
          .map((el, idx) => {
            const filteredPlan = plan.plan.filter((plan) => plan.whatDate === idx + 1);
            return <PlanPlace key={idx} date={idx + 1} plan={filteredPlan} onChangeCenter={changeCenterHandler} />;
          })}
    </div>
  );
};

export default Plan;
