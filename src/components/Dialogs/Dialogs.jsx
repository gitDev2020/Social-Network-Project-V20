import { NavLink } from "react-router-dom"
import smod from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { sendMessageCreator, updateNewMessageTextCreator } from "../../Redux/State"

const Dialogs = (props) => {
  let dialog = props.dialogData.dialogs.map( u => <DialogItem name={u.name} id={u.id} />)

  let message = props.dialogData.messages.map(m => <Message massege={m.message} id={m.id} />)

  let newMessageBody = props.dialogData.newMessageText
  let onMessageClick = () =>{
    props.dispatch(sendMessageCreator())
  }
  let onMessageChange = (e) =>{
    let text = e.target.value
    props.dispatch(updateNewMessageTextCreator(text))
  }

  return (
    <div className={smod.dialogsBlock}>
      <div className={smod.dialogsItem}>
        {dialog}
      </div>
      <div className={smod.messages}>
        {message}
        <div className={smod.messageAreaBlock}>
          <div><textarea value={newMessageBody} onChange={onMessageChange} placeholder="Enter Message" /></div>
          <div><button onClick={onMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs