import MyPostsContainer from "./MyPosts/myPostsContainer";
import smod from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={smod.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
