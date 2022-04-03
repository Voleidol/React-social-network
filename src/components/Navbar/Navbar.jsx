import React from "react";
import { NavLink } from "react-router-dom";
import s from'./Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" className={navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? s.activeLink : s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={navData => navData.isActive ? s.activeLink : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={navData => navData.isActive ? s.activeLink : s.item}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={navData => navData.isActive ? s.activeLink : s.item}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? s.activeLink : s.item}>Settings</NavLink>
      </div>
      
      <div className={s.item}>
        <NavLink to="/proba" className={navData => navData.isActive ? s.activeLink : s.item}>Settings</NavLink>
      </div>

      <div className={`${s.item} ${s.flex}`}>
        <div className={s.friend}>
           <NavLink to="/friends" className={navData => navData.isActive ? s.activeLink : s.item}>Friends</NavLink> 
        </div>
        <div className={s.img}>
            <img src="https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations.png" alt="" srcset="" />
            <img src="https://st4.depositphotos.com/27867620/30685/v/1600/depositphotos_306857742-stock-illustration-project-manager-simple-illustration.jpg" alt="" srcset="" />
            <img src="https://jurmarketing.ru/wp-content/uploads/2014/12/865829178-612x612.jpg" alt="" srcset="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
