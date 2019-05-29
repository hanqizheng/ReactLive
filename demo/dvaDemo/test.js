const state = {
  a: 10
}

const action = {
  type: 'add',
  a: 11
}

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        a: action.a
      }
    case 'minus':
      return state.a - 1
    default:
      return state
  }
}

console.log(state)
const b = reducer(state, action)
console.log(b)