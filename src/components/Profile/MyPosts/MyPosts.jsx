import cmod from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      <div className={cmod.posts}>
        <Post text = "it's my first post" like = "1" />
        <Post text = "Hello!" like = "3" />
        <Post text = "Hi how are you?" like = "0" />
      </div>
    </div>
  )
}

export default MyPosts
