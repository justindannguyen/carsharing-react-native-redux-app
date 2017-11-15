import { connect } from 'react-redux'
import Home from '../components/Home'
import {
  getCurrentLocation,
  setPickupLocationAction,
  setDropLocationAction
} from '../modules/HomeActions'

const mapStateToProps = ({ home }) => ({
  region: home.region,
  pickupLocation: home.pickupLocation,
  dropoffLocation: home.dropoffLocation
})

const mapDispatchToProps = {
  getCurrentLocation,
  setPickupLocation: location => setPickupLocationAction(location),
  setDropLocation: location => setDropLocationAction(location)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)