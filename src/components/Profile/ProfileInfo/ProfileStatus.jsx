import React from 'react';
import smod from './ProfileInfo.module.css'
import Preloader from '../../../common/preloader';


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
      this.setState({
        status: e.currentTarget.value
      })
  }

componentDidUpdate (prevProps, prevState) {
  if (prevProps.status !== this.props.status) {
  this.setState({status: this.props.status})
  }
}

render () {
  return (
    <div className = {smod.statusInStile}>
      { !this.state.editMode &&
      <div>
        <span onDoubleClick = {this.activateEditMode} >{this.props.status || "||--------------||"}</span>
      </div> }
      { this.state.editMode &&
      <div>
        <input onChange = {this.onStatusChange} onBlur = {this.deactivateEditMode} autoFocus = {true} value={this.state.status} ></input>
      </div> }
    </div>
  )
}
}

export default ProfileStatus;