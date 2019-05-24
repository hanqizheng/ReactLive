import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      username: props.username,
      content: ''
    }
  }

  componentDidMount() {
    this.textarea.focus()
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  handleUsernameBlur(event) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value)
    }
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date() 
      })
    }
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={e => this.handleUsernameBlur(e)}
              onChange={e => this.handleUsernameChange(e)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评 论：</span>
          <div className="comment-field-input">
            <textarea
              value={this.state.content}
              ref={textarea => this.textarea = textarea}
              onChange={e => this.handleContentChange(e)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={e => this.handleSubmit(e)}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput