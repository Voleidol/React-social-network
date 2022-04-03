import React from "react";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Posts message={p.message} like={p.likesCount}/>)
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = updateNewPostTextActionCreator(text);
    props.uppdateNewPostText(text);
  }

  return (
    <div className={s.posts}>
      my post
      <div className={s.btnBlock}>
        <div>
          <textarea name="" onChange={onPostChange} ref={newPostElement} cols="30" rows="10" value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
