import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/State";
import smod from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from 'react';

const MyPosts = (props) => {
  let posts = props.profileData.posts.map(p =>  <Post text={p.post} like={p.like} id={p.id} />)
  let newPostElement = React.createRef()
  let addPost = () =>{
    props.dispatch(addPostActionCreator())
  }
  let onPostChange = () =>{
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }
  return (
    <div className={smod.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.profileData.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={smod.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts
