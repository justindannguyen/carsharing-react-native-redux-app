import { connect } from 'react-redux'
import Home from '../components/Home'
import { setName } from '../modules/home'

const mapStateToProps = (state) => ({
  name: state.home.name
})

const mapDispatchToProps = {
  setName
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)