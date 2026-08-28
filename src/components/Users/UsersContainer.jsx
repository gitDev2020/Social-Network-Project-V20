import { connect } from "react-redux";
import Users from "./Users";
import { followSuccess, followingProgress, requestUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unFollowSuccess } from "../../Redux/usersReducer";
import axios from "axios";
import React from "react";
import Preloader from "../../common/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount(){
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (page) =>{
      this.props.requestUsers(page, this.props.pageSize)
    }
  render() {
    return <>
    {this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
    currentPage={this.props.currentPage} users={this.props.users} onPageChanged={this.onPageChanged}
    follow={this.props.followSuccess} unFollow={this.props.unFollowSuccess} followingInProgress={this.props.followingInProgress} />
    </>
  }
}

let mapStateToProps = (state) =>{
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {followSuccess, unFollowSuccess, setUsers, setCurrentPage, setTotalUsersCount, 
  toggleIsFetching, followingProgress, requestUsers})
)(UsersContainer)