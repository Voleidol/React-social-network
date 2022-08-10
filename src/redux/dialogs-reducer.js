const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogsData: [
        { id: 1, src: 'https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations.png', name: "Roma"},
        { id: 2, src: 'https://st4.depositphotos.com/27867620/30685/v/1600/depositphotos_306857742-stock-illustration-project-manager-simple-illustration.jpg', name: "Dima"},
        { id: 3, src: 'https://jurmarketing.ru/wp-content/uploads/2014/12/865829178-612x612.jpg', name: "Andrey"},
        { id: 4, src: 'https://jurmarketing.ru/wp-content/uploads/2014/12/865829178-612x612.jpg', name: "Sveta"},
        { id: 5, src: 'https://jurmarketing.ru/wp-content/uploads/2014/12/865829178-612x612.jpg', name: "Julia"},
        { id: 6, src: 'https://jurmarketing.ru/wp-content/uploads/2014/12/865829178-612x612.jpg', name: "Alex"},
      ],

    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How, are tou" },
      { id: 3, message: "Hello" },
      { id: 4, message: "Go cs" },
      { id: 5, message: "Julia" },
      { id: 6, message: "Hello, Roma" },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
              ...state,
              messagesData: [...state.messagesData, {id: 7, message: body}]
            };
        default:
            return state;
    }
  }

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
  
export default dialogsReducer
