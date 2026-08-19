import { NavLink } from "react-router-dom"
import smod from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
  let dialog = props.state.dialogs.map( u => <DialogItem name={u.name} id={u.id} />)

  let message = props.state.messages.map(m => <Message massege={m.message} id={m.id} />)

  return (
    <div className={smod.dialogsBlock}>
      <div className={smod.dialogsItem}>
        {dialog}
      </div>
      <div className={smod.messages}>
        {message}
      </div>
    </div>
  )
}

export default Dialogs