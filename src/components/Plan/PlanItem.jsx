import styles from "./PlanItem.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux';

const PlanItem = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.login.currentUser);
    const [planList,setPlanList]= useState([]);

    useEffect(()=>{
        async function  getplanList ()  {
        const q = query(collection(db, "planList"));
        // where("uid", "==", currentUser));
        const querySnapshot = await getDocs(q);
        const rweetArray = [];
        querySnapshot.forEach((doc) => {
            const dataName = doc.data();
            rweetArray.push(dataName);
        }); 
        setPlanList(rweetArray);  } 
        getplanList ();
    } ,100);



    const gotoplan = ()=> {
        navigate('/plan:plans.Id');
    }




    return ( 
        <div className={styles.listbox}>
         

{planList.length ==0 ? 
<p> 계획이 없습니다. </p>
:
<div className='docbox'>
  {
  planList.map((plans)=>(
    <div className="reviewbtn" id={plans} key={plans}>
    <button className="stylechanges">
    <p> { plans.title }</p>   
    <p> { plans.startDate }</p>   
    <p> { plans.endsDate }</p>
    <p> { plans.period }</p>
    </button>
    </div>
    ))
  }   </div>
}


        </div>
     );
}
 
export default PlanItem;