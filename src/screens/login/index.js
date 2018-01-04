import { connect } from 'react-redux'
import { login } from '../../actions'
import LoginScreen from './login'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  login: (nickname, password) => dispatch(login({ nickname, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
