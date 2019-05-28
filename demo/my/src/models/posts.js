import {
  fetchPosts,
  fetchPost
} from '../services/posts' 

export default {
  namespace: 'posts',
  state: {
    loading: false,
    posts: ['1', '2'],
    postsByKey: {
      '1': {
        title: 'learn dva',
        category: 'dva'
      },
      '2': {
        title: 'learn antd',
        category: 'antd'
      }
    }
  },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true }
    },
    hideLoading(state) {
      return { ...state, loading: false }
    },
    save(state, { payload: postsByKey }) {
      return {
        ...state,
        postsByKey,
        posts: Object.keys(postsByKey)
      }
    }
  },
  effects: {
    *fetchPosts(action, { call, put }) {
      const result = yield call(fetchPosts)
      yield put({ type: 'save', payload: result })
      yield put({ type: hideLoading })
    },
    subscriptions: {
      setup({ dispatch, history }) {
        return history.listen(({ pathname }) => {
          if (pathname === '/posts') {
            dispatch({ type: 'fetchPosts' })
          }
        })
      }
    }
  },
  subscriptions: {}
}