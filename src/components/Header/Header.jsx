import { NavLink } from "react-router-dom"
import smod from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={smod.header}>
      <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTWDq2p3-0gDoFyfIhJdWK6wUfkNzCsZzVj407gDyGUitzjnTP" alt="item" />
      <div className={smod.login}> {props.isAuth
        ? <div>{props.login} - <button onClick={props.logout} >logout</button></div>
        : <NavLink activeClassName={smod.active} to={'/login'}>Logup
          {/* {<img className = {clas.item} src = {props.profile.photos.large}/> || null} */}
        </NavLink>} </div> 
    </header>
  )
}

export default Header