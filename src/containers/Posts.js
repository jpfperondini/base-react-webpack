import { connect } from 'react-redux'
import AddPost from '../components/AddPost'
import PostList from '../components/PostList'

class Posts extends React.Component {
  render() {
    return <div>
      <h1> Posts </h1>
      <AddPost />
      <PostList />
    </div>
  }
}

export default connect()(Posts)
