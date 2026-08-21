import { NavLink } from "react-router-dom"
import smod from "./Navbar.module.css"
import Sitebar from "../Sitebar/Sitebar"
import SitebarConteiner from "../Sitebar/SitebarContainer"

const Navbar = (props) => {
  return (
    <nsv className={smod.nav}>
      <div className={smod.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={smod.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={smod.item}>
        <NavLink to="/users">Users</NavLink>
      </div>
      <div className={smod.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={smod.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={smod.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <SitebarConteiner sitebar={props.sitebar} />
    </nsv>
  )
}

export default Navbar