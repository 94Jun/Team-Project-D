import { useEffect } from "react";
import { useState } from "react";
import { getqueryData } from "../../common";
import Companion from "./Companion";
import styles from './RequestAccompany.module.css'

const RequestAccompany = (props) => {
  const [companion, setCompanion] = useState()
  useEffect(() => {
    getqueryData("userList", "uid", "in", props.request, setCompanion)
  }, [props.request])
  
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {companion &&
          companion.map((user) => {
            return <Companion key={user.uid} user={user} planId={props.planId} onToggleRequest={props.onToggleRequest} />;
          })}
      </ul>
    </div>
  );
};

export default RequestAccompany;
