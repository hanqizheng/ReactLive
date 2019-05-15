import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import "antd/dist/antd.css";

class myForm extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      thing: ''
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { value } = event.target
    console.log(`this is input ${value}`)
    this.setState({
      thing: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { thing } = this.state
    return (
      <div>
        <Form>
          <Form.Item>
            <Input
              placeholder="input something you wanna do."
              value={thing}
              onChange={this.handleChange}
            />
          </Form.Item>

          <Form.Item>
            <Input type="button" value="Add" onClick={this.submitForm} />
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default myForm