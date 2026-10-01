const SEND_MESSAGE = "SEND_MESSAGE"

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
    ]
}

const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                message: action.newMessageBody,
                id: state.messages.length + 1
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

export const sendMessage = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  }
}

export default dialogsReducer