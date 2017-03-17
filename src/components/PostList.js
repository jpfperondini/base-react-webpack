import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  posts: state.posts
})

const renderList = posts => posts.map(post =>
    <div key={_.uniqueId('post_')}>{ post.text }</div>
)

class PostList extends React.Component {
  render() {
    return <div>{ renderList(this.props.posts) }</div>
  }
}

PostList.propTypes = {
  posts: React.PropTypes.array
}

export default connect(mapStateToProps)(PostList)
