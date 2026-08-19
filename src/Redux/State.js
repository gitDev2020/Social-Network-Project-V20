const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

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
  if (action.type === ADD_POST) {
    let newPost = {
      post: this._state.profilePage.newPostText,
      like: Math.ceil(Math.random() * 2 - 1),
      id: this.idPost + 1
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ""
    this._callSubscrider(this._state)
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    this._state.profilePage.newPostText = action.newText
    this._callSubscrider(this._state)
  } else if(action.type === ADD_MESSAGE){
    let newMessage = {
      message: this._state.dialogsPage.newMessageText,
      id: this.idMessage + 1
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ""
    this._callSubscrider(this._state)
  }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
    this._state.dialogsPage.newMessageText = action.newText
    this._callSubscrider(this._state)
  }
}
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export const sendMessageCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}
export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

window.store = store

export default store