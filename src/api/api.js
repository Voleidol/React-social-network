import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',  //автоматически будет приклеиваться к строке адреса
    headers: {
        "API-KEY": "1ff674f1-079c-4d68-a126-7a2284f39d5d"
      }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
    },

    follow(userId) {
        return instance
            .post(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {    
        return instance
            .get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance
            .get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance
            .put(`profile/status`, {status: status}); //put имеет имеет body (смотреть док API), в отличие от get и delete, которые работают только с query parametrs(параметры через вопросит. знак)
    }

}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`);
    },

    login(email, password, rememberMe = false) {
        return instance
            .post(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance
            .delete(`auth/login`);
    }
}
