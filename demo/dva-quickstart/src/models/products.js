export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete': function(state, { payload: id }) {
      return state.filter(item => item.id !== id)
    }
  }
}