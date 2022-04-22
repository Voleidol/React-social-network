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

    deleteUsers(u) {
        return instance
            .delete(`follow/${u.id}`)
    },

    followUsers(u) {
        return instance
            .post(`follow/${u.id}`)
    }
}

export const authentication = {
    auth() {
        return instance
            .get(`auth/me`)
    }
}

export const profile = {
    getProfile(userId) {
        return instance
            .get(`profile/` + userId)
    }
}
