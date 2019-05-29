import React from 'react'
import dva, { connect } from 'dva'

const app = dva()
const props = this.props

app.model({
  namespace: 'count',
  state: 0,
  reducers: {
    add (count) { return count + 1 },
    minus (count) { return count - 1 }
  }
})
const View = connect(({ count }) => ({ count }))(App)
const App = function(props) {
  return (
    <div>
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
    </div>
  )
}



app.router(() => <View />)

app.start('#root')