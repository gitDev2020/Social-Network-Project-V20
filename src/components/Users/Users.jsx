import axios from "axios";
import smod from "./Users.module.css"
import imgfiller from "../../img/users.jpg"
import { NavLink } from "react-router-dom";

const status = "статус не присвоен";

const Users = (props) => {
  let countPages = Math.min(Math.ceil(props.totalUsersCount / props.pageSize), 100)
  let pages = []
  for (let i = 1; i <= countPages; i++)(
    pages.push(i)
  )
    return (
      <div className={smod.usersBlock}>
        <div>
          {pages.map(p => {
            return <span className={props.currentPage === p && smod.selected} onClick={() => {props.onPageChanged(p)}}>{p}</span>
          })}
        </div>
        {props.users.map(user =>
          <div key={user.id}>
            <span>
              <div>
                <NavLink to = {'/profile/' + user.id}><img src={user.photos.small || imgfiller} alt='' /></NavLink>
              </div>
              {user.followed ? <div><button onClick={() => props.follow(user.id)}>follow</button></div>
                : <div><button onClick={() => props.unFollow(user.id)}>unfollow</button></div>}
            </span>
            <span>
              <div>{user.name}</div>
              <div>{user.status || status}</div>
            </span>
            {/* <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span> */}
          </div>
        )}
      </div>
    )
  }

export default Users