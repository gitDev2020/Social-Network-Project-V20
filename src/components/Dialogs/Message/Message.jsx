import smod from "./Message.module.css"

const Message = (props) => {
  return (
    <div className={smod.message}>
      {props.massege}
    </div>
  )
}

export default Message