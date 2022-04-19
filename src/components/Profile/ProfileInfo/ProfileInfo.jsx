import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
if(!props.profile) {
  return <Preloader />
}

  return (
    <div>
      <div className={s.imageBack}>
        <img
          src="https://www.anypics.ru/download.php?file=201210/1440x900/anypics.ru-564.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className={s.description}>
        <div><img src={props.profile.photos.large} alt="" srcset="" /></div>
        <p>{props.profile.contacts.twitter}</p> 
        ava+description
        </div>
    </div>
  );
};

export default ProfileInfo;
