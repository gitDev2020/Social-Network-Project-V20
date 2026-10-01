import smod from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { useForm } from "react-hook-form"
import { FormControl } from "../../common/rormControls/FormsControls"
import { maxLenghtCreator, required } from "../../utils/validators/Validator"

const Dialogs = (props) => {
  let dialog = props.dialogsPage.dialogs.map(u => <DialogItem name={u.name} id={u.id} key={u.id} />)
  let message = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />)

  const onSubmit = (values) => {
        props.sendMessage(values.newMessageBody)
    };

  return (
    <div className={smod.dialogsBlock}>
      <div className={smod.dialogsItem}>
        {dialog}
      </div>
      <div className={smod.messages}>
        {message}
        <div className={smod.messageAreaBlock}>
          <MessageForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}

const MessageForm = (props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  return (
    <form onSubmit={ handleSubmit((data) => {props.onSubmit(data); reset();})}>
      <FormControl error={errors.newMessageBody}>
      <div><textarea {...register("newMessageBody", {validate: {
                required,
                max: maxLenghtCreator(50)}})} placeholder="Enter Message" /></div>
      </FormControl>
      <div><button>Send</button></div>
    </form>
  )
}

export default Dialogs