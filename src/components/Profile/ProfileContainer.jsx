import React from 'react';
import clas from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import { setUserProfile } from '../../Redux/profileReducer';
import { withRouter } from '../../common/withRouter';


class ProfileContainer extends React.Component {

  // refreshProfile(){
  //   let userId = this.props.match.params.userId
  //   if (!userId) {
  //     userId = this.props.authUserId
  //     if(!userId){
  //       this.props.history.push('/login')
  //     }
  //   }
  //  this.props.getUserProfile(userId)
  //  this.props.getStatus(userId)
  // }

  componentDidMount(){
    let userId = this.props.router.params.userId
    if(!userId){
      userId = 5
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
      this.props.setUserProfile(res.data)
    })
  }

  // componentDidUpdate(prevProps, prevState, snapshot){
  //   if(this.props.match.params.userId != prevProps.match.params.userId){
  //   this.refreshProfile()
  //   }
  // }

  render() {
    return(
      <Profile {...this.props} profile={this.props.profile} />
  )}
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    // status: state.profilePage.status,
    // authUserId: state.auth.userId
    // //isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))