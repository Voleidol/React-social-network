import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.imageBack}>
        <img
          src="https://www.anypics.ru/download.php?file=201210/1440x900/anypics.ru-564.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className={s.description}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
