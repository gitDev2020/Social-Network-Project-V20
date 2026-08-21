import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sitebarReducer from "./sitebarReducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { post: "it's my first post", like: 1, id: 1 },
        { post: "Hello!", like: 3, id: 2 },
        { post: "Hi how are you?", like: 0, id: 3 },
      ],
      newPostText: "Text"
    },
    dialogsPage: {
      messages: [
        { message: "Hi", id: 1 },
        { message: "Where are you?", id: 2 },
        { message: "Come to me", id: 3 },
      ],
      dialogs: [
        { name: "User 01", id: 1 },
        { name: "User 02", id: 2 },
        { name: "User 03", id: 3 },
        { name: "User 04", id: 4 },
      ],
      newMessageText: "Text"
    },
    sitebarPage: {
      sitebar: [
        { id: 1, name: "Frend 01" },
        { id: 2, name: "Frend 02" },
        { id: 3, name: "Frend 03" }
      ]
    }
  },
  getState() {
      return this._state
    },
  _callSubscrider() {
},
subscribe(observer) {
  this._callSubscrider = observer
},
idPost: 4,
idMessage: 4,
dispatch(action){
  this._state.profilePage = profileReducer(this._state.profilePage, action)
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
  this._state.sitebarPage = sitebarReducer(this._state.sitebarPage, action)
  this._callSubscrider(this._state)
}
}

window.store = store

export default store