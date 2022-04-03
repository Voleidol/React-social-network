import React from "react";
import styles from './Users.module.css'
import * as axios from 'axios'; 
import usersPhoto from '../../assets/images/users.jpg'

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <div>
    {
    <div>
      {this.props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : usersPhoto} 
              className={styles.usersPhoto} alt="" srcset="" />
            </div>
            <div>
              {u.followed ? <button onClick={() => {this.props.unfollow(u.id)}} >Unfollow</button> : <button onClick={() => {this.props.follow(u.id)}} >Follow</button>} 
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
  }
}

export default Users;