import { profileAPI } from "../api"

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { post: "it's my first post", like: 1, id: 1 },
        { post: "Hello!", like: 3, id: 2 },
        { post: "Hi how are you?", like: 0, id: 3 },
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                post: action.newPostText,
                like: Math.ceil(Math.random() * 2 - 1),
                id: state.posts.length + 1
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) =>({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })
    }
}
export const getStatus = (userId) => async (dispatch) => {
    let res = await profileAPI.getStatus(userId)
        dispatch(setStatus(res.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let res = await profileAPI.updateStatus(status)
        if(res.data.resultCode === 0) {
        dispatch(setStatus(status))
        }
}

export default profileReducer