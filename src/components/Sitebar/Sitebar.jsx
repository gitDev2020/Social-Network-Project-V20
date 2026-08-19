import smod from './Sitebar.module.css';
import Frends from './MyFrends/MyFrends';


const Sitebar = (props) => {
    let sitebarElements = 
        props.sitebar.map(f => <Frends id = {f.id} key = {f.id} name = {f.name} />)
    return (
        
    <span className = {smod.sitebarBlock}>
      { sitebarElements }
    </span>
    
    )
}

export default Sitebar;