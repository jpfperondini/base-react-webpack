import { connect } from 'react-redux'
import { addPost } from '../actions'
import Post from '../models/Post'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.addPost = this.addPost.bind(this)
  }
  addPost() {
    this.props.dispatch(addPost(new Post(1, 'Product 1')))
  }
  render() {
    return <div>
      <button onClick={this.addPost}>Add Post</button>
    </div>
  }
}

AddPost.propTypes = {
  dispatch: React.PropTypes.func
}

export default connect(null, mapDispatchToProps)(AddPost)
