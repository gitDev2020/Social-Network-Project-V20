import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'da968c52-0dd5-4be7-94d4-6206ff186e09'}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(res => {return res.data})
    },
    unFollow(id){
        return instance.delete(`follow/${id}`)
        .then(res => {return res})
    },
    follow(id){
        return instance.post(`follow/${id}`, {})
        .then(res => {return res})
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
    },
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
        .then(res => {return res})
    },
}