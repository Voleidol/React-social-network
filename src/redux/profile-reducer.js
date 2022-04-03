const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "I love Julia)", likesCount: 1000 },
        { id: 3, message: "Hello world!", likesCount: 13 },
      ],
      newPostText: "It-kamasutra.com"
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = { 
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST}) // Если фун-я содержит только return то можно его не писать, а использовать такой синтаксис
  
export const updateNewPostTextActionCreator = (text) => ({ 
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer

// const profileReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case ADD_POST: 
//             let newPost = {
//                 id: 5,
//                 message: state.newPostText,
//                 likesCount: 0
//               };
//             let stateCopy = {...state};
//             stateCopy.posts = [...state.posts];
//             stateCopy.posts.push(newPost);
//             stateCopy.newPostText = ''
//             return stateCopy;
            
//         case UPDATE_NEW_POST_TEXT: {     
//             let stateCopy = {...state}
//             stateCopy.newPostText = action.newText; 
//             return stateCopy;
//         }
//         default: 
//             return state;
//     }
// };

// export const addPostActionCreator = () => ({type: ADD_POST}) // Если фун-я содержит только return то можно его не писать, а использовать такой синтаксис
  
// export const updateNewPostTextActionCreator = (text) => ({ 
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// })

// export default profileReducer