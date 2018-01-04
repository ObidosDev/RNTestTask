
import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(App)