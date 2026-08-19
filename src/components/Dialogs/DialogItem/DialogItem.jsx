import { NavLink } from "react-router-dom"
import smod from "./DialogsItem.module.css"

const Dialog = (props) => {
  return (
    <div className={smod.dialog + " " + smod.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog