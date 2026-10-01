import React from 'react';
import clas from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getStatus, getUserProfile, setUserProfile, updateStatus } from '../../Redux/profileReducer';
import { withRouter } from '../../common/withRouter';

class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.router.params.userId
    if(!userId){
      userId = this.props.authUserId
        if(!userId){
          return this.props.router.navigate('/login');
       }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return(
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
  )}
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {setUserProfile, getUserProfile, getStatus, updateStatus}),
  withRouter,
)(ProfileContainer)