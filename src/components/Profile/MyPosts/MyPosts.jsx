import smod from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
  let posts = props.posts.map(p =>  <Post text={p.post} like={p.like} id={p.id} />)
  return (
    <div className={smod.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={smod.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts
