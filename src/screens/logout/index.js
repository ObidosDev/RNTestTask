import { connect } from 'react-redux'
import { logout } from '../../actions'
import LogoutScreen from './logout'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen)
