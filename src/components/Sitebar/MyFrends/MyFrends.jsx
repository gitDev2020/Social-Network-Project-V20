import smod from './../Sitebar.module.css';

const Frends = (props) => {
    return (
    <div className = {smod.conteiner}>
        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsQrF0cK_OwBax9m2uIis05ZnSQ3xIV5XwmXgamxF50RcJZaiGA'/>
        {props.name}
    </div>
    ) 
}

export default Frends;