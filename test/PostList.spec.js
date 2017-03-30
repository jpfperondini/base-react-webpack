import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import PostList from '../src/components/PostList'

const mockStore = configureMockStore()

test('snapshot test', () => {
  const wrapper = shallow(
    <PostList store={mockStore()}/>
  )
  expect(wrapper).toMatchSnapshot()
})
