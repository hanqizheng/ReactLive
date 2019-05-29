import React, { Component } from 'react'
import style from './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      thing: '',
    }
    this.state = this.initialState
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({
      thing: value
    })
    console.log(this.state.thing)
  }

  submitForm = () => {
    this.props.handleSubmit(this.state.thing)
    this.setState(this.initialState)
  }

  render() {
    return (
      <div className={style.formBg}>
        <form>
          <div>
            <input
              type="text"
              defaultValue={this.state.thing}
              className={style.formInput}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="button"
              value="Add"

              className={style.formButton}
              onClick={this.submitForm}
            />
          </div>
        </form>
      </div>
    )
  }

}

export default Form