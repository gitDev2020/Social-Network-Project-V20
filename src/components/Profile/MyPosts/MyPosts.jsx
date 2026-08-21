import smod from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from 'react';

const MyPosts = (props) => {
  let posts = props.posts.map(p =>  <Post text={p.post} like={p.like} id={p.id} key={p.id} />)
  let newPostElement = React.createRef()
  let onAddPost = () =>{
    props.addPost()
  }
  let onPostChange = () =>{
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }
  return (
    <div className={smod.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={smod.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts
