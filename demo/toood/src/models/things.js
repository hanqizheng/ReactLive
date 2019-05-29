export default {
  namespace: 'things',
  state: {
    things: [
      'Learn dva',
      'Update Todo list',
      'Eat'
    ]
  },
  reducers: {
    addThing(state, { payload: thing }) {
      return {
        things: [...state.things, thing]
      }
    },
    deleteThing(state, { payload: index}) {
      console.log(state)
      return {
        things: state.things.filter((thing, i) => {
          console.log(`${thing} + ${i} + ${index}`)
          return i !== index
        })
      }
    }
  },
  effects: {}
}