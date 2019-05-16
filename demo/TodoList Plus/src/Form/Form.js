import React, { Component } from 'react'
import './Form.css'


class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      thing: ''
    }
    this.state = this.initialState
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({
      thing: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    return (
      <div className="form-bg ">
        <form>
          <div>
            <input
              type="text"
              className="form-input"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="button"
              value="Add"
              className="form-button"
              onClick={this.submitForm}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default Form