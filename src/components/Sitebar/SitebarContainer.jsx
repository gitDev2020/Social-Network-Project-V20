import { connect } from 'react-redux';
import Sitebar from '../Sitebar/Sitebar';

let mapStateToProps = (state) =>{
  return{
    sitebar: state.sitebarPage.sitebar
  }
}

const SitebarConteiner = connect(mapStateToProps, null)(Sitebar)

export default SitebarConteiner;