import React from 'react';
import clas from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserProfile, setUserProfile } from '../../Redux/profileReducer';
import { withRouter } from '../../common/withRouter';

class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.router.params.userId
    if(!userId){
      userId = 1372
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return(
      <Profile {...this.props} profile={this.props.profile} />
  )}
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, {setUserProfile, getUserProfile}),
  withRouter,
)(ProfileContainer)