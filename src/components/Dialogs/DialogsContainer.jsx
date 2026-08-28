import { connect } from "react-redux"
import { sendMessage, updateNewMessageText } from "../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

let mapStateToProps = (state) =>{
  return{
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

export default compose(
  connect(mapStateToProps, {sendMessage, updateNewMessageText}),
  withAuthRedirect
)(Dialogs)