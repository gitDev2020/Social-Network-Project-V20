import { connect } from "react-redux";
import Users from "./Users";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollow } from "../../Redux/usersReducer";
import axios from "axios";
import React from "react";
import Preloader from "../../common/preloader";

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }
    onPageChanged = (page) =>{
      this.props.toggleIsFetching(true)
      this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.toggleIsFetching(false)
        })
    }
  render() {
    return <>
    {this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
    currentPage={this.props.currentPage} users={this.props.users} onPageChanged={this.onPageChanged}
    follow={this.props.follow} unFollow={this.props.unFollow} />
    </>
  }
}

let mapStateToProps = (state) =>{
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer)