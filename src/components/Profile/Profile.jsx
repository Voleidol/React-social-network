import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import s from "./Profile.module.css";
// import Posts from "./MyPosts/Post/Posts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  // let postsElements = props.state.posts.map(p => <Posts message={p.message} like={p.likesCount} />)
  
  return (
    <div>
      <ProfileInfo />
      {/* <MyPostsContainer store={props.store} posts={props.posts} newPostText={props.state.newPostText} dispatch={props.dispatch}/> */}
      {/* <MyPostsContainer store={props.store} /> */}
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

