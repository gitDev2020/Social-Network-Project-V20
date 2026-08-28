import React from 'react';
import clas from './Header.module.css'
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, setAuthUserData } from '../../Redux/authReducer';
import { authAPI } from '../../api';

class HeaderContainer extends React.Component {
    componentDidMount(){
    this.props.getAuthUserData()
  }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, getAuthUserData})(HeaderContainer);