export default {
  namespace: 'ppp',
  state: {
    things: []
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};