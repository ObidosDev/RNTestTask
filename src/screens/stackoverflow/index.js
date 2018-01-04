import { connect } from 'react-redux'
import { fetchItems } from '../../actions'
import StackoverflowScreen from './stackoverflow'

const mapStateToProps = state => ({
  itemsData: state.items
})

const mapDispatchToProps = dispatch => ({
  fetchItems: (query, after) => dispatch(fetchItems({ query, after }))
})

export default connect(mapStateToProps, mapDispatchToProps)(StackoverflowScreen)
