import React from "react";
import styles from './Users.module.css'
import usersPhoto from '../../assets/images/users.jpg'
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i = 1; i < pagesCount; i++) {
      pages.push(i)
    }

  return (
    <div>
      {
        <div>
          <div>
            {pages.map((p) => {
              // className={this.props.currentPage === p ? s.selectedPage : ""} - исключает ошибку с классом
              return (
                <span
                  className={props.currentPage === p && styles.selectedPage}
                  onClick={(e) => {
                    props.onPageChanged(p);
                  }}
                >
                  {p}
                </span>
              );
            })}
          </div>
          {props.users.map((u) => (
            <div key={u.id}>
              <span>
                <div>
                  <NavLink to={"/profile/" + u.id}>
                    <img
                      src={u.photos.small != null ? u.photos.small : usersPhoto}
                      className={styles.usersPhoto}
                      alt=""
                      srcset=""
                    />
                  </NavLink>
                </div>
                <div>
                  {u.followed 
                  ?  <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => { 
                    // axios
                    //   .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    //     withCredentials: true,
                    //     headers: {
                    //       "API-KEY": "1ff674f1-079c-4d68-a126-7a2284f39d5d"
                    //     }
                    //   })
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.deleteUsers(u)
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unFollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}>Unfollow</button> 
                  
                  :  <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                    // axios
                    //   .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    //     withCredentials: true,
                    //     headers: {
                    //       "API-KEY": "1ff674f1-079c-4d68-a126-7a2284f39d5d"
                    //     }
                    //   })
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.followUsers(u)
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                     }}> Follow </button> }
                </div>
              </span>
              <span>
                <span>
                  <div>{u.fullname}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
                </span>
              </span>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Users