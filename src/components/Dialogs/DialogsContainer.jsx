// import React from "react";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
  
  // let state = props.store.getState().dialogsPage;
  
  // let onSendMessageClick = () => {
  //   props.store.dispatch(sendMessageCreator());
  // }

  // let onNewMessageChange = (body) => { 
  //   props.store.dispatch(updateNewMessageBodyCreator(body));
  // }

  // return (
  //   <StoreContext.Consumer>
  //     {(store) => {
  //       let state = store.getState().dialogsPage;

  //       let onSendMessageClick = () => {
  //         store.dispatch(sendMessageCreator());
  //       };

  //       let onNewMessageChange = (body) => {
  //         store.dispatch(updateNewMessageBodyCreator(body));
  //       };
  //       return (
  //         <Dialogs
  //           updateNewMessageBody={onNewMessageChange}
  //           sendMessage={onSendMessageClick}
  //           dialogsPage={state}
  //         />
  //       );
  //     }}
  //   </StoreContext.Consumer>
  // );

  // return (
  //     <Dialogs
  //       updateNewMessageBody={onNewMessageChange}
  //       sendMessage={onSendMessageClick}
  //       dialogsPage={state}
  //     />
  // );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      // dispatch(sendMessageCreator());
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
      // dispatch(updateNewMessageBodyCreator(body));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
