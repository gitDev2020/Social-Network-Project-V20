import smod from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { sendMessageCreator, updateNewMessageTextCreator } from "../../Redux/dialogsReducer"

const Dialogs = (props) => {
  let dialog = props.dialogsPage.dialogs.map( u => <DialogItem name={u.name} id={u.id} key={u.id} />)
  let message = props.dialogsPage.messages.map(m => <Message massege={m.message} id={m.id} key={m.id} />)
  let newMessageBody = props.newMessageText

  let onMessageClick = () =>{
    props.sendMessage()
  }
  let onMessageChange = (e) =>{
    let text = e.target.value
    props.updateNewMessageText(text)
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