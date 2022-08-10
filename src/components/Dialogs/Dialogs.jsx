import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} src={d.src} />);
  let messageElements = state.messagesData.map((m) => <Message message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody
  
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements} 
      </div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};

export default Dialogs;
