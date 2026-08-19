import smod from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={smod.item}>
      <img src="https://ianimal.ru/wp-content/uploads/2010/12/smeshnue-kartinki-zhivotnuh-8-01.jpg" alt="item" />
      {props.text}
      <div>
        <span>like: {props.like}</span>
      </div>
    </div>
  )
}

export default Post;
