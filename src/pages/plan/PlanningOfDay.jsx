const PlanningOfDay = (props) => {
  return (
    <div>
      <h3>{props.date}일차</h3>
      <p>여행을 어디로 떠나나요?</p>
      <input type="text" />
      <button>입력</button>
    </div>
  );
};

export default PlanningOfDay;
