import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "I love Julia)", likesCount: 1000 },
        { id: 3, message: "Hello world!", likesCount: 13 },
      ],
      profile: null,
      status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = { 
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case SET_USER_PROFILE: 
      return {
        ...state,
        profile: action.profile
    };
    case SET_STATUS: 
      return {
        ...state,
        status: action.status
    };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText}) // Если фун-я содержит только return то можно его не писать, а использовать такой синтаксис

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then((response) => {
        console.log(response.data)
        dispatch(setUserProfile(response.data));
      });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then((response) => {
        dispatch(setStatus(response.data))
      })
  }
}

export const updateStatus = (status) => { 
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then((response) => {
        if(response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }      
      })
  }
}


export default profileReducer
