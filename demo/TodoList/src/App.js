import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'
import './App.css';

class App extends Component {
  state = {
    things: []
  }

  removeThing = record => {
    const { things } = this.state
    this.setState({
      things: things.filter((thing) => {
        return thing.thing !== record.thing
      })
    })
  }

  handleSubmit = thing => {
    this.setState({
      things: [...this.state.things, thing]
    })
  }

  render() {
    const { things } = this.state

    return (
      <div className="App">
        <Table
          thingData={things}
          removeThing={this.removeThing}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}


export default App;
