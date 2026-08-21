import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) =>{
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let MapDispathToProps = (dispatch) =>{
  return{
    addPost: () =>{
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) =>{
      dispatch(updateNewPostTextActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, MapDispathToProps)(MyPosts)

export default MyPostsContainer