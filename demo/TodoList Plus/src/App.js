import React, { Component } from 'react';
import Table from './Table/Table'
import Form from './Form/Form'
import './App.css';

class App extends Component {
  state = {
    things: []
  }

  handleSubmit = thing => {
    this.setState({
      things: [...this.state.things, thing]
    })
  }

  removeThing = index => {
    const { things } = this.state
    this.setState({
      things: things.filter((thing, i) => {
        return i !== index
      })
    })
  }

  render() {
    const { things } = this.state

    return (
      <div className="App">
        <div>
          <Table 
            thingList={things}
            removeThing={this.removeThing}
          />
        </div>
        <div className="Form">
          <Form
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}


export default App;
