import Map from "./Map";
import styles from "./Page.module.css"

const PlanpageDesign = () => {
    return ( 
        <div>
            <h2> 000 여행 여행 / 타이틀 </h2>
            <p> 2023.01.03 - 02.03 <button>편집</button> <span> 0박0일</span></p> 
            <div>
            <div className={styles.round}></div>
            <div className={styles.round}></div>
            <div className={styles.round}></div>
            <button>일행 추가</button> </div> 

            <div> <Map /></div>

            <p>Day1 - 2023.01.01 </p> <button>편집</button>
            <hr />
            <p>Day2 - 2023.01.02 </p> <button>편집</button>
            <hr />
            <p>Day3 - 2023.01.03 </p> <button>편집</button>
            <hr />



        </div>
     );
}
 
export default PlanpageDesign;