import React from "react";
import s from './Posts.module.css';

const Posts = (props) => {
  return (
        
          <div className={s.posts}>
            <div className={s.item}>
              <img src="https://img2.freepng.ru/20180412/yoe/kisspng-email-address-computer-icons-user-google-account-envelope-5acf597f2f4395.8667149415235383031936.jpg" alt="" srcset="" />
              {props.message}
              <div><span>{props.like} likes</span></div>
            </div>
          </div>
           
  );
};

export default Posts;
