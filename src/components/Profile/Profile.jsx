import MyPosts from "./MyPosts/MyPosts";
import cmod from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={cmod.content}>
      <div>
        Ava + Description
      </div>
        <MyPosts />
    </div>
  )
}

export default Profile;
