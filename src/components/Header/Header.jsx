import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://dsinterior.ru/wp-content/uploads/2021/01/—Pngtree—instagram-color-icon-instagram-logo_3547787.png"
        alt=""
      />
      <div className={s.loginBlock}>
        { props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
 