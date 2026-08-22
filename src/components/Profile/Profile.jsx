import Preloader from "../../common/preloader";
import MyPostsContainer from "./MyPosts/myPostsContainer";
import smod from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  if(!props.profile){
    return <Preloader />
  }
  return (
    <div className={smod.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
