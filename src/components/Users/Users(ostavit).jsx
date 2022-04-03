import React from "react";
import styles from './Users.module.css'
import * as axios from 'axios'; 
import usersPhoto from '../../assets/images/users.jpg'


let Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
        props.setUsers(response.data.items);
        });
    }
  }
  return <div>
    <button onClick={getUsers}>Get Users</button>
  {
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : usersPhoto} 
              className={styles.usersPhoto} alt="" srcset="" />
            </div>
            <div>
              {u.followed ? <button onClick={() => {props.unfollow(u.id)}} >Unfollow</button> : <button onClick={() => {props.follow(u.id)}} >Follow</button>} 
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
};

export default Users;
