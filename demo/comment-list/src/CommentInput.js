import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  componentDidMount() {
    this.textarea.focus()
  }

  componentWillMount() {
    this._loadUsername()
  }

  _saveUsername(username) {
    localStorage.setItem('username', username)
  }

  _loadUsername() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({
        username: username
      })
    }
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
    this._saveUsername(event.target.value)
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({
        username,
        content,
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