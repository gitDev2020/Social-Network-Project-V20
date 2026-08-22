import smod from "./ProfileInfo.module.css"
import usersNoPhoto from '../../../img/users.jpg'

const ProfileInfo = (props) => {
  return (
    <div className={smod.discriptionBlock}>
      <div><b>Name:</b> {props.profile.fullName}</div>
      <div className = {smod.avatar}><img src = {props.profile.photos.large != null ? props.profile.photos.large : usersNoPhoto}/></div>
      <div><b>looking For A Job:</b> {props.profile.lookingForAJob ? 'Ищу' : 'Не ищу'} </div>
      <div><b>Job Description:</b> {props.profile.lookingForAJobDescription}</div>
      <div><h3>My contacts</h3>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.website}</div>
        <div>{props.profile.contacts.vk}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.youtube}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.mainLink}</div>
      </div>
    </div>
  )
}

export default ProfileInfo;
