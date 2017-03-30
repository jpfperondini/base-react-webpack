import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  posts: state.posts
})

class PostList extends React.Component {
  render() {
    return <div>{this.props.posts.map(post =>
      <div key={_.uniqueId('post_')}>{ post.text }</div>
    )}</div>
  }
}

PostList.propTypes = {
  posts: React.PropTypes.array
}

export default connect(mapStateToProps)(PostList)
