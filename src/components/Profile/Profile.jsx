import MyPosts from "./MyPosts/MyPosts";
import smod from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={smod.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  )
}

export default Profile;
