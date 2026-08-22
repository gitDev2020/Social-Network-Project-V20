import preloader from '../img/preloader.gif'
import smod from '../components/Users/Users.module.css'

let Preloader = () =>{
    return <img className = {smod.preloader} src = {preloader} />
}

export default Preloader