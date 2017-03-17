import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

class App extends React.Component {
  render() {
    return <div>
      <h1> My Page </h1>
      {this.props.children}
    </div>
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  children: React.PropTypes.node
}

export default connect(null, mapDispatchToProps)(App)
