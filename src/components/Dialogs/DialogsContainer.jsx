import { connect } from "react-redux"
import { sendMessage, updateNewMessageText } from "../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"

let mapStateToProps = (state) =>{
  return{
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
  }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs)

export default DialogsContainer