import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return <div>
      <h1> My Page </h1>
      {this.props.children}
    </div>
  }
}

export default connect()(App)
