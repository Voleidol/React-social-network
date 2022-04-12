import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import s from "./Profile.module.css";
// import Posts from "./MyPosts/Post/Posts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  render () {
    return (
        <Profile {...this.props}/>
    )
  }
};

export default ProfileContainer;

