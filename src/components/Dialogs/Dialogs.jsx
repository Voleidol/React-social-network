import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.dialogsPage;
  // let state = props.store.getState().dialogsPage;
  
  let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} src={d.src} />);
  let messageElements = state.messagesData.map((m) => <Message message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody
  
  let onSendMessageClick = () => {
    props.sendMessage()
    // props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
    // props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements} 
      </div>
      <div className={s.messages}>
        <div>{messageElements}</div> 
        <div>
          <div> 
            <textarea onChange={ onNewMessageChange } placeholder="Enter your message" value={newMessageBody} />
          </div>
          <div>
            <button onClick={ onSendMessageClick }>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
