import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "I love Julia)", likesCount: 1000 },
        { id: 3, message: "Hello world!", likesCount: 13 },
      ],
      newPostText: "It-kamasutra.com"
    },
  
    dialogsPage: {
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
      ],
  
      newMessageBody: ''
    },

    sidebar: {}
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  _callSubscriber() {
    console.log('State refactor')
  },
  
  dispatch(action) {   // action - объект который описывает свойство которое нужно совершить
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}


export default store;
window.store = store;
//store OOP