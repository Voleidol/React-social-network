import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import {required } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer"


const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Email"} validate={[required]} name={"email"} component={Input}/>
        </div>
        <div>
          <Field placeholder={"Password"} validate={[required]} name={"password"} component={Input}/>
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, {login})(Login);
