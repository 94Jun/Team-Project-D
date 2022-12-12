import styles from "./PlanItem.module.css";

const PlanItem = () => {
    const min =0;
    const max= 100;
    const postingid = Math.floor(Math.random() * (max-min)) + min;
    const planpsts = [
    {
            id :  1,
            title: "나의 첫번째 여행",
            datestart : "2022.03.02",
            dateends : "2022.03.04",
            place : "서울",
            postingid : postingid
    },
    {
        id :  2,
        title: "나의 두번째",
        datestart : "2022.03.02",
        dateends : "2022.03.04",
        place : "서울",
        postingid : postingid+1
},
]

const result = planpsts.map((planpsts,index) => 
<button> <div className={styles.myplanboxs} key={index}>

<p>{planpsts.title}</p>
<p>여행시작 : {planpsts.datestart}</p>
<p>여행끝 : {planpsts.dateends}</p>

</div>  </button> );



    return ( 
        <div className={styles.listbox}>
         {result} 
        </div>
     );
}
 
export default PlanItem;