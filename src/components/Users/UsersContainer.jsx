import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unFollowAC } from "../../Redux/usersReducer";

let mapStateToProps = (state) =>{
  return{
    users: state.usersPage.users
  }
}

let MapDispathToProps = (dispatch) =>{
  return{
    follow: (userId) =>{
      dispatch(followAC(userId))
    },
    unFollow: (userId) =>{
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) =>{
      dispatch(setUsersAC(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, MapDispathToProps)(Users)

export default UsersContainer