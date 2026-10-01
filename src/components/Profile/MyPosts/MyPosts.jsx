import { useForm } from "react-hook-form";
import smod from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from 'react';
import { maxLenghtCreator, required } from "../../../utils/validators/Validator";
import { FormControl } from "../../../common/rormControls/FormsControls";

const MyPosts = (props) => {
  let posts = props.posts.map(p => <Post text={p.post} like={p.like} id={p.id} key={p.id} />)
  
  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }
  
  return (
    <div className={smod.postsBlock}>
      <h3>My posts</h3>
      <AddPostsForm onSubmit={onAddPost} />
      <div className={smod.posts}>
        {posts}
      </div>
    </div>
  )
}

const AddPostsForm = (props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  return (
    <form onSubmit={ handleSubmit((data) => {props.onSubmit(data); reset();})}>
      <div>
        <FormControl error={errors.newPostText}>
        <textarea {...register("newPostText", {validate: {
          required,
          max: maxLenghtCreator(50)}})
          } placeholder="Post message" />
        </FormControl>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export default MyPosts
