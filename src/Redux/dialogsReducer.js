const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"  

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                id: state.idMessage + 1
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const sendMessage = () => {
  return {
    type: SEND_MESSAGE
  }
}
export const updateNewMessageText = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
}

export default dialogsReducer