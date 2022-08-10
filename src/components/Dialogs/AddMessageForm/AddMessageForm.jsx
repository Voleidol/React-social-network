import React from "react"
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators/validators"
import { Textarea } from "../../Common/FormsControls/FormsControls"

const maxLength7 = maxLengthCreator(7)

const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}> 
              <div> 
                <Field component={Textarea} validate={[required, maxLength7]} name="newMessageBody" placeholder="Enter your message" />
              </div>
              <div>
                <button>Send</button>
              </div>
          </form>
    )
  }
  
  export default reduxForm({form: "dialog-add-message-form"}) (AddMessageForm)