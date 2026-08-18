import { NavLink } from "react-router-dom"
import cmod from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nsv className={cmod.nav}>
      <div className={cmod.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={cmod.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={cmod.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={cmod.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={cmod.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nsv>
  )
}

export default Navbar