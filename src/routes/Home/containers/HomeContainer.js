import { connect } from 'react-redux'
import Home from '../components/Home'
import { getCurrentLocation } from '../modules/home'

const mapStateToProps = (state) => ({
  region: state.home.region
})

const mapDispatchToProps = {
  getCurrentLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)