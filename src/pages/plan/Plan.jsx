const Plan = () => {

    // plan data를 만들어 Params 사용해 연결 
    // const planNumber = ({ match }) => {
    //     const { planid } = match.params;
    //     const planNum = plandata[planid];
    //     if (!planNum) {
    //       return <div>존재하지 않는 플랜입니다..</div>;
    //     } };

    return ( 
        <div>
            <h1> planid 받아오기 </h1>
            <h1> 2023.01.03-01.05</h1>
            <p> 0박 0일 </p>
            <hr />
            <div> 지도사진 or 장소사진 </div>

            <p>Day 1 </p>
            <li>place 이름1 </li>
            <li>place 이름1 </li>
            <li>place 이름1 </li>
            <li>place 이름1 </li>
            
            <p>Day 2 </p>
            <li>place 이름1 </li>
            <li>place 이름1 </li>
            <li>place 이름1 </li>
            <li>place 이름1 </li>

            <p>Day 3 </p>
            <li>place 이름1 </li>
            <li>place 이름1 </li>
            <li>place 이름1 </li>
            <li>place 이름1 </li>


        </div>
     );
}
 
export default Plan;