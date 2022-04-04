const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    // users: [
    //   {
    //     id: 1,
    //     photoUrl:
    //       "https://img2.freepng.ru/20180720/yoq/kisspng-crusades-knights-templar-black-knight-5b51ddf99c8d18.7864521815320918976413.jpg",
    //     followed: false,
    //     fullname: "Dmitry",
    //     status: "I am a boss",
    //     location: { city: "Minsk", country: "Belarus" },
    //   },
    //   {
    //     id: 2,
    //     photoUrl:
    //       "https://img2.freepng.ru/20180720/yoq/kisspng-crusades-knights-templar-black-knight-5b51ddf99c8d18.7864521815320918976413.jpg",
    //     followed: true,
    //     fullname: "Andrew",
    //     status: "I am a boss too",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    //   {
    //     id: 3,
    //     photoUrl:
    //       "https://img2.freepng.ru/20180720/yoq/kisspng-crusades-knights-templar-black-knight-5b51ddf99c8d18.7864521815320918976413.jpg",
    //     followed: false,
    //     fullname: "Alex",
    //     status: "I am a boss too",
    //     location: { city: "Ekaterinburg", country: "Russia" },
    //   }
    // ],
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {...state, users: [ ...state.users, ...action.users ]}

    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId}) // Если фун-я содержит только return то можно его не писать, а использовать такой синтаксис
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users});

export default usersReducer
