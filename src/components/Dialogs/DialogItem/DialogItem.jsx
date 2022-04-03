import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  console.log(props.src)
  return (
    
    <div className={styles.wrapper}>
      <div className={styles.wrapper__img}>
        <img src={props.src} alt="avatar" srcset="" />
      </div>
      <div>
        <NavLink
          to={path}
          className={(navData) => (navData.isActive ? s.active : s.dialogItem)}
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
