import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm)

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Posts message={p.message} like={p.likesCount}/>)
  
  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.posts}>
      <h3>my post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className="s.posts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
