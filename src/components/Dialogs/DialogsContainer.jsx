import { connect } from "react-redux"
import { sendMessageCreator, updateNewMessageTextCreator } from "../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"

let mapStateToProps = (state) =>{
  return{
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let MapDispathToProps = (dispatch) =>{
  return{
    sendMessage: () =>{
      dispatch(sendMessageCreator())
    },
    updateNewMessageText: (text) =>{
      dispatch(updateNewMessageTextCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, MapDispathToProps)(Dialogs)

export default DialogsContainer