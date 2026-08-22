const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        { post: "it's my first post", like: 1, id: 1 },
        { post: "Hello!", like: 3, id: 2 },
        { post: "Hi how are you?", like: 0, id: 3 },
    ],
    newPostText: "Text",
    profile: null
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                post: state.newPostText,
                like: Math.ceil(Math.random() * 2 - 1),
                id: state.idPost + 1
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer