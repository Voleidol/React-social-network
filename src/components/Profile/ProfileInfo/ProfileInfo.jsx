import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
if(!props.profile) {
  return <Preloader />
}
  console.log(props.profile)
  return (
    <div>
      {/* <div className={s.imageBack}>
        <img
          src="https://www.anypics.ru/download.php?file=201210/1440x900/anypics.ru-564.jpg"
          alt=""
          srcset=""
        />
      </div> */}
      <div className={s.description}>
        <div><img src={props.profile.photos.large} alt="" srcset="" /></div>
        <p>{props.profile.contacts.twitter}</p> 
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
  );
};

export default ProfileInfo;
