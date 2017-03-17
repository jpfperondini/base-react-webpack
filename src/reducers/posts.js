const addPost = (state, post) => ([
  ...state,
  post
])

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return addPost(state, action.post)
    default:
      return state
  }
}
