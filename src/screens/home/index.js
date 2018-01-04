import { connect } from 'react-redux'
import HomeScreen from './home'

const mapStateToProps = state => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
